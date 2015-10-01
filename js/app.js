(function () {

    var app = angular.module('ghExample', ['ngRoute', 'googlechart']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'searchController',
                templateUrl: 'js/views/app.html'
            })
            .when('/issues/:owner/:repo', {
                controller: 'issueController',
                templateUrl: 'js/views/issues.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

}());