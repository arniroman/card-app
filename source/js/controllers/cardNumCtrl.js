angular.module('app').controller('cardNumCtrl', function($scope, $rootScope) {
      
    $scope.$on('inputEvent', function(event, arg) {
            $scope.card_numb = arg.message
        })

        $scope.sendData = function() {
            $rootScope.$broadcast('inputEvent', {
                message: $scope.card_numb
            })
        }
})