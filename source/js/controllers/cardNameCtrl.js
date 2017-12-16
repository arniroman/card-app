/*--- controller cardNameCtrl ---*/
angular.module('app').controller('cardNameCtrl', function($scope, $rootScope) {
    /*--- label default ---*/
    $scope.label = 'FULL NAME'
        /*--- create new inputEventName ---*/
    $scope.$on('inputEventName', function(event, arg) {
        $scope.card_name = arg.message;
        $scope.label = $scope.card_name;
    });

    $scope.sendData = function() {
        $rootScope.$broadcast('inputEventName', {
            message: $scope.card_name
        });
    };
});