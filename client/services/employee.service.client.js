/**
 * Created by kishore on 12/5/16.
 */
"use strict";
(function() {
    angular
        .module("GridApp")
        .factory("EmployeeService", EmployeeService);

    function EmployeeService($http) {
        var api = {
            createEmployee: createEmployee,
            updateEmployee: updateEmployee,
            deleteEmployee: deleteEmployee,
            findEmployee: findEmployee,
            findAllEmployees: findAllEmployees
        };
        return api;

        function findAllEmployees() {
            return $http.get("/api/employee");
        }

        function findEmployee(id) {
            return $http.get("/api/employee/" + id);
        }

        function deleteEmployee(id) {
            return $http.delete("/api/employee/" + id);
        }

        function updateEmployee(id, details) {
            return $http.put("/api/employee/" + id, details);
        }

        function createEmployee(details) {
            return $http.post("/api/employee", details);
        }
    }

})();
