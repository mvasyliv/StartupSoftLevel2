using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Academy.Web.Controllers
{
    public class ErrorController : Controller
    {
        // GET: Error
        public ActionResult NotFound()
        {
            if (Request.IsAjaxRequest())
                return PartialView();
            else
                return View("~/Views/Shared/_LoadingPage.cshtml");
        }
    }
}
