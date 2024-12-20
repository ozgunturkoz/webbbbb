using airportDbProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebProgrammingProject.Models;




namespace WebProgrammingProject.Controllers
{

    public class PaymentController : Controller
    {



        private airportDb _context = new airportDb();

        // GET: Payment
        public ActionResult Index()
        {
            // Retrieve a list of payments from the database
            var payments = _context.Payment_Statuss.ToList();
            return View(payments);
        }

        // GET: Payment/Details/5
        public ActionResult Details(int id)
        {
            // Retrieve payment details from the database based on the payment ID
            Payment_Status payment = _context.Payment_Statuss.Find(id);

            if (payment == null)
            {
                return HttpNotFound();
            }

            return View(payment);
        }

        // GET: Payment/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Payment/Create
        [HttpPost]
        public ActionResult Create(Payment_Status payment)
        {

            // Validate the model
            if (ModelState.IsValid)
            {
                // Save the payment details to the database
                _context.Payment_Statuss.Add(payment);
                _context.SaveChanges();

                // Redirect to the details page after successful payment creation
                return RedirectToAction("Details", new { id = payment.Payment_ID });
            }

            // If the model is not valid, return to the create page with validation errors
            return View(payment);


        }

        [HttpPost]
        public ActionResult ProcessPayment(Payment_Status payment)
        {

            var isPaymentSuccessful = true;

            if (isPaymentSuccessful)
            {
                TempData["PaymentMessage"] = "Payment is successfull!";
            }
            else
            {
                TempData["PaymentMessage"] = "Invalid payment! Please try again.";
            }


            return RedirectToAction("Payment");
        }
        public ActionResult Payment()
        {
            // Retrieve success message from TempData
            ViewBag.PaymentMessage = TempData["PaymentMessage"] as string;

            // You can add other logic or data retrieval for the Payment.cshtml view here

            return View();
        }
        public ActionResult PaymentSuccess()
        {
            ViewBag.PaymentMessage = "Payment was successful!";
            return View();
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

