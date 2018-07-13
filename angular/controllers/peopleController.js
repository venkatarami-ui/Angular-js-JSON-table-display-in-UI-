app.controller('myController', ['$scope', 'people', function($scope, people) {
    people.success(function(data) {
        console.log(data.People[0].Likes);
        $scope.person = data.People[0];
        $scope.likes = $scope.person.Likes;
        $scope.dislikes = $scope.person.Dislikes;
        console.log($scope.dislikes[6])
        $scope.rows = (function() {
            var rowArray = [];
            if ($scope.likes.length >= $scope.dislikes.length) {
                for (var i = 0; i < $scope.likes.length; i++) {
                    var dislike = $scope.dislikes[i];
                    if ($scope.dislikes[i] === undefined) {
                        dislike = "";
                    }
                    rowArray.push({ like: $scope.likes[i], dislike: dislike })
                }
            } else {
                for (var i = 0; i < $scope.dislikes.length; i++) {
                    var like = $scope.likes[i];
                    if ($scope.likes[i] === undefined) {
                        like = "";
                    }
                    rowArray.push({ like: like, dislike: $scope.dislikes[i] })
                }
            }
            return rowArray;
        })();
    })
}]);