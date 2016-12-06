/**
 * Created by kishore on 12/5/16.
 */
"use strict";
(function() {
    angular
        .module("GridApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home/home.view.html",
                controller: "HomeController",
                controllerAs: "model"
            })
            .when("/employee", {
                templateUrl: "views/employee/employee.view.html",
                controller: "EmployeeController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();