angular.module('jakeExam').service('mainServ', function($http){

  var base = 'http://practiceapi.devmounta.in/products/';
  var end = '/';

    this.getProducts = function(){
    return $http({
      method: 'GET',
      url: base
    }).then(function(response){
        return response.data;
    })
  }
  this.getProduct = function(id){
        return $http({
          method: 'GET',
          url: base + id
        }).then(function(response){
            return response.data;
          })
  }




})
