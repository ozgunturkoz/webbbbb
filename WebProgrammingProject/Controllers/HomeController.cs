using airportDbProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace WebProgrammingProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly airportDb _context = new airportDb();

        public ActionResult Index()
        {
            // DepartureCities dropdownlist için
            var departureAirports = _context.Airports.Select(a => new SelectListItem
            {
                Value = a.Airport_ID.ToString(),
                Text = a.AirportCity
            }).ToList();
            ViewBag.DepartureAirports = new SelectList(departureAirports, "Value", "Text");

            // ArrivalCities dropdownlist için
            var arrivalAirports = _context.Airports.Select(a => new SelectListItem
            {
                Value = a.Airport_ID.ToString(),
                Text = a.AirportCity
            }).ToList();
            ViewBag.ArrivalAirports = new SelectList(arrivalAirports, "Value", "Text");

            return View();
        }

        [HttpPost]
        public ActionResult SearchFlights(string departureCity, string arrivalCity, DateTime departureDate, DateTime returnDate, int passengerCount)
        {
            // Uygun filtreleme işlemlerini gerçekleştir
            int departureAirportID = _context.Airports
                .Where(a => a.AirportCity == departureCity)
                .Select(a => a.Airport_ID)
                .FirstOrDefault();

            int arrivalAirportID = _context.Airports
                .Where(a => a.AirportCity == arrivalCity)
                .Select(a => a.Airport_ID)
                .FirstOrDefault();

            var filteredFlights = _context.Flight_Detailss
                .Where(f => f.Source_Airport_ID == departureAirportID
                            && f.Destination_Airport_ID == arrivalAirportID
                            && f.Departure_Date_Time.Date == departureDate.Date
                            && f.Arrival_Date_Time.Date == returnDate.Date)
                .ToList();

            // Model'i view'e ileterek göster
            return View("SelectFlight", filteredFlights);
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult contact()
        {
            return View();
        }


        public ActionResult Login()
        {
            return View();
        }

        public ActionResult BaggageInformation()
        {

            return View();
        }

        public ActionResult Upgrade()
        {

            return View();
        }

        public ActionResult Loungesinformation()
        {

            return View();
        }

        public ActionResult Travelinformation()
        {

            return View();
        }

        public ActionResult Countryinfo()
        {

            return View();
        }
        public ActionResult Check()
        {

            return View();
        }
        public ActionResult FAQ()
        {

            return View();
        }
        public ActionResult Policy()
        {

            return View();
        }
        public ActionResult Privacy()
        {

            return View();
        }

    }
}