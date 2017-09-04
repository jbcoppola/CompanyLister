//make local model
var app = angular.module("Company", []);

//make controller
app.controller("Company", function ($scope) {
    //populate with company data
    $scope.contacts = [""];
    $scope.companyList = 
        [
        {
            "id": "4",
            "company": "Apple",
            "status": "Declined",
            "information": "Vivamus quis pellentesque mauris, vitae condimentum lacus. Nullam a urna condimentum, auctor quam non, eleifend diam. Nullam porta, dui id viverra molestie, augue lacus laoreet est, eu congue urna sem et justo. Suspendisse auctor tortor eu volutpat laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
            "contacts": ["Jacob Booth", "Steve Jobs"],
            "performance": "12000"
        },
        {
            "id": "3",
            "company": "Tesla",
            "status": "Approved",
            "information": "Integer vehicula, sapien sed luctus feugiat, augue mauris ullamcorper urna, nec condimentum justo eros condimentum sapien. Nam elementum est ipsum, sed laoreet felis pulvinar vel. Aenean ac neque urna. Cras est lectus, maximus at rhoncus a, suscipit vitae eros. Integer auctor vel justo sed tincidunt. ",
            "contacts": ["Elon Musk"],
            "performance": "600"
        },
        {
            "id": "2",
            "company": "Google",
            "status": "Researching",
            "information": "Pellentesque placerat, sapien et varius imperdiet, ante sapien fermentum quam, in vehicula turpis urna sit amet ante. Donec a diam vestibulum, consequat est vitae, congue diam. Donec consectetur erat vel tincidunt suscipit. Curabitur iaculis lobortis nunc. Nulla sagittis volutpat ornare. Nulla facilisi. ",
            "contacts": ["Alan Smithee"],
            "performance": "3000"
        },
        {
            "id": "1",
            "company": "Microsoft",
            "status": "Pending Approval",
            "information": "Morbi tristique quis quam sit amet maximus. Sed sollicitudin nisi eget diam volutpat sollicitudin. Sed non arcu ultricies, euismod risus at, rutrum enim. Vivamus sed enim nec ante interdum malesuada. Nullam interdum risus vel rhoncus vehicula. Cras maximus, erat at scelerisque mollis, mi ipsum porta velit, at tempor ligula lorem eu nibh.",
            "contacts": ["Bill Gates"],
            "performance": "40000"
        }
        ]

    //create new company
    $scope.addCompany = function (company) {
        company.id = $scope.companyList.length+1;
        $scope.companyList.unshift(company);
        $scope.company = {};
    },

    //add new contact
    $scope.addNewContact = function (contacts) {
        $scope.contacts.push(" ");
    },

    //remove contact
    $scope.deleteContact = function (contacts) {
        $scope.contacts.splice(1);
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