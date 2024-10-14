using System.ComponentModel.DataAnnotations;

namespace Auth_project.Models
{
    public class UserDTO
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
