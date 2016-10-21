angular.module('jakeExam').controller('shopCtrl', function($scope, mainServ){

  mainServ.getProducts().then(function(response){
      $scope.products = response;
      console.log(response);

})


})
