//make local model
var app = angular.module("Company", []);

//make controller
app.controller("Company", function ($scope) {
    //populate with company data
    $scope.items = 
        [
        {
            "company": "Google",
            "status": "Aquired",
            "information": "Search Engine",
            "contacts": "Alan Smithee",
            "performance": "100"
        }
        ]

    //populate with json company data
    /*
    $http.get('data/companyList.json').then(successCallback, errorCallback);
    function successCallback(response) {
        $scope.items = response.data;
    }
    function errorCallback(error) {
        $scope.items = [];
    }
    */

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