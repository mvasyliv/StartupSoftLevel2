// By Sasha Mykhalchuk

(function () {
    'use strict';

    function signupCoachController($state, accountService, utilService, vcRecaptchaService, accessConfig) {
        var ctrl = this;

        ctrl.serverError;
        ctrl.register = {};

        ctrl.signUp = function (form) {
            if (form.$valid)
                accountService.signUp(ctrl.register)
                    .then(function onSuccess(data) {
                        ctrl.signInInfo = {
                            grant_type: 'password',
                            username: ctrl.register.email,
                            password: ctrl.register.password,
                        };
                        ctrl.register.captcha = '';
                        accountService.signIn(ctrl.signInInfo).then(function onSuccess() {
                            $state.go(accessConfig.authState);
                        });
                    }, function onError(response) {
                        var data = response.data;

                        if (data.modelState)
                            ctrl.serverError = utilService.modelErrorsParse(data.modelState);
                    });
        }
    }

    signupCoachController.$inject = ['$state', 'accountService', 'utilService', 'vcRecaptchaService', 'accessConfig'];

    angular.module('app')
        .component('signupPage', {
            templateUrl: '/app/account/signup.html',
            controller: signupCoachController
        });
})()
