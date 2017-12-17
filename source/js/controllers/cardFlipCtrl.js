/*--- controller cardFlipCtrl ---*/
angular.module('app').controller('cardFlipCtrl', function($scope, $rootScope) {
    /*--- inputEventFlip ---*/
    $scope.$on('inputEventFlip', function(event, arg) {
        $scope.styleObj = arg.message;
    })
    $scope.styleObj = ['card__property'];
})