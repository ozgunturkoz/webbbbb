using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebProgrammingProject.Models
{
    public class Reservation
    {
        [Key]
        public int Reservation_ID { get; set; }

        public int Passenger_ID { get; set; }

        public int Seat_ID { get; set; }

        public DateTime Date_Of_Reservation { get; set; }
    }
}