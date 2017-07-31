(function () {
    angular.module('ss.home', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('home', {
                    url: "/",
                    template: '<home-page></home-page>',
                    data: {
                        pageTitle: 'Home',
                        noLogin: true
                    },
                    resolve: {
                        authorize: ['authorizationService', function (authorizationService) {
                            return authorizationService.authorize();
                        }]
                    }
                })
        }])
})();