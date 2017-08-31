//make local model
var app = angular.module("Company", []);

//make controller
app.controller("Company", function ($scope) {
    $scope.items = [];

    //create new company
    $scope.addItem = function (item) {
        $scope.items.push(item);
        $scope.item = {};
    },
    //delete company
    $scope.removeItem = function (index) {
        console.log(index);
        $scope.items.splice(index, 1)
    },
    //update company
    $scope.editItem = function (index) {
        $scope.editing = $scope.items.indexOf(index);
    }
});