angular.module('app').controller('cardExpiryCtrl', function($scope, $rootScope) {

    $scope.$on('inputEvent2', function(event, arg) {
        $scope.card_expiry = arg.message
    })

    $scope.sendData = function() {
        $rootScope.$broadcast('inputEvent2', {
            message: $scope.card_expiry
        })
    }
    $scope.styleObj = ['.card__property'];

    $scope.click = function() {
        $scope.styleObj = ['.card__property:hover']
    }
    $scope.data = "VVVVV"

})