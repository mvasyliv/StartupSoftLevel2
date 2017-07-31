// By Sasha Mykhalchuk

(function () {
    'use strict';

    function forgotPasswordController(accountService) {
        var ctrl = this;

        ctrl.emailSent = false;

        ctrl.forgotPassword = function () {
            accountService.forgotPassword(ctrl.forgotMail)
                .then(function onSuccess(response) {
                    ctrl.emailSent = true;
                }, function onError(response) {
                    var data = response.data;
                    if (data.modelState && data.modelState.identity)
                        if (data.modelState.identity[1])
                            ctrl.serverError = data.modelState.identity[1];
                });
        }

    }

    forgotPasswordController.$inject = ['accountService'];

    angular.module('app')
        .component('forgotPasswordPage', {
            templateUrl: '/app/account/forgotPassword/forgotPassword.html',
            controller: forgotPasswordController
        });
})()
