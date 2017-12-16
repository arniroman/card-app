angular.module('app').controller('cardExpiryCtrl', function($scope, $rootScope) {
    $scope.labe = '••/•• '
    $scope.$on('inputEvent2', function(event, arg) {
        $scope.card_expiry = arg.message
        $scope.labe = $scope.card_expiry
    })

    $scope.sendData = function() {
        $rootScope.$broadcast('inputEvent2', {
            message: $scope.card_expiry
        })
    }
})