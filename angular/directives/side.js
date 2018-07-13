app.directive('sideNav', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'angular/views/sideNav.html'
    }
});