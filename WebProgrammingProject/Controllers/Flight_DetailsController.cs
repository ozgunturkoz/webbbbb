using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WebProgrammingProject.Models;
using airportDbProject.Models;

namespace WebProgrammingProject.Controllers
{
    public class Flight_DetailsController : Controller
    {
        private airportDb db = new airportDb();



        // GET: Flight_Details
        public ActionResult Index()
        {
            var flights = db.Flight_Detailss.ToList();

            return View(flights);
        }

        // GET: Flight_Details/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Flight_Details flight_Details = db.Flight_Detailss.Find(id);
            if (flight_Details == null)
            {
                return HttpNotFound();
            }
            return View(flight_Details);
        }

        // GET: Flight_Details/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Flight_Details/Create
        // Aşırı gönderim saldırılarından korunmak için bağlamak istediğiniz belirli özellikleri etkinleştirin. 
        // Daha fazla bilgi için bkz. https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Source_Airport_ID,Destination_Airport_ID,Departure_Date_Time,Arrival_Date_Time,Price,Capacitiy")] Flight_Details flight_Details)
        {
            if (ModelState.IsValid)
            {
                db.Flight_Detailss.Add(flight_Details);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(flight_Details);
        }

        // GET: Flight_Details/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Flight_Details flight_Details = db.Flight_Detailss.Find(id);
            if (flight_Details == null)
            {
                return HttpNotFound();
            }
            return View(flight_Details);
        }

        // POST: Flight_Details/Edit/5
        // Aşırı gönderim saldırılarından korunmak için bağlamak istediğiniz belirli özellikleri etkinleştirin. 
        // Daha fazla bilgi için bkz. https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Flight_ID,Source_Name,Destination_Name,Departure_Date_Time,Arrival_Date_Time,Price,Capacitiy")] Flight_Details flight_Details)
        {
            if (ModelState.IsValid)
            {
                db.Entry(flight_Details).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(flight_Details);
        }



        // GET: Flight_Details/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Flight_Details flight_Details = db.Flight_Detailss.Find(id);
            if (flight_Details == null)
            {
                return HttpNotFound();
            }
            return View(flight_Details);
        }

        // POST: Flight_Details/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Flight_Details flight_Details = db.Flight_Detailss.Find(id);
            db.Flight_Detailss.Remove(flight_Details);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}