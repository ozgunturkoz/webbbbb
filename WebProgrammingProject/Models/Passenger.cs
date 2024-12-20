using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebProgrammingProject.Models
{
    public class Passenger
    {
        [Key]
        public int Passenger_ID { get; set; }

        [Required]
        public string P_FirstName { get; set; }

        [Required]
        public string P_LastName { get; set; }

        public string P_BirthDate { get; set; }

        public string P_Email { get; set; }

        public string P_PhoneNumber { get; set; }

        public string P_Gender { get; set; }

        public string P_FrequentFlightNum { get; set; }

        [Required]
        public string P_TC { get; set; }

        public string PNR { get; set; }
    }
}