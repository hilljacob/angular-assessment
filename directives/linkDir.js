angular.module('jakeExam').directive('linkDir', function(){


  return {
    templateUrl:'views/product-tmpl.html',
    restrict: 'E',
    controller:'linkDirCtrl',
    scope:{
      pro: '='
    }
  }

})
