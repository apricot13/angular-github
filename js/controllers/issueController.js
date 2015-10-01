(function () {

    var issueController = function ($scope, $routeParams, githubFactory) {
        var owner = $routeParams.owner;
        var repo = $routeParams.repo;
        $scope.issues = $scope.repo = null;

        githubFactory.getRepository(owner, repo)
            .success(function (repo) {
                console.log(repo);
                $scope.repo = repo;

                githubFactory.getIssues(repo.full_name)
                    .success(function (issues) {
                        console.log(issues);
                        $scope.issues = issues;



                    })
                    .error(function (data, status, headers, config) {
                        //handle error
                    });

            })
            .error(function (data, status, headers, config) {
                //handle error
            });



    };

    issueController.$inject = ['$scope', '$routeParams', 'githubFactory'];

    angular.module('ghExample')
        .controller('issueController', issueController);

}());