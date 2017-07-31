(function () {
    angular.module('ss.access', [])
        .run(['$rootScope', '$state', '$stateParams', 'currentUserService', 'accessConfig', function ($rootScope, $state, $stateParams, currentUserService, accessConfig) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
                var noLogin = false;

                if (toState.data != null) {
                    if (toState.data.noLogin)
                        noLogin = toState.data.noLogin;
                }

                if (noLogin) {
                    return; // no need to redirect 
                }

                var authenticated = currentUserService.isAuthenticated();

                if (authenticated === false) {
                    e.preventDefault(); // stop current execution
                    $state.go(accessConfig.notAuthState, {}, { reload: true });
                }
                else if (toState.data && toState.data.accessRole) {
                    var userRole = currentUserService.isInRole(toState.data.accessRole);

                    if (!userRole) {
                        e.preventDefault(); // stop current execution
                        $state.go(accessConfig.accessdeniedState, {}, { reload: true });
                    }
                }
            });
        }])
        .constant('accessConfig', {
            notAuthState: 'signin',
            authState: 'profile',
            accessdeniedState: 'accessdenied'
        });
})();