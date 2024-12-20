using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebProgrammingProject.Models
{
    public class PassengerDetail
    {
        public int Passenger_ID { get; set; }
        public string P_FirstName { get; set; }
        public string P_LastName { get; set; }
        public string P_BirhtDate { get; set; }
        public string P_Email { get; set; }
        public string P_PhoneNumber { get; set; }
        public string P_Gender { get; set; }
        public string P_FrequentFlightNum { get; set; }
        public string P_TC { get; set; }
    }
}