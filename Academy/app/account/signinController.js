

(function () {
    'use strict';

    function signinController($state, accountService, currentUserService, $http, utilService) {
        var ctrl = this;
        ctrl.signInInfo = { grant_type: 'password' };

        ctrl.signIn = function (form) {
            if (form.$valid)
                accountService.signIn(ctrl.signInInfo)
                    .then(function onSuccess(response) {
                        var data = response.data;
                        if (data && data.completeProfile == false) {
                            $state.go('completeprofile');
                        } else if (data && data.completeProfile == true) {
                            $state.go('profile');
                        }
                    }, function onError(response) {
                        // Handle error
                        var data = response.data;
                        debugger;

                        if (data.error_description)
                            ctrl.serverError = data.error_description;
                    });
        }
    }

    signinController.$inject = ['$state', 'accountService', 'currentUserService', '$http', 'utilService'];

    angular.module('app')
        .component('signinPage', {
            templateUrl: '/app/account/signin.html',
            controller: signinController
        });
})()
