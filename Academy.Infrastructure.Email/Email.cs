using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Postal;
using System.Configuration;
using System.Net;
using System.Net.Mail;
using System.Web.Mvc;
using System.Reflection;

namespace WatchRecruit.Web
{
    public class Email : Postal.Email
    {
        Postal.EmailService emaiService;
        public Email(string viewName) : base(viewName)
        {
            var tt = typeof(Email).Assembly;

            var engines = new System.Web.Mvc.ViewEngineCollection {
                new ResourceRazorViewEngine1(typeof(Email).Assembly, @"WatchRecruit.Web.Util.Views")
            };
            //engines.Add(new FileSystemRazorViewEngine(viewsPath));


            var smtpServerUserName = ConfigurationManager.AppSettings["SmtpUsername"];
            var smtpServerPassword = ConfigurationManager.AppSettings["SmtpPassword"];

            var client = new SmtpClient();
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.Credentials = new NetworkCredential(smtpServerUserName, smtpServerPassword);
            client.EnableSsl = true;
            emaiService = new Postal.EmailService(engines, () => client);
            //emaiService = new Postal.EmailService(System.Web.Mvc.ViewEngines.Engines, () => client);
        }

        public void Send()
        {
            emaiService.Send(this);
        }

        public Task SendAsync()
        {
            return emaiService.SendAsync(this);
        }
    }


    public class ResourceRazorViewEngine1 : System.Web.Mvc.IViewEngine
    {
        private readonly Assembly viewSourceAssembly;
        private readonly string viewPathRoot;

        /// <summary>
        /// Creates a new <see cref="ResourceRazorViewEngine"/> that finds views in the given assembly.
        /// </summary>
        /// <param name="viewSourceAssembly">The assembly containing view resources.</param>
        /// <param name="viewPathRoot">A common resource path prefix.</param>
        public ResourceRazorViewEngine1(Assembly viewSourceAssembly, string viewPathRoot)
        {
            this.viewSourceAssembly = viewSourceAssembly;
            this.viewPathRoot = viewPathRoot;
        }

        /// <summary>
        /// Tries to find a razor view (.cshtml or .vbhtml files).
        /// </summary>
        public ViewEngineResult FindPartialView(ControllerContext controllerContext, string partialViewName, bool useCache)
        {
            var possibleFilenames = new List<string>();

            if (!partialViewName.EndsWith(".cshtml", StringComparison.OrdinalIgnoreCase)
                && !partialViewName.EndsWith(".vbhtml", StringComparison.OrdinalIgnoreCase))
            {
                possibleFilenames.Add(partialViewName + ".cshtml");
                possibleFilenames.Add(partialViewName + ".vbhtml");
            }
            else
            {
                possibleFilenames.Add(partialViewName);
            }

            var possibleFullPaths = possibleFilenames.Select(GetViewFullPath).ToArray();

            var existingPath = possibleFullPaths.FirstOrDefault(ResourceExists);

            if (existingPath != null)
            {
                return new ViewEngineResult(new ResourceRazorView(viewSourceAssembly, existingPath), this);
            }

            return new ViewEngineResult(possibleFullPaths);
        }

        /// <summary>
        /// Tries to find a razor view (.cshtml or .vbhtml files).
        /// </summary>
        public ViewEngineResult FindView(ControllerContext controllerContext, string viewName, string masterName, bool useCache)
        {
            return FindPartialView(controllerContext, viewName, useCache);
        }

        /// <summary>
        /// Does nothing.
        /// </summary>
        public void ReleaseView(ControllerContext controllerContext, IView view)
        {
            // Nothing to do here - ResourceRazorView does not need disposing.
        }

        string GetViewFullPath(string path)
        {
            return String.Format("{0}.{1}", viewPathRoot, path);
        }

        bool ResourceExists(string name)
        {
            var t1 = viewSourceAssembly.GetManifestResourceNames();
            var t2 = t1.Contains(name);

            return t2;
        }
    }
}
