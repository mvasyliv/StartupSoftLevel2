using Microsoft.AspNet.Identity;
using Academy.Domain.Entities;
using Academy.Domain.Entities.ViewModels;
using Academy.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.Identity.Owin;
using Academy.Domain.Interfaces;
using System.Net;
using Academy.Domain.Entities.Models;
using System.Configuration;
using Academy.Domain.Entities.Infrastructure;
using System.Net.Http;

namespace Academy.Infrastructure.Business
{
    public class AccountService : IAccountService
    {

        #region Initialization
        private ApplicationUserManager _userManager;
    

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }
        #endregion

 



    }
}
