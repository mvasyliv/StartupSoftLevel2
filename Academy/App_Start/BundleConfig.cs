using System.Web;
using System.Web.Optimization;

namespace Academy.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"
                ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include("~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/respond.js"
            ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                        "~/Content/bootstrap.css",
                        "~/Content/angular-toastr.css",
                        "~/Content/intlTelInput.css",
                        "~/Content/animate.css",
                        "~/Content/ui-bootstrap-custom-2.5.0-csp.css",
                        "~/Content/sass/layout.css",
                        "~/Content/sass/account.css",
                        "~/Content/sass/general.css",
                        "~/Content/sass/variables.css",
                        "~/Content/sass/profile.css",
                        "~/Content/sass/buttons.css",
                        "~/Content/sass/inputs.css",
                        "~/Content/sass/home.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/main").Include(
                        "~/Scripts/init.js",
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-messages.js",
                        "~/Scripts/angular-ui-router.js",
                        "~/Scripts/angular-toastr.tpls.js",
                        "~/Scripts/angular-local-storage.js",
                        "~/Scripts/ui-bootstrap-custom-tpls-2.5.0.js",
                        "~/Scripts/ng-file-upload-all.js",
                        "~/Scripts/angular-recaptcha.js",
                        "~/Scripts/ng-intl-tel-input.js",
                        "~/Scripts/intlTelInput.js",
                        "~/Scripts/utils.js",
                        "~/Scripts/wow.js",
                        "~/app/app.js",
                        "~/app/access/access.js",
                        "~/app/account/forgotPassword/forgotPasswordController.js",
                        "~/app/account/forgotPassword/resetPasswordController.js",
                        "~/app/account/account.js",
                        "~/app/account/signinController.js",
                        "~/app/account/signupController.js",
                        "~/app/error/error.js",
                        "~/app/error/errorService.js",
                        "~/app/error/interceptorRequestError.js",
                        "~/app/home/home.js",
                        "~/app/home/homeController.js",
                        "~/app/layout/loadingComponents.js",
                        "~/app/layout/navbartopController.js",
                        "~/app/settings/settings.js",
                        "~/app/settings/settingsController.js",
                        "~/app/services/accountService.js",
                        "~/app/services/authorizationService.js",
                        "~/app/services/currentUserService.js",
                        "~/app/services/profileService.js",
                        "~/app/services/realtimeService.js",
                        "~/app/services/utilService.js",
                        "~/app/profile/profile.js",
                        "~/app/profile/profileController.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/signalR").Include(
                        "~/Scripts/jquery.signalR-{version}.js"
            ));

#if DEBUG
            BundleTable.EnableOptimizations = false;
#else
            BundleTable.EnableOptimizations = true; 
#endif
        }
    }
}
