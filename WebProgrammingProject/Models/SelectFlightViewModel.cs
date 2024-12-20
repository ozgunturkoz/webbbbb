using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebProgrammingProject.Models
{
    public class SelectFlightViewModel
    {
        public string DepartureCity { get; set; }
        public string ArrivalCity { get; set; }
        public DateTime DepartureDate { get; set; }
        public List<Flight_Details> Flights { get; set; }
    }

}