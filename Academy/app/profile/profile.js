(function () {
    angular.module('ss.profile', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('profile', {
                    url: "/profile/:id",
                    template: '<profile-page profile="$resolve.profile"></profile-page>',
                    params: {
                        id: ['currentUserService', function (currentUserService) {
                            return currentUserService.id
                        }],
                    },
                    data: {
                        pageTitle: 'Profile'
                    },
                    resolve: {
                        profile: ['$stateParams', 'profileService', 'currentUserService', function ($stateParams, profileService, currentUserService) {
                            if (currentUserService.id === $stateParams.id)
                                return profileService.me($stateParams.id);
                            else
                                return profileService.get($stateParams.id);
                        }]
                    }
                })
        }])
})();