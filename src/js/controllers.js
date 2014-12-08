// var panelApp = angular.module('panelApp', []);

panelApp.controller('CardController', ['$scope', '$http', function($scope, $http) {
    $http.get('data/user-stories.json').success(function(data) {
        $scope.user_stories = data;
    });
}]);

