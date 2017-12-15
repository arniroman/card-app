angular.module('app').controller('cardCvcCtrl', function($scope, $rootScope) {
    $scope.$on('inputEvent3', function(event, arg) {
        $scope.card_cvc = arg.message
    })

    $scope.sendData = function() {
        $rootScope.$broadcast('inputEvent3', {
            message: $scope.card_name
        })
    }

    $scope.styleObj = ['card__property'];

  /*  $scope.$on('inputEvent4', function(event, arg) {
        $scope.styleObj = arg.messe
    })*/

    $scope.click1 = function() {
        $rootScope.$broadcast('inputEvent4', {
            messe: $scope.styleObjFlip
        }) 
    }
    $scope.click2 = function() {
        $rootScope.$broadcast('inputEvent4', {
            messe: $scope.styleObjRemoveFlip
        })
    }

    $scope.styleObjFlip = ['card__property', 'hover']
    $scope.styleObjRemoveFlip = ['card__property', 'hover1']

})