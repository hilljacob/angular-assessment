angular.module('jakeExam').controller('prodetailCtrl', function($scope, $state, mainServ){

    console.log($state.params.id);
  mainServ.getProduct($state.params.id).then(function(response){
      $scope.product = response;
      console.log(response);
})

})
