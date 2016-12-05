/**
 * Created by kishore on 12/5/16.
 */
"use strict";
module.exports = function(app, db) {
    var employeeModel = require("./models/employee.model.js")(db);

    var employeeService = require("./services/employee.service.server.js")(app, employeeModel);
};
