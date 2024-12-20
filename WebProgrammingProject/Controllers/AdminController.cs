using airportDbProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebProgrammingProject.Controllers
{
    public class AdminController : Controller
    {

        private airportDb _context = new airportDb();
        // GET: Admin

        [Authorize(Users = "admin@gmail.com")]

        public ActionResult Index()
        {
            return View();
        }
    }
}