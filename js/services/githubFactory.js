(function () {
    var githubFactory = function ($http, appSettings) {

        var factory = {};

        factory.getRepositories = function (term) {
            return $http.get(appSettings.apiUrl + 'search/repositories?q=' + term);
        };

        factory.getRepository = function (owner, repo) {
            return $http.get(appSettings.apiUrl + 'repos/' + owner + '/' + repo);
        };

        factory.getIssues = function (name) {
            return $http.get(appSettings.apiUrl + 'search/issues?q=repo:' + name);
        };



        return factory;
    };

    githubFactory.$inject = ['$http', 'appSettings'];

    angular.module('ghExample').factory('githubFactory',
        githubFactory);

}());