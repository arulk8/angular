var app = angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "userForm.htm1"
    })
    .when("/user", {
        templateUrl : "/view/user.htm"
    })
    .when("/business", {
        templateUrl : "/view/business.htm"
    })
});