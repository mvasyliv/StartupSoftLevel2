(function () {
    'use strict';

    function utilService(toastr) {
        var vm = this;

        vm.modelErrorsParse = function (modelState) {
            var errors = [];
            for (var key in modelState) {
                for (var i = 0; i < modelState[key].length; i++) {
                    errors.push(modelState[key][i]);
                }
            }
            return errors;
        };

        vm.errorCallback = function (errorMessage) {
            return err => {
                if (errorMessage)
                    toastr.error(errorMessage);

                return Promise.reject(err);
            }
        };

        vm.errorCallbackToastr = function (errorMessage) {
            return err => {
                if (errorMessage)
                    toastr.error(errorMessage);
                else
                    toastr.error(err.statusText);

                return Promise.reject(err);
            }
        };

        vm.successCallback = function (successMessage) {
            return response => {
                if (successMessage)
                    toastr.success(successMessage);

                return response.data;
            }
        }
    }

    utilService.$inject = ['toastr'];

    angular
        .module('util.service', [])
        .service('utilService', utilService);

})();


