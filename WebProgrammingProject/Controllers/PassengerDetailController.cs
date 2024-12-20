using airportDbProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WebProgrammingProject.Models;



namespace WebProgrammingProject.Controllers
{
    public class PassengerDetailController : Controller
    {
        private airportDb _context = new airportDb();

        // GET: PassengeDetail
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Passenger passenger = _context.Passengers.Find(id);

            if (passenger == null)
            {
                return HttpNotFound();
            }

            return View(passenger);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Passenger_ID,P_FirstName,P_LastName,P_Gender,P_BirthDate,P_TurkishCitizen,P_TCNo,P_FrequentFlightNumber,P_Email,P_PhoneNumber,P_AllowSMS,P_AllowEmail")] Passenger passenger)
        {
            if (ModelState.IsValid)
            {
                _context.Passengers.Add(passenger);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(passenger);
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Passenger passenger = _context.Passengers.Find(id);

            if (passenger == null)
            {
                return HttpNotFound();
            }

            return View(passenger);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Passenger_ID,P_FirstName,P_LastName,P_Gender,P_BirthDate,P_TurkishCitizen,P_TCNo,P_FrequentFlightNumber,P_Email,P_PhoneNumber,P_AllowSMS,P_AllowEmail")] PassengerDetail passenger)
        {
            if (ModelState.IsValid)
            {
                _context.Entry(passenger).State = EntityState.Modified;
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(passenger);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Passenger passenger = _context.Passengers.Find(id);

            if (passenger == null)
            {
                return HttpNotFound();
            }

            return View(passenger);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Passenger passenger = _context.Passengers.Find(id);
            _context.Passengers.Remove(passenger);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }

            base.Dispose(disposing);
        }
    }
}

