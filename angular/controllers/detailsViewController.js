app.controller('detailsController', ['$scope', '$routeParams', 'people', function($scope, $routeParams, people) {
    people.success(function(data) {
        console.log(data.People)
        $scope.person = data.People[$routeParams.id];
        $scope.likes = $scope.person.Likes;
        $scope.dislikes = $scope.person.Dislikes;
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

        $scope.hearts = $scope.person.rating;
        $(document).ready(function() {
            for (var i = 0; i < 5; i++) {
                var $heart = $('<span>');
                if (i + 1 <= $scope.hearts) {
                    $heart.addClass('glyphicon glyphicon-heart')
                } else {
                    $heart.addClass('glyphicon glyphicon-heart-empty')
                }
                $('#hearts').append($heart)
            }
        })
    })
}]);