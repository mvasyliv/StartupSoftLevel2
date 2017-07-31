using Microsoft.AspNet.Identity;
using Academy.Domain.Interfaces;
using Academy.Infrastructure.Business.Hubs;
using Academy.Services.Interfaces.RealtimeServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Academy.Infrastructure.Business.RealtimeServices
{
    public class TestRealtimeService : ITestRealtimeService
    {
        private IUserRepository _userRepository;
        public TestRealtimeService(IUserRepository _userRepository)
        {
            this._userRepository = _userRepository;
        }

        public async Task Method()
        {
            var userId = HttpContext.Current.User.Identity.GetUserId();
            UserActivityHub.HubContext.Clients.User(userId).test1("test Method1 test1");

            var res = await _userRepository.FindOneAsync(userId);
            UserActivityHub.HubContext.Clients.User(userId).test1("test Method1 test 1 = = = = " + userId);
        }
    }
}
