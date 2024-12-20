using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebProgrammingProject.Models
{
    public class Seat_Details
    {
        [Key]
        public int Seat_ID { get; set; }

        public int Flight_ID { get; set; }
    }
}