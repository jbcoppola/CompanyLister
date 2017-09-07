//make local model
var app = angular.module("Company", ['ui.bootstrap','ngAnimate']);

//make controller
app.controller("Company", function ($scope) {
    
    //start form collapsed
    $scope.isCollapsed = true;

    //empty array used for making contact divs
    $scope.contactsForm = [{}];

    $scope.cardView = true;

    //populate with company data
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

    $scope.setCardView = function () {
        $scope.cardView = true;
        $scope.listView = false;
    }

    $scope.setListView = function () {
        $scope.cardView = false;
        $scope.listView = true;
    }

    //viewing data for pagination
    $scope.totalItems = $scope.companyList.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;

    //updates page with selected elements
    $scope.$watch("currentPage", function () {
        setPagingData($scope.currentPage);
    });

    //selects current page elements from complete company list
    function setPagingData(page) {
        var pagedData = $scope.companyList.slice(
          (page - 1) * $scope.itemsPerPage,
          page * $scope.itemsPerPage
        );
        $scope.displayedCompanyList = pagedData;
    }

    //create new company
    $scope.addCompany = function (company) {
        if ($scope.companyList[0] == null) { company.id = 1 }
        else { company.id = Number($scope.companyList[0].id) + 1 };
        $scope.companyList.unshift(company);
        $scope.company = {};
    },

    //add new contact
    $scope.addNewContact = function () {
        $scope.contactsForm.push({});
    },

    //remove contact
    $scope.deleteContact = function () {
        $scope.contactsForm.pop();
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