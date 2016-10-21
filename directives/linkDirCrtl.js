angular.module('jakeExam').controller('linkDirCtrl', function($scope, mainServ, $state){

  mainServ.getProducts().then(function(response){
      $scope.products = response;
      console.log(response);

})
})
