angular.module('app').controller('cardNumCtrl', function($scope, $rootScope) {
    $scope.labe = '•••• •••• •••• ••••'
    $scope.$on('inputEvent', function(event, arg) {
            $scope.card_numb = arg.message
            $scope.labe =  $scope.card_numb
        })

        $scope.sendData = function() {
            $rootScope.$broadcast('inputEvent', {
                message: $scope.card_numb
            })
        }
})