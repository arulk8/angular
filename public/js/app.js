

var app = angular.module("myapp", ['ngRoute']);
app.config(['$locationProvider' ,'$routeProvider',function ($routeProvider,$locationProvider) {
	$locationProvider.hasPrefix('!');
    $routeProvider.when("/user", {
        templateUrl : "/view/user.html",	
        controller: "user",
    })
   .when("/business", {
        templateUrl : "/view/business.html",

        controller:"business",
        
    })
}]);