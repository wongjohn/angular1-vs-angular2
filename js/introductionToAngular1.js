angular.module('introductionToAngular1', ['movieHunter'])
    .controller('IntroductionToAngular1Ctrl', ['$scope', function ($scope) {
        $scope.frameworkName = 'Angular 1';
        $scope.angularDocsUrl = 'http://docs.ngnice.com/api';
        $scope.buy = function (event) {
            console.info(event);
        };
        $scope.today = new Date();
    }]);

angular.module('movieHunter', [])
    .service('movieService', function () {
        return [
            {title: '冰雪奇缘'},
            {title: '疯狂动物城'}
        ];
    })
    .controller('MovieListCtrl', ['$scope', 'movieService',
        function MovieListCtrl($scope, movieService) {
            $scope.movies = movieService;
            $scope.selectedMovie = $scope.movies[0];
        }])
    .controller('MovieCtrl', ['$scope',
        function MovieCtrl ($scope) {

        }]);
