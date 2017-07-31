using Ninject;
using Academy.Domain.Interfaces;
using Academy.Infrastructure.Business;
using Academy.Infrastructure.Data;
using Academy.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Web.Mvc;
using Academy.Infrastructure.Business.RealtimeServices;
using Academy.Infrastructure.Business.Hubs;
using Academy.Services.Interfaces.RealtimeServices;

namespace Academy.Web.Util
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private IKernel kernel;

        public NinjectDependencyResolver(IKernel kernelParam)
        {
            kernel = kernelParam;
            AddBindings();
        }

        public object GetService(Type serviceType)
        {
            return kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return kernel.GetAll(serviceType);
        }

        private void AddBindings()
        {
            //hub
            kernel.Bind<UserActivityHub>().To<UserActivityHub>().InSingletonScope();

            //realtime services
            kernel.Bind<ITestRealtimeService>().To<TestRealtimeService>();

            //configuration

            // repository
            kernel.Bind<ITestModelRepository>().To<TestModelRepository>();
            kernel.Bind<IUserRepository>().To<UserRepository>();


            // service
            kernel.Bind<IUserService>().To<UserService>();
            kernel.Bind<IAccountService>().To<AccountService>();
            kernel.Bind<ISettingsService>().To<SettingsService>();
        }
    }
}