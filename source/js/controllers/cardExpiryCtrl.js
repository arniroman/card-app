/*--- controller cardExpiryCtrl ---*/
angular.module('app').controller('cardExpiryCtrl', function($scope, $rootScope) {
    /*--- label default ---*/
    $scope.label = '••/•• ';
    /*--- create new inputEventExpiry ---*/
    $scope.$on('inputEventExpiry', function(event, arg) {
        $scope.card_expiry = arg.message;
        $scope.label = $scope.card_expiry;
    });
    $scope.sendData = function() {
        $rootScope.$broadcast('inputEventExpiry', {
            message: $scope.card_expiry
        });
    };
});