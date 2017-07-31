(function () {
    'use strict';

    function realtimeService($rootScope, $timeout) {
        $.connection.hub.logging = true;
        var connection = $.hubConnection();
        var userActivity = $.connection.userActivity;

        $timeout(function () {
            $.connection.hub.start()
                .done(function () { console.log('Connected to Realtime hub !!!'); })
                .fail(function () { console.log('Could not Connect!'); });
        });

        return {
            on: function (eventName, callback) {
                userActivity.on(eventName, function (result) {
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback(result);
                        }
                    });
                });
            },
            off: function (eventName, callback) {
                userActivity.off(eventName);
            },
            invoke: function (methodName, args, callback) {
                $.connection.hub.start().done(function () {
                    userActivity.invoke(methodName, args)
                        .done(function (result) {
                            $rootScope.$apply(function () {
                                if (callback) {
                                    callback(result);
                                }
                            });
                        });
                });
            }
        };
    }

    realtimeService.$inject = ['$rootScope', '$timeout'];

    angular
        .module('realtime.service', [])
        .factory('realtimeService', realtimeService);
})();