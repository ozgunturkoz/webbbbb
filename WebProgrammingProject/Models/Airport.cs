using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebProgrammingProject.Models
{
    public class Airport
    {
        [Key]
        public int Airport_ID { get; set; }

        public string AirportName { get; set; }

        public string AirportCity { get; set; }

        public string AirportCountry { get; set; }

        public virtual List<Flight_Details> Flight_Detailss { get; set; }

    }
}