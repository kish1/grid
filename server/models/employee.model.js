/**
 * Created by kishore on 12/5/16.
 */
"use strict";
module.exports = function(db) {
    var q = require("q");
    var api = {
        createEmployee: createEmployee,
        updateEmployee: updateEmployee,
        deleteEmployee: deleteEmployee,
        findEmployee: findEmployee,
        findAllEmployees: findAllEmployees
    };
    return api;

    function createEmployee(details) {

    }

    function updateEmployee(id, details) {

    }

    function deleteEmployee(id) {

    }

    function findEmployee(id) {

    }

    function findAllEmployees() {

    }
};
