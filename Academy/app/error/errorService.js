(function () {
    'use strict';

    function errorService($http) {

        var vm = this;

        vm.errors = {
            invalidLoginAttempt: "Invalid login attempt. Incorrect email or password.",
            notAllFieldsFilled: "All fields must be filled",
            notMatchingPasswords: "The password and confirmation password do not match.",
            newPassSameLikeOld: "New password can`t match with old one.",
            someServerError: "Some server error was occurred. Try again later.",
            tooLongName: "Name is too long (it shouldn`t be longer than 50 characters)."
        };

        vm.invalidLoginAttempt = function () {
            return vm.errors.invalidLoginAttempt;
        }

        vm.notAllFieldsFilled = function () {
            return vm.errors.notAllFieldsFilled;
        }

        vm.notMatchingPasswords = function () {
            return vm.errors.notMatchingPasswords;
        }

        vm.newPassSameLikeOld = function () {
            return vm.errors.newPassSameLikeOld;
        }

        vm.someServerError = function () {
            return vm.errors.someServerError;
        }

        vm.tooLongName = function () {
            return vm.errors.tooLongName;
        }
    };

    errorService.$inject = ['$http'];

    angular
      .module('error.service', [])
      .service('errorService', errorService);

})();