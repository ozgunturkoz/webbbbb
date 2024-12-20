using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.EnterpriseServices.Internal;
using System.Linq;
using System.Web;

namespace WebProgrammingProject.Models
{
    public class Payment_Status
    {
        [Key]
        public int Payment_ID { get; set; }

        public bool Payment_Status_YN { get; set; }

        public DateTime Payment_Due_Date { get; set; }

        public decimal Payment_Amount { get; set; }

        public int Reservation_ID { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string CardNumber { get; set; }

        public string ExpiryDate { get; set; }

        public string Cvv { get; set; }
    }
}