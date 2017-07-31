(function () {
    'use strict';

    function settingsController($state, accountService) {
        var ctrl = this;
    }

    settingsController.$inject = ['$state', 'accountService'];

    angular.module('app')
        .component('settingsPage', {
            templateUrl: '/app/settings/settings.html',
            controller: settingsController
        });
})();
