//make local model
var app = angular.module("Company", []);

//make controller
app.controller("Company", function ($scope) {
    //populate with company data
    $scope.companyList = 
        [
        {
            "id": "1",
            "company": "Google",
            "status": "Aquired",
            "information": "Search Engine",
            "contacts": "Alan Smithee",
            "performance": "100"
        }
        ]

    //create new company
    $scope.addCompany = function (company) {
        company.id = $scope.companyList.length+1;
        $scope.companyList.push(company);
        $scope.company = {};
    },
    //delete company
    $scope.removeCompany = function (index) {
        console.log(index);
        $scope.companyList.splice(index, 1)
    },
    //update company
    $scope.editCompany = function (index) {
        $scope.editing = $scope.companyList.indexOf(index);
    }


});