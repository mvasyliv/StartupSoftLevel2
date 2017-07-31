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

namespace Academy.Web.Eamil
{
    public class Email : Postal.Email
    {
        Postal.EmailService emaiService;
        public Email(string viewName) : base(viewName)
        {
            var smtpServerUserName = ConfigurationManager.AppSettings["SmtpUsername"];
            var smtpServerPassword = ConfigurationManager.AppSettings["SmtpPassword"];

            var client = new SmtpClient();
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.Credentials = new NetworkCredential(smtpServerUserName, smtpServerPassword);
            emaiService = new EmailService(ViewEngines.Engines, () => client);
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
}
