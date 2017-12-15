angular.module('app').controller('cardCvcCtrl', function($scope, $rootScope) {
    
  $scope.$on('inputEvent3', function(event, arg) {
          $scope.card_cvc = arg.message
      })

      $scope.sendData = function() {
          $rootScope.$broadcast('inputEvent3', {
              message: $scope.card_name
          })
      }
})