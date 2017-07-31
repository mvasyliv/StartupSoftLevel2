(function () {
    angular.module('ss.settings', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('settings', {
                    url: "/settings",
                    template: '<settings-page></settings-page>',
                    data: {
                        pageTitle: 'Settings',
                    }
                })
        }])
})();