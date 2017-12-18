

var app = angular.module("myapp", ['ngRoute']);
console.log(app);
app.config(['$locationProvider' ,'$routeProvider',function ($locationProvider,$routeProvider) {
	$locationProvider.hasPrefix('!');
    $routeProvider
    .when("/user", {
        templateUrl : "/view/user.html",	
        controller: "user",
    })
   .when("/business", {
        templateUrl : "/view/business.html",
        controller:"business",
        
    }).otherwise("/");
}]);
