using MongoDB.Driver;
using Academy.Domain.Entities.Models;
using Academy.Domain.Interfaces;
using Academy.Services.Interfaces;
using System.Threading.Tasks;
using Academy.Domain.Entities.ViewModels;
using Academy.Domain.Entities.Struct;
using Microsoft.AspNet.Identity;
using Academy.Domain.Entities.Infrastructure;
using System;
using System.Web;
using Microsoft.AspNet.Identity.Owin;
using Academy.Domain.Entities.Enums;
using System.Web.Http;
using Academy.Infrastructure.Data.Utility.AzureBlob;
using Academy.Domain.Entities.Dictionaries;
using System.Linq;

namespace Academy.Infrastructure.Business
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private ServiceResult<ApplicationUser> _serviceResult;

        public UserService(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

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

        public async Task<ShortUser> GetCurrentUser(string id)
        {
            var result = await _userRepository.GetCurrentUser(id);
            result.Image = UploadImageProperties.BlobAdress + result.Image;
            return result;
        }

        public async Task<IdentityResult> Register(RegisterBindingModel model)
        {
            var user = new ApplicationUser()
            {
                UserName = model.Email,
                Email = model.Email,
                FullName = model.FullName
            };

            var result = await UserManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                UserManager.AddToRole(user.Id, UserRoles.Coach.ToString());
            }
            return result;
        }



    }
}
