/*

using Auth_project.Data;
using Auth_project.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Auth_project.Controllers
{
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Check if the user is 18+
                if (model.DateOfBirth > DateTime.Now.AddYears(-18))
                {
                    ModelState.AddModelError("", "You must be at least 18 years old.");
                    return View(model);
                }

                // Hash the password
                var hashedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                    password: model.Password,
                    salt: new byte[16], // Use a proper salt in production
                    prf: KeyDerivationPrf.HMACSHA256,
                    iterationCount: 10000,
                    numBytesRequested: 32));

                var user = new User
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Password = hashedPassword,
                    DateOfBirth = model.DateOfBirth
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return RedirectToAction("Login");
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(string email, string password)
        {
            // Find the user
            var user = _context.Users.SingleOrDefault(u => u.Email == email);
            if (user == null)
            {
                ModelState.AddModelError("", "Invalid login attempt.");
                return View();
            }

            // Verify password
            var hashedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: new byte[16], // Use the same salt used during registration
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 32));

            if (user.Password != hashedPassword)
            {
                ModelState.AddModelError("", "Invalid login attempt.");
                return View();
            }

            // Login success (implement JWT here later)
            return RedirectToAction("Index", "Home");
        }

        // Action to display all users
        [HttpGet]
        public async Task<IActionResult> ViewUsers()
        {
            var users = await _context.Users.ToListAsync();
            return View(users);
        }
    }
}
*/


using Auth_project.Data;
using Auth_project.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Http;
using System;

namespace Auth_project.Controllers
{
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            // Registration logic
            // ...
            return RedirectToAction("Login");
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(string email, string password)
        {
            var user = _context.Users.SingleOrDefault(u => u.Email == email);
            if (user == null)
            {
                ModelState.AddModelError("", "Invalid login attempt.");
                return View();
            }

            var hashedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: new byte[16],
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 32));

            if (user.Password != hashedPassword)
            {
                ModelState.AddModelError("", "Invalid login attempt.");
                return View();
            }

            // Store user details and login time in session
            HttpContext.Session.SetString("UserEmail", user.Email);
            HttpContext.Session.SetString("UserFirstName", user.FirstName);
            HttpContext.Session.SetString("UserLastName", user.LastName);
            HttpContext.Session.SetString("LoginTime", DateTime.Now.ToString());

            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public IActionResult ViewUserDetails()
        {
            var email = HttpContext.Session.GetString("UserEmail");
            var user = _context.Users.SingleOrDefault(u => u.Email == email);

            if (user == null)
            {
                return RedirectToAction("Login");
            }

            return View(user);
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login");
        }
    }
}
