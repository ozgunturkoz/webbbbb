using airportDbProject.Models;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Security.Cryptography;
using System.Web.Mvc;
using System.Web.Razor.Parser.SyntaxTree;
using System.Web.Security;
using WebProgrammingProject.Models;

namespace WebProgrammingProject.Controllers
{
    public class AccountController : Controller
    {
        // Veritabanı bağlantısı
        private airportDb _context = new airportDb();

        // GET: /Account/Login
        public ActionResult Login()
        {
            return View();
        }

        // POST: /Account/Login
        [HttpPost]
        public ActionResult Login(Users model)
        {

            // Kullanıcıyı e-posta ve şifre ile doğrula
            var user = _context.Userss.SingleOrDefault(u => u.Email == model.Email && u.UserPassword == model.UserPassword);

            if (user != null)
            {
                FormsAuthentication.SetAuthCookie(user.Email, false);

                // Kullanıcıya ait bilgileri Session içinde sakla
                Session["StudentEmail"] = user.Email;

                // Başarılı giriş durumunda yönlendirme
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ViewBag.Error = "Invalid email or password";
                return View(model);
            }

        }

        [HttpPost]
        public ActionResult Register(Users model)
        {

            using (var dbContext = new airportDb())
            {
                // E-posta kontrolü yapılır
                var existingUser = dbContext.Userss.FirstOrDefault(u => u.Email == model.Email);
                if (existingUser != null)
                {
                    ViewBag.Error = "Bu e-posta adresi zaten kullanımda.";
                    return View("Login", model);
                }

                // Yeni kullanıcı oluşturulur
                dbContext.Userss.Add(model);
                dbContext.SaveChanges();

                FormsAuthentication.SetAuthCookie(model.Email, false);

                // Kullanıcıya ait bilgileri Session içinde sakla
                Session["UserEmail"] = model.Email;

                // Başarılı kayıt durumunda yönlendirme
                return RedirectToAction("Index", "Home");
            }

        }
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");
        }
        public ActionResult Enternewpassword()
        {

            return View();
        }
        public ActionResult ForgotPassword()
        {

            return View();
        }
    }
}
