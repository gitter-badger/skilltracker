'use strict';

angular.module('skilltrackerApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


