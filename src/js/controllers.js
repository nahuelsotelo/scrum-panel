panelApp.controller('PanelController', ['$scope', '$http', function($scope, $http) {
    $http.get('data/user-stories.json').success(function(data) {
        $scope.user_stories = data;
    });

    $scope.storyStatus = 0;

    this.moveLeft = function(){
        if($scope.storyStatus > 0) {
            $scope.storyStatus = $scope.storyStatus - 1;
        }
    };
    this.moveRight = function(){
        if($scope.storyStatus < 3) {
            $scope.storyStatus = $scope.storyStatus + 1;
        }
    }
}]);
