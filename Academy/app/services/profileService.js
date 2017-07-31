(function () {
    'use strict';

    function profileService($http, $rootScope, $state, localStorageService, toastr, currentUserService, utilService) {
        var factory = this;
        var api = "/api/v1";

        factory.me = function (id) {
            return $http.get(api + "/profile/me", { params: { id: id } })
                .then(utilService.successCallback())
                .catch(utilService.errorCallbackToastr());
        }

        factory.get = function (id) {
            return $http.get(api + "/profile/" + id)
                .then(utilService.successCallback())
                .catch(utilService.errorCallbackToastr());
        }

        factory.isInRole = function (roles, role) {
            if (!roles)
                return false;

            return roles.some(arrVal => role.toLowerCase() === arrVal.toLowerCase());
        }
    };

    profileService.$inject = ['$http', '$rootScope', '$state', 'localStorageService', 'toastr', 'currentUserService', 'utilService'];

    angular
        .module('profile.service', [])
        .service('profileService', profileService);

})();