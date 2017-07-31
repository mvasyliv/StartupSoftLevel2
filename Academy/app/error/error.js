(function () {
    angular.module('ss.error', ['error.service'])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('notfound', {
                    url: "/error/not-found?{aspxerrorpath}",
                    templateUrl: '/app/error/notfound.html',
                    data: {
                        pageTitle: 'Page Not Found',
                        noLogin: true
                    }
                })
                .state('servererror', {
                    url: "/error/server-error?{aspxerrorpath}",
                    templateUrl: '/app/error/servererror.html',
                    data: {
                        pageTitle: 'Page Not Found',
                        noLogin: true
                    }
                })
                .state('accessdenied', {
                    url: "/error/access-denied",
                    templateUrl: '/app/error/accessDenied.html',
                    data: {
                        pageTitle: 'Access to page denied',
                        noLogin: true
                    },
                    resolve: {
                        //logout: ['accountService', function (accountService) {
                        //    return accountService.logOut();
                        //}]
                    }
                });
        }]);
})();