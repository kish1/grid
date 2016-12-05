/**
 * Created by kishore on 12/5/16.
 */
"use strict";
module.exports = function(db) {
    var q = require("q");
    var mysql = require("mysql");
    var api = {
        createEmployee: createEmployee,
        updateEmployee: updateEmployee,
        deleteEmployee: deleteEmployee,
        findEmployee: findEmployee,
        findAllEmployees: findAllEmployees
    };
    return api;

    function createEmployee(details) {
        var deferred = q.defer();
        var sql = "insert into employee SET ?";
        db.query(sql, details, function(err, data) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve({insertId: data.insertId});
            }
        });
        return deferred.promise;
    }

    function updateEmployee(id, details) {
        var deferred = q.defer();
        var sql = "update employee SET ? where employeeId=?;";
        db.query(sql, [details, id], function(err, data) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data.affectedRows === 1);
            }
        });
        return deferred.promise;
    }

    function deleteEmployee(id) {
        var deferred = q.defer();
        var sql = "delete from employee where employeeId=?;";
        sql = mysql.format(sql, [id]);
        db.query(sql, function(err, data) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data.affectedRows === 1);
            }
        });
        return deferred.promise;
    }

    function findEmployee(id) {
        var deferred = q.defer();
        var sql = "select * from employee where employeeId=?;";
        sql = mysql.format(sql, [id]);
        db.query(sql, function(err, data) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data[0]);
            }
        });
        return deferred.promise;
    }

    function findAllEmployees() {
        var deferred = q.defer();
        var sql = "select * from employee;";
        db.query(sql, function(err, data) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }
};
