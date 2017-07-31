(function () {
    'use strict';

    var errorConfig = {
        exeptUrlToastr: ['/api/token']
    }

    function interceptorError($q, $injector, $timeout) {
        var interceptor = {
            responseError: function (response) {
                console.log(response);
                var toastr = $injector.get('toastr');
                var $state = $injector.get('$state');

                if (response.status == 500 || response.status == 502) {
                    toastr.error("url: \"" + response.config.url + "\" <br> Contact please administrator", 'Server error');
                    $timeout(function () {
                        $state.go('servererror', {}, { reload: true });
                    });
                }
                else if (response.status == 429) {

                }
                else if (response.status == 400 && errorConfig.exeptUrlToastr.indexOf(response.config.url) === -1) {
                    var titleError = 'Bad request';
                    debugger;
                    var descriptionError = 'url: "' + response.config.url + '"';

                    if (response.data.error_description)
                        descriptionError = response.data.error_description;
                    else if (response.data.error)
                        descriptionError = response.data.error;
                    else if (response.data.message)
                        descriptionError = response.data.message;

                    toastr.error(descriptionError, titleError);
                }
                else if (response.status == 401) {
                    var titleError = "Authorization has been denied for this request";
                    if (response.data.message)
                        titleError = response.data.message;

                    toastr.error(titleError);
                }
                else if (response.status == 403) {
                    var titleError = "Access denied";
                    if (response.data.message)
                        titleError = response.data.message;

                    toastr.error(titleError);
                }
                else if (response.status == 404) {
                    toastr.error("Not found");
                    $timeout(function () {
                        $state.go('notfound', {}, { reload: true });
                    });
                }
                else if (response.status == -1) {
                    toastr.error("The request failed, check your internet connection");
                }

                return $q.reject(response);
            }
        };
        return interceptor;
    };

    function config($httpProvider) {
        $httpProvider.interceptors.push('interceptorError');
    }

    interceptorError.$inject = ['$q', '$injector', '$timeout'];
    config.$inject = ['$httpProvider'];

    angular
        .module('interceptorRequestError', [])
        .constant('errorConfig', errorConfig)
        .config(config)
        .factory('interceptorError', interceptorError);

})();