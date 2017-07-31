(function () {
    'use strict';

    function currentUserService($http, $timeout, localStorageService) {
        var user = {};

        user.isAuthenticated = function () {
            if (user.token && new Date(user.expires) > new Date())
                return true;
            else
                return false
        }

        user.isInRole = function (role) {
            if (!user.roles)

                return false;

            return user.roles.some(arrVal => role.toLowerCase() === arrVal.toLowerCase());
        }

        user.isAdmin = function () {
            if (!user.roles)
                return false;

            user.roles.forEach(function (item) {
                if (item.toLowerCase() == 'admin')
                    return true;
            });

            return false;
        }

        return user;
    };



    currentUserService.$inject = ['$http', '$timeout', 'localStorageService'];

    angular
        .module('currentUser.service', [])
        .factory('currentUserService', currentUserService);

})();



