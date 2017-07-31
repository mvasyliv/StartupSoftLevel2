(function () {
    'use strict';

    function homeController($state, accountService, vcRecaptchaService, $http) {
        var ctrl = this;
    }

    homeController.$inject = ['$state', 'accountService', 'vcRecaptchaService', '$http'];

    angular.module('app')
        .component('homePage', {
            templateUrl: '/app/home/home.html',
            controller: homeController
        })
})()
