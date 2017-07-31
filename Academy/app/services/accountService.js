(function () {
    'use strict';

    function accountService($http, $rootScope, $state, localStorageService, toastr, currentUserService, utilService) {
        var vm = this;

        vm.signUp = function (model) {
            return $http.post('/api/v1/account/register', model)
                .then(utilService.successCallback('Successfully registered'))
                .catch(utilService.errorCallbackToastr());
        }

        vm.forgotPassword = function (model) {
            return $http.post('/api/v1/account/ForgotPassword', model)
                .then(utilService.successCallback('You sent a message, please check your email'))
                .catch(utilService.errorCallbackToastr());
        }

        vm.resetPassword = function (model) {
            return $http.post('/api/v1/account/ResetPassword', model)
                .then(utilService.successCallback('Successfully, please login'))
                .catch(utilService.errorCallbackToastr());
        }

        vm.signIn = function (model) {
            return $http.post('/api/token', $.param(model))
                .then(function onSuccess(response) {
                    // Handle success
                    var data = response.data;

                    if (!data)
                        return;

                    var currentUser = {};

                    if (data && data.roles)
                        currentUser.roles = data.roles.split(",");

                    if (data && data['.expires'])
                        currentUser.expires = new Date(data['.expires']);
                    if (data && data.facebookLink) {
                        currentUser.facebookLink = data.facebookLink;
                    }
                    //if (data && data.facebookLink) {
                    //    currentUser.facebookLink = data.facebookLink;
                    //}

                    currentUser.token = data.token_type + ' ' + data.access_token;
                    currentUser.userName = data.userName;
                    currentUser.id = data.id;

                    angular.extend(currentUserService, currentUser);

                    localStorageService.set('currentUser', currentUser);
                    $http.defaults.headers.common.Authorization = currentUser.token;

                    console.log('currentUser currentUser', currentUser);
                    return response;
                });
        }

        vm.logOut = function (model) {
            return $http.post('/api/v1/account/Logout', model)
                .then(function onSuccess(response) {
                    localStorageService.remove('currentUser');
                    delete $http.defaults.headers.common.Authorization;
                    delete currentUserService.token;
                    $state.go('home', {}, { reload: true });
                    return response;
                }).catch(utilService.errorCallbackToastr());
        }
    };

    accountService.$inject = ['$http', '$rootScope', '$state', 'localStorageService', 'toastr', 'currentUserService', 'utilService'];

    angular
        .module('account.service', [])
        .service('accountService', accountService);

})();