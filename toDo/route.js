var app = angular.module('myToDoApp');

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl : 'home.html' //,
            //controller : 'controller/toDoController'
        })
        /*.state('home.create', {
            url: '/create',
            templateUrl : 'home.html'
            //controller : 'controller/toDoController'
        })
        .state('home.update', {
            url : '/update',
            templateUrl : 'home.html'
            //controller : 'controller/toDoController'
        })
        .state('home.delete', {
            url : '/delete',
            templateUrl : 'home.html'
            //controller : 'controller/toDoController'
        })*/;

    $urlRouterProvider.otherwise('/home');

});