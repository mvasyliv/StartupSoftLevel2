
(function () {
    'use strict';

    angular.module('ngOwlCarousel', [])
        .directive('ngOwlCarousel', ['$timeout', '$templateRequest', '$document', '$compile', '$uibPosition',
            function ($timeout, $templateRequest, $document, $compile, $uibPosition) {
                return {
                    restrict: 'EA',
                    link: function (scope, el, attrs) {

                        $timeout(function () {
                            el.owlCarousel({
                                loop: true,
                                margin: 10,
                                nav: true,
                                items: 1,

                            })
                        },5000)
                      

                    }
                }
            }]);
})()
