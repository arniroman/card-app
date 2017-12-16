angular.module('app').controller('cardCvcCtrl', function($scope, $rootScope) {
    $scope.labe = '•••';

    $scope.$on('inputEvent3', function(event, arg) {
        $scope.card_cvc = arg.message
        $scope.labe = $scope.card_cvc
    })
    $scope.sendData = function() {
        $rootScope.$broadcast('inputEvent3', {
            message: $scope.card_cvc
        })
    }

    $scope.flipCardOn = function() {
        $rootScope.$broadcast('inputEvent4', {
            messe: $scope.styleObjFlip
        }) 
    }
   $scope.flipCardOf = function() {
       $rootScope.$broadcast('inputEvent4', {
           messe: $scope.styleObjRemoveFlip
       })
    }

    $scope.styleObjFlip = ['card__property', 'cardFlipOn']
    $scope.styleObjRemoveFlip = ['card__property', 'cardFlipOf']

})