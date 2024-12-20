using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebProgrammingProject.Models
{
    public class Flight_Service
    {
        [Key]
        public int Service_ID { get; set; }

        public string Service_Name { get; set; }
    }
}