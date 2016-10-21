angular.module('jakeExam', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home',{
    templateUrl: 'views/home.html',
    controller: 'homeCtrl',
    url: '/'
  })
  .state('blog',{
    templateUrl: 'views/blog.html',
    controller: 'blogCtrl',
    url: '/blog'
  })
  .state('about',{
    templateUrl: 'views/about.html',
    controller: 'aboutCtrl',
    url: '/about'
  })
  .state('shop',{
    templateUrl: 'views/shop.html',
    controller: 'shopCtrl',
    url: '/shop'
  })
  .state('details',{
    templateUrl: 'views/product-details.html',
    controller: 'prodetailCtrl',
    url: '/details/:id'
  })



})
