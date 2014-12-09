panelApp.controller('PanelController', ['$scope', '$http', function($scope, $http) {
    $http.get('data/user-stories.json').success(function(data) {
        $scope.user_stories = data;
    });

    $scope.moveLeft = function(story){
        if(story.status > 0) {
            story.status = story.status - 1;
        }
    };
    $scope.moveRight = function(story){
        if(story.status < 3) {
            story.status = story.status + 1;
        }
    }
}]);
