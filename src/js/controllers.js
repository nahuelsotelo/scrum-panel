panelApp.controller('PanelController', ['$scope', '$http', '$resource', function($scope, $http, $resource) {
    // $http.get('data/user-stories.json').success(function(data) {
    //     $scope.user_stories = data;
    // });
    var Story = $resource('data/user-stories.json');
    $scope.user_stories = Story.query();

    Story.prototype.moveLeft = function(){
        if(this.status > 0) {
            this.status = this.status - 1;
        }
    };

    // $scope.moveLeft = function(story){
    //     if(story.status > 0) {
    //         story.status = story.status - 1;
    //     }
    // };
    $scope.moveRight = function(story){
        if(story.status < 3) {
            story.status = story.status + 1;
        }
    }
}]);
