/**
 * Created by kishore on 12/5/16.
 */
"use strict";
(function() {
    angular
        .module("GridApp")
        .controller("EmployeeController", EmployeeController);

    function EmployeeController(EmployeeService) {
        var vm = this;
        vm.gender = {'M': 'Male', 'F':'Female'};

        vm.index = -1;
        vm.employee = {};
        vm.employees = [];
        vm.message = null;
        vm.addEmployee = addEmployee;
        vm.updateEmployee = updateEmployee;
        vm.deleteEmployee = deleteEmployee;
        vm.selectEmployee = selectEmployee;
        vm.getDate = getDate;

        var init = function() {
            EmployeeService
                .findAllEmployees()
                .then(function(result) {
                    vm.employees = result.data;
                    vm.employees.map(formatEmployee);
                },
                function(err) {
                    vm.message = "Unable to fetch data from db";
                    console.log(JSON.stringify(err));
                })
        };
        init();

        function addEmployee(employee) {
            EmployeeService
                .createEmployee(employee)
                .then(function(result) {
                    employee['employeeId'] = result.data.insertId;
                    employee['dob'] = vm.getDate(employee['dob'].toISOString());
                    vm.employees.push(employee);
                    vm.employee = {};
                },
                function(err) {
                    vm.message = "Unable to create employee";
                    console.log(JSON.stringify(err));
                });
        }

        function selectEmployee(index) {
            vm.message = null;
            vm.index = index;
            vm.employee = {
                employeeId: vm.employees[index].employeeId,
                fullName: vm.employees[index].fullName,
                gender: vm.employees[index].gender,
                dob: new Date(vm.employees[index].dob),
                city: vm.employees[index].city,
                salary: vm.employees[index].salary
            };
        }

        function updateEmployee(employee) {
            vm.message = null;
            EmployeeService
                .updateEmployee(employee.employeeId, employee)
                .then(function(success) {
                    if(success) {
                        employee['dob'] = vm.getDate(employee['dob'].toISOString());
                        vm.employees[vm.index] = employee;
                        vm.employee = {};
                        vm.index = -1;
                    }
                },
                function(err) {
                    vm.message = "Unable to update employee";
                    console.log(JSON.stringify(err));
                });
        }

        function deleteEmployee(index) {
            vm.message = null;
            EmployeeService
                .deleteEmployee(vm.employees[index].employeeId)
                .then(function(success) {
                    if(success) {
                        vm.employees.splice(index, 1);
                    }
                },
                function(err) {
                    vm.message = "Unable to delete employee";
                });
        }

        function getDate(date) {
            return date.toString().substring(0,10);
        }

        function formatEmployee(employee) {
            employee.dob = getDate(employee.dob);
        }
    }
})();