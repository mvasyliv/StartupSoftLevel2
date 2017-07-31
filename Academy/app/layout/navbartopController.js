(function () {
    'use strict';

    function navbartopController($state, accountService, currentUserService, appConfig, profileService, $uibModal) {
        var ctrl = this;
        ctrl.currentUserService = currentUserService;
        ctrl.appConfig = appConfig;

        ctrl.currentState = $state;

        ctrl.completeProfileModal = function () {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title-bottom',
                ariaDescribedBy: 'modal-body-bottom',
                animation: true,
                component: 'completeProfileModal'
            });
        }


        ctrl.verifyCompleteProfile = function (event, stateNumber) {
            if (ctrl.currentState.current.name == 'completeprofile') {
                ctrl.completeProfileModal();
            } else {
                if (stateNumber == 0) {
                    $state.go('completeprofile');
                }
                if (stateNumber == 1) {
                    $state.go('forum');
                }
            }
        }

      


        ctrl.logOut = function () {
            accountService.logOut();
        }

    }

    navbartopController.$inject = ['$state', 'accountService', 'currentUserService', 'appConfig', 'profileService', '$uibModal'];

    angular.module('app')
        .component('navBarTop', {
            templateUrl: '/app/layout/navbartop.html',
            controller: navbartopController
          
        });
})()
