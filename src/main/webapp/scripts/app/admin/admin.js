'use strict';

angular.module('skilltrackerApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('admin', {
                abstract: true,
                parent: 'site'
            });
    });
