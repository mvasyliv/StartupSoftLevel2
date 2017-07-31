using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Academy.Domain.Entities.Infrastructure;
using Academy.Domain.Entities.Struct;
using Academy.Domain.Entities.ViewModels;

namespace Academy.Services.Interfaces
{
    public interface IUserService
    {
        Task<ShortUser> GetCurrentUser(string id);
        Task<IdentityResult> Register(RegisterBindingModel model);
    }
}
