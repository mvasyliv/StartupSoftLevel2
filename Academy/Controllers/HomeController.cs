using System.Web.Mvc;

namespace Academy.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Views/Shared/_LoadingPage.cshtml");
        }
    }
}