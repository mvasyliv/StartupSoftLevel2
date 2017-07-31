(function () {
    angular.module('ss.account', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('signin', {
                    url: "/signin?returnUrl",
                    template: '<signin-page></signin-page>',
                    data: {
                        pageTitle: 'Sign In',
                        noLogin: true
                    },
                    resolve: {
                        authorize: ['authorizationService', function (authorizationService) {
                            return authorizationService.authorize();
                        }]
                    },
                })
                .state('signup', {
                    url: "/signup",
                    template: '<signup-page></signup-page>',
                    data: {
                        pageTitle: 'Sign Up',
                        noLogin: true
                    },
                    resolve: {
                        authorize: ['authorizationService', function (authorizationService) {
                            return authorizationService.authorize();
                        }]
                    }
                })
                .state('forgotPassword', {
                    url: "/forgotpassword",
                    template: '<forgot-password-page></forgot-password-page>',
                    data: {
                        pageTitle: 'Forgot password',
                        noLogin: true
                    },
                    resolve: {
                        authorize: ['authorizationService', function (authorizationService) {
                            return authorizationService.authorize();
                        }]
                    },
                })
                .state('resetPassword', {
                    url: "/resetpassword?email&code",
                    template: '<reset-password-page></reset-password-page>',
                    data: {
                        pageTitle: 'Reset password',
                        noLogin: true
                    },
                    resolve: {
                        authorize: ['authorizationService', function (authorizationService) {
                            return authorizationService.authorize();
                        }]
                    },
                    onEnter: ['$state', '$stateParams', function ($state, $stateParams) {
                        if (!$stateParams.email && !$stateParams.code)
                            $state.go('notfound');
                    }]
                });
        }])
})();