/**
 * Created by kishore on 12/5/16.
 */
"use strict";
module.exports = function(app, employeeModel) {
    app.get("/api/employee", findAllEmployees);
    app.get("/api/employee/:id", findEmployee);
    app.post("/api/employee", createEmployee);
    app.put("/api/employee/:id", updateEmployee);
    app.delete("/api/employee/:id", deleteEmployee);

    function deleteEmployee(req, res) {
        var employeeId = req.params.id;
        employeeModel
            .deleteEmployee(employeeId)
            .then(function(details) {
                    res.json(details);
                },
                function(err) {
                    res.status(400).send(err);
                });
    }

    function updateEmployee(req, res) {
        var employeeId = req.params.id;
        var details = req.body;
        employeeModel
            .updateEmployee(employeeId, details)
            .then(function(details) {
                    res.json(details);
                },
                function(err) {
                    res.status(400).send(err);
                });
    }

    function createEmployee(req, res) {
        var details = req.body;
        employeeModel
            .createEmployee(details)
            .then(function(details) {
                    res.json(details);
                },
                function(err) {
                    res.status(400).send(err);
                });
    }

    function findAllEmployees(req, res) {
        employeeModel
            .findAllEmployees()
            .then(function(details) {
                    res.json(details);
                },
                function(err) {
                    res.status(400).send(err);
                });
    }

    function findEmployee(req, res) {
        var employeeId = req.params.id;
        employeeModel
            .findEmployee(employeeId)
            .then(function(details) {
                res.json(details);
            },
            function(err) {
                res.status(400).send(err);
            });
    }
};
