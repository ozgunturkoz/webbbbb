using airportDbProject.Models;
using System.Linq;
using System.Web.Mvc;

namespace WebProgrammingProject.Controllers
{
    public class AirportController : Controller
    {
        private readonly airportDb _context = new airportDb();

        public ActionResult Index()
        {
            var airports = _context.Airports.ToList();
            return View(airports);
        }
    }
}
