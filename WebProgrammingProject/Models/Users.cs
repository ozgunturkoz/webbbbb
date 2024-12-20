using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebProgrammingProject.Models
{
    public class Users
    {
        [Key]
        public int UserID { get; set; }

        [Required]
        public string FName { get; set; }

        [Required]
        public string LName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string UserPassword { get; set; }
    }
}