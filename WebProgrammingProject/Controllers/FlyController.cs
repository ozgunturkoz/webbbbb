using airportDbProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebProgrammingProject.Models;


namespace WebProgrammingProject.Controllers
{
    public class FlyController : Controller
    {

        private readonly airportDb _context = new airportDb();

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult SelectFlight()
        {
            // Tüm Flight_Details verilerini çek
            var allFlights = _context.Flight_Detailss.ToList();

            
            return View(allFlights);
        }

        public ActionResult PassengerDetails()
        {

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult PassengerDetails([Bind(Include = "Passenger_ID,P_FirstName,P_LastName,P_Gender,P_BirthDate,P_TurkishCitizen,P_TCNo,P_FrequentFlightNumber,P_Email,P_PhoneNumber,P_AllowSMS,P_AllowEmail")] Passenger passenger)
        {
            if (ModelState.IsValid)
            {
                _context.Passengers.Add(passenger);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View("PassengerDetails", passenger);
        }
        public ActionResult AdditionalService()
        {

            return View();
        }
        public ActionResult Payment()
        {
            ViewBag.PaymentMessage = TempData["PaymentMessage"] as string;
            return View();
        }
    }
}