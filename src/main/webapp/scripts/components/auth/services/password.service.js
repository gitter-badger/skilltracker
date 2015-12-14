'use strict';

angular.module('skilltrackerApp')
    .factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });

angular.module('skilltrackerApp')
    .factory('PasswordResetInit', function ($resource) {
        return $resource('api/account/reset_password/init', {}, {
        })
    });

angular.module('skilltrackerApp')
    .factory('PasswordResetFinish', function ($resource) {
        return $resource('api/account/reset_password/finish', {}, {
        })
    });
