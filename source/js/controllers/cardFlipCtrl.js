angular.module('app').controller('cardFlipCtrl', function($scope, $rootScope) {

    $scope.$on('inputEvent4', function(event, arg) {
        $scope.styleObj = arg.messe
    })
    $scope.styleObj = ['card__property']
   

})