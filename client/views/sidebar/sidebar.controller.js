/**
 * Created by kishore on 12/5/16.
 */
"use strict";
(function() {
    angular
        .module("GridApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($location) {
        var vm = this;
        vm.$location = $location;
    }
})();
