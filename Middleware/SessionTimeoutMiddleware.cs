using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

public class SessionTimeoutMiddleware
{
    private readonly RequestDelegate _next;

    public SessionTimeoutMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        var loginTimeString = context.Session.GetString("LoginTime");
        if (loginTimeString != null && DateTime.TryParse(loginTimeString, out var loginTime))
        {
            var duration = DateTime.Now - loginTime;

            if (duration.TotalMinutes > 3) // 3 minutes
            {
                context.Session.Clear(); // Clear session to log out user
                context.Response.Redirect("/User/Login");
                return;
            }
        }

        await _next(context);
    }
}
