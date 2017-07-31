/* App Module */
angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ss.error',
    'ss.access',
    'ss.loading',
    'ss.home',
    'ss.account',
    'ss.profile',
    'ss.settings',
    'account.service',
    'authorization.service',
    'currentUser.service',
    'profile.service',
    'realtime.service',
    'util.service',
    'ngMessages',
    'interceptorRequestError',
    'toastr',
    'LocalStorageModule',
    'ngFileUpload',
    'vcRecaptcha',
    'ngIntlTelInput'
])
    .constant('appConfig', {
        'urlAzureBlob': 'https://test.blob.core.windows.net/'
    })
    .config(['$sceDelegateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'toastrConfig', '$stateProvider', 'accessConfig', 'errorConfig', 'ngIntlTelInputProvider', '$qProvider',
        function ($sceDelegateProvider, $urlRouterProvider, $locationProvider, $httpProvider, toastrConfig, $stateProvider, accessConfig, errorConfig, ngIntlTelInputProvider, $qProvider) {
            ngIntlTelInputProvider.set({ initialCountry: 'us' });

            new WOW().init();

            angular.extend(toastrConfig, {
                allowHtml: true,
                newestOnTop: true,
                progressBar: true,
                //positionClass: 'toast-bottom-left',
                preventOpenDuplicates: true
            });

            angular.extend(accessConfig, {
                notAuthState: 'signin',
                authState: 'profile',
                accessdeniedState: 'accessdenied'
            });

            errorConfig.exeptUrlToastr.push('/api/v1/account/register/coach');

            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

            //$qProvider.errorOnUnhandledRejections(false);

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

            $urlRouterProvider.otherwise("/error/not-found");

            $sceDelegateProvider.resourceUrlWhitelist([
                'self',
                'https://test.blob.core.windows.net/**'
            ]);
        }])
    .run(['$http', '$rootScope', 'localStorageService', 'currentUserService', function ($http, $rootScope, localStorageService, currentUserService) {
        //realtimeService.on("testClient", function (data) {
        //    console.log(data);
        //    debugger;
        //});

        //realtimeService.invoke("Send", "Send 111111");

        var userInfo = localStorageService.get('currentUser');

        if (userInfo && new Date(userInfo.expires) > new Date()) {
            angular.extend(currentUserService, userInfo);
            $http.defaults.headers.common.Authorization = userInfo.token;

            console.log("currentUser", userInfo);
        }
    }]);
