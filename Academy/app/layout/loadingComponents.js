(function () {
    'use strict';

    function loadingController($rootScope, $timeout) {
        var vm = this;
        vm.isLoading = false;
        $rootScope.isLoading = false;
        var timer = null;
        var listTimer = [];

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if ((toState.name !== "signin") && (!fromState.name.includes('.'))) {
                timer = $timeout(function () {
                    //console.log('$stateChangeStart');
                    $rootScope.isLoading = true;
                    vm.isLoading = true;
                }, 300);
                //console.log("start", timer);

                listTimer.push(timer);
                //console.log("listTimer", listTimer);

            }
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            //console.log('$stateChangeSuccess111');

            for (var i = 0; i < listTimer.length; i++) {
                $timeout.cancel(listTimer[i]);
                //console.log("cancelInList", listTimer[i]);
            }

            listTimer = [];

            //console.log("cancelInList", listTimer);

            $timeout(function () {
                //console.log('$stateChangeSuccess');
                $rootScope.isLoading = false;
                vm.isLoading = false;
            });
        });
    };

    loadingController.$inject = ['$rootScope', '$timeout'];

    angular
        .module('ss.loading', [])
        .component('loadingPage', {
            templateUrl: '/app/layout/loading.html',
            controller: loadingController
        });

})();