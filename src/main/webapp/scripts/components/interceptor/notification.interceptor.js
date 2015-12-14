 'use strict';

angular.module('skilltrackerApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-skilltrackerApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-skilltrackerApp-params')});
                }
                return response;
            }
        };
    });
