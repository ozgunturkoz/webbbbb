using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebProgrammingProject.Models;

namespace WebProgrammingProject.Models
{

    public class Flight_Details
    {

        [Key]
        public int Flight_ID { get; set; }

        public int Source_Airport_ID { get; set; }

        public int Destination_Airport_ID { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime Departure_Date_Time { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime Arrival_Date_Time { get; set; }

        public int Price { get; set; }
        public int Capacitiy { get; set; }

        public string Source_Name { get; set; }

        public string Destination_Name { get; set; }
        public IEnumerator GetEnumerator()
        {
            // Döngüde kullanılacak öğeleri döndürün.
            // Örneğin, içerideki bir koleksiyonun GetEnumerator'ını çağırabilirsiniz.
            return new List<Flight_Details>().GetEnumerator();
        }
        public virtual List<Airport> Airports { get; set; }
    }
}
