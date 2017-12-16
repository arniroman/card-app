/*--- controller cardCvcCtrl ---*/
angular.module('app').controller('cardCvcCtrl', function($scope, $rootScope) {
    /*--- label default ---*/
    $scope.label = '•••';
    /*--- create new inputEventCvc ---*/
    $scope.$on('inputEventCvc', function(event, arg) {
        $scope.card_cvc = arg.message;
        $scope.label = $scope.card_cvc;
    });
    $scope.sendData = function() {
        $rootScope.$broadcast('inputEventCvc', {
            message: $scope.card_cvc
        });
    };
    /*--- create new inputEventFlip ---*/
    $scope.flipCardOn = function() {
        $rootScope.$broadcast('inputEventFlip', {
            messe: $scope.styleObjFlip
        });
    };
    $scope.flipCardOf = function() {
        $rootScope.$broadcast('inputEventFlip', {
            messe: $scope.styleObjRemoveFlip
        });
    };
    /*--- Style for card ---*/
    $scope.styleObjFlip = ['card__property', 'cardFlipOn'];
    $scope.styleObjRemoveFlip = ['card__property', 'cardFlipOf'];
});