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
            "status": "Researching",
            "information": "Pellentesque placerat, sapien et varius imperdiet, ante sapien fermentum quam, in vehicula turpis urna sit amet ante. Donec a diam vestibulum, consequat est vitae, congue diam. Donec consectetur erat vel tincidunt suscipit. Curabitur iaculis lobortis nunc. Nulla sagittis volutpat ornare. Nulla facilisi. ",
            "contacts": "Alan Smithee",
            "performance": "100"
        }
        ]

    //create new company
    $scope.addCompany = function (company) {
        company.id = $scope.companyList.length+1;
        $scope.companyList.unshift(company);
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