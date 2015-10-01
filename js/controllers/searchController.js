(function () {

    var searchController = function ($scope, githubFactory) {
        $scope.repositories = null;

        $scope.searchRepos = function () {
            console.log($scope.searchTerm);

            if ($scope.searchTerm.length > 6) {
                githubFactory.getRepositories($scope.searchTerm)
                    .success(function (repos) {
                        console.log(repos);
                        $scope.repositories = repos;
                    })
                    .error(function (data, status, headers, config) {
                        //handle error
                    });
            }
        };

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };



    };

    searchController.$inject = ['$scope', 'githubFactory'];

    angular.module('ghExample')
        .controller('searchController', searchController);

}());