// By Sasha Mykhalchuk

(function () {
    'use strict';

    function resetPasswordController($state, $stateParams, accountService) {
        var ctrl = this;

        ctrl.resetPasswordModel = {
            email: $stateParams.email,
            code: $stateParams.code
        };

        ctrl.resetPassword = function () {
            accountService.resetPassword(ctrl.resetPasswordModel).then(function onSuccess(response) {
                $state.go('signin');
            }, function onError(response) {
                var data = response.data;

                if (data.modelState && data.modelState.identity)
                    if (data.modelState.identity[1])
                        ctrl.serverError = data.modelState.invalidToken[1];
            });;
        }

    }

    resetPasswordController.$inject = ['$state', '$stateParams', 'accountService'];

    angular.module('app')
        .component('resetPasswordPage', {
            templateUrl: '/app/account/forgotPassword/resetPassword.html',
            controller: resetPasswordController
        });
})()
