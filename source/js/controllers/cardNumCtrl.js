/*--- controller cardNumCtrl ---*/
angular.module('app').controller('cardNumCtrl', function($scope, $rootScope) {
    /*--- label default ---*/
    $scope.label = '•••• •••• •••• ••••';
    /*--- create new inputEvent ---*/
    $scope.$on('inputEvent', function(event, arg) {
        $scope.card_numb = arg.message;
        $scope.label = $scope.card_numb;
        
    });

    $scope.sendData = function() {
        $rootScope.$broadcast('inputEvent', {
            message: $scope.card_numb
        });
    };
});