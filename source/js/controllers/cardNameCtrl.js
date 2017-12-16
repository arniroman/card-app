angular.module('app').controller('cardNameCtrl', function($scope, $rootScope) {
    $scope.labe = 'FULL NAME'
  $scope.$on('inputEvent1', function(event, arg) { 
          $scope.card_name = arg.message 
          $scope.labe =  $scope.card_name
      })

      $scope.sendData = function() {
          $rootScope.$broadcast('inputEvent1', {
              message: $scope.card_name
          })
      }

})