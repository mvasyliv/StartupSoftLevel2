(function () {
    'use strict';

    function homeController($state, accountService) {
        var ctrl = this;
    }

    homeController.$inject = ['$state', 'accountService'];

    angular.module('app')
        .component('profilePage', {
            templateUrl: '/app/profile/profile.html',
            controller: homeController
        })
})()
