//make local model
var app = angular.module("Company", ['ui.bootstrap','ngAnimate']);

//make controller
app.controller("Company", function ($scope, $filter, $window, $http) {
    //populate with company data. the 'database'
    //$scope.data = [];
    //$http.get("/data/companyList.json").then(function (response) {
    //    return response.data;
    //});
    data = [
        {
            "id": "12",
            "name": "Lyft",
            "status": "Approved",
            "information": "Praesent molestie scelerisque nunc, sed tempus diam rhoncus quis. Praesent nec quam pulvinar, feugiat nulla at, imperdiet eros. Praesent faucibus arcu lorem, at fringilla metus ullamcorper ut. Praesent ultricies, ipsum ultrices pretium elementum, massa quam congue ante, a pellentesque lectus lectus quis sapien. ",
            "contacts": ["Emma Saunders"],
            "performance": "30100"
        },
        {
            "id": "11",
            "name": "AskJeeves",
            "status": "Declined",
            "information": "Nunc elementum sapien ac commodo euismod. Proin vel eleifend est. Phasellus blandit fringilla purus sit amet dignissim. Curabitur dictum massa sed urna laoreet accumsan. Suspendisse potenti. Quisque tempus, nunc nec scelerisque consequat, magna eros tincidunt turpis, et porta eros orci auctor erat. ",
            "contacts": ["Roger Sanchez"],
            "performance": "50"
        },
        {
            "id": "10",
            "name": "GoPro",
            "status": "Pending Approval",
            "information": "Nam ac pharetra nisi. Pellentesque ullamcorper tincidunt urna et blandit. Nulla quis lectus sed risus consequat blandit cursus sit amet lorem. Proin iaculis aliquam lectus. Ut eget consequat purus. Nulla mollis lorem ut placerat pulvinar. Nullam ornare, dui vitae cursus elementum, turpis tellus tempor lacus, a sollicitudin metus nulla id lorem. ",
            "contacts": ["Lance Wright", "Celine Gofer"],
            "performance": "1950"
        },
        {
            "id": "9",
            "name": "LinkedIn",
            "status": "Approved",
            "information": "Etiam neque tortor, iaculis sed lorem eget, imperdiet dapibus nisi. Quisque ut elit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tempor imperdiet lectus eget lobortis. Nunc molestie nec mi in congue. Vivamus pulvinar felis sit amet sapien ornare laoreet. ",
            "contacts": ["Aaron Ekels"],
            "performance": "1000"
        },
        {
            "id": "8",
            "name": "Uber",
            "status": "Researching",
            "information": "Vestibulum ultricies scelerisque venenatis. Suspendisse potenti. Nullam sollicitudin lectus quis justo pulvinar maximus. Maecenas a ex sem. In vestibulum elementum odio sit amet iaculis. Ut varius finibus tristique. Pellentesque gravida, nisl ac fringilla ullamcorper, magna sem cursus sapien, ac aliquet quam lorem in odio. ",
            "contacts": ["Anthony Vivint", "Paul Bush"],
            "performance": "41000"
        },
        {
            "id": "7",
            "name": "Twitter",
            "status": "Researching",
            "information": "Aliquam purus nisi, varius id massa vitae, dapibus vehicula ex. Cras efficitur laoreet ultrices. Sed ornare arcu mollis odio pharetra, et luctus est tincidunt. Ut iaculis sed eros non tempor. Cras vitae consequat lorem. Fusce ante massa, tempus eu bibendum at, placerat non massa. Proin faucibus pharetra urna, vel bibendum justo placerat a. Suspendisse vitae libero gravida, mattis nunc at, pellentesque nulla. ",
            "contacts": [],
            "performance": "11000"
        },
        {
            "id": "6",
            "name": "Tumblr",
            "status": "Declined",
            "information": "Praesent vel dignissim enim. Integer ornare nisl vel malesuada semper. Morbi quis risus dictum, eleifend velit a, posuere metus. Aenean suscipit aliquam dui. Vestibulum augue mauris, suscipit et fermentum eget, pulvinar ut ligula. Ut hendrerit cursus tortor id pretium. ",
            "contacts": ["Debby Sanders", "Will Bart", "Jared Numbers"],
            "performance": "700"
        },
        {
            "id": "5",
            "name": "Reddit",
            "status": "Pending Approval",
            "information": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis dapibus tortor. Nam finibus aliquam mollis. Mauris aliquet tincidunt elit varius placerat. ",
            "contacts": ["Bill Markets"],
            "performance": "807100"
        },
        {
            "id": "4",
            "name": "Apple",
            "status": "Declined",
            "information": "Vivamus quis pellentesque mauris, vitae condimentum lacus. Nullam a urna condimentum, auctor quam non, eleifend diam. Nullam porta, dui id viverra molestie, augue lacus laoreet est, eu congue urna sem et justo. Suspendisse auctor tortor eu volutpat laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
            "contacts": ["Jacob Booth", "Steve Jobs"],
            "performance": "12000"
        },
        {
            "id": "3",
            "name": "Tesla",
            "status": "Approved",
            "information": "Integer vehicula, sapien sed luctus feugiat, augue mauris ullamcorper urna, nec condimentum justo eros condimentum sapien. Nam elementum est ipsum, sed laoreet felis pulvinar vel. Aenean ac neque urna. Cras est lectus, maximus at rhoncus a, suscipit vitae eros. Integer auctor vel justo sed tincidunt. ",
            "contacts": ["Elon Musk"],
            "performance": "600"
        },
        {
            "id": "2",
            "name": "Google",
            "status": "Researching",
            "information": "Pellentesque placerat, sapien et varius imperdiet, ante sapien fermentum quam, in vehicula turpis urna sit amet ante. Donec a diam vestibulum, consequat est vitae, congue diam. Donec consectetur erat vel tincidunt suscipit. Curabitur iaculis lobortis nunc. Nulla sagittis volutpat ornare. Nulla facilisi. ",
            "contacts": ["Alan Smithee"],
            "performance": "3000"
        },
        {
            "id": "1",
            "name": "Microsoft",
            "status": "Pending Approval",
            "information": "Morbi tristique quis quam sit amet maximus. Sed sollicitudin nisi eget diam volutpat sollicitudin. Sed non arcu ultricies, euismod risus at, rutrum enim. Vivamus sed enim nec ante interdum malesuada. Nullam interdum risus vel rhoncus vehicula. Cras maximus, erat at scelerisque mollis, mi ipsum porta velit, at tempor ligula lorem eu nibh.",
            "contacts": ["Bill Gates"],
            "performance": "40000"
        }
    ]

    //combined for convenience, call after altering data
    function updateView() {
        updateCompanyList();
        updatePagingData();
    }
    //refreshes CompanyList with current relevant entries from data
    function updateCompanyList() {
        var query = $scope.query
        switch ($scope.field) {
            case "id":
                $scope.companyList = $filter('filter')(data, { "id": query });
                break;
            case "name":
                $scope.companyList = $filter('filter')(data, { "name": query });
                break;
            case "status":
                $scope.companyList = $filter('filter')(data, { "status": query });
                break;
            case "contacts":
                $scope.companyList = $filter('filter')(data, { "contacts": query });
                break;
            case "performance":
                $scope.companyList = $filter('filter')(data, { "performance": query });
                break;
        }
    }
    //keeps paginator current when companies are deleted or added
    function updatePagingData() {
        setPagingData($scope.companyList, $scope.currentPage);
        $scope.totalItems = $scope.companyList.length;
    }
    //selects current page elements from companyList
    function setPagingData(array, page) {
        var pagedData = array.slice(
          (page - 1) * $scope.itemsPerPage,
          page * $scope.itemsPerPage
        );
        $scope.displayedCompanyList = pagedData;
    }

    //selects proper company from data
    function selectCompany(index) {
        var search = $scope.companyList[index];
        //gets correct company if not on first page
        if ($scope.currentPage != 1) {
            var page = ($scope.currentPage - 1) * $scope.itemsPerPage;
            search = $scope.companyList[page + index];
        }
        var selectedCompany = data.indexOf(search);
        return selectedCompany;
    }

    //min size list works at
    var listEnabledSize = 640;

    //forces to card view below certain window size, allows both views when screen gets bigger
    $window.onresize = function () {
        $scope.$apply(function () {
            var screenWidth = $window.innerWidth;
            if (screenWidth < listEnabledSize) {
                $scope.ui = 'Card';
                $scope.listEnabled = false;
            } else if (screenWidth >= listEnabledSize) {
                $scope.listEnabled = true;
            }
        });
    }

    //companyList is used for the main view, which can be populated and depopulated in searches without affecting the data
    $scope.companyList = data;

    //inital list view check depending on window size
    $scope.listEnabled = ($window.innerWidth >= listEnabledSize);

    //start new company form collapsed
    $scope.isCollapsed = true;

    //empty array used for making contact divs in add company form
    $scope.contactsForm = [{}];

    //start on a particular type of UI, "List" or "Card"
    $scope.ui = "Card";

    //choose which field to search for
    $scope.setField = function (field, buttonName) {
        $scope.field = field;
        $scope.fieldButtonName = buttonName;
    }

    //initial field for search
    $scope.setField('name', 'Name');

    //default viewing data for pagination
    $scope.totalItems = $scope.companyList.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;

    //function to choose UI
    $scope.setUI = function (view) {
        $scope.ui = view;
    },

    //keeps page populated with correct elements
    $scope.$watch("currentPage", function () {
        setPagingData($scope.companyList, $scope.currentPage);
    });
    //auto updates page when search changes
    $scope.$watch("query", function () {
        updateView();
    });

    //controls how many entries are visible at once
    $scope.changeDisplayedItems = function (number) {
        $scope.itemsPerPage = number;
        updatePagingData();
    },

    //create new company
    $scope.addCompany = function (company) {
        //id is one greater than newest company, or 1 if it's the first entry
        if (data[0] == null) { company.id = 1 }
        else { company.id = Number(data[0].id) + 1 };
        //goes at top so user can see it
        data.unshift(company);
        $scope.company = {};
        //update views
        updateView();
    },

    //add new contact to company form
    $scope.addNewContact = function () {
        $scope.contactsForm.push({});
    },

    //remove contact from new company form
    $scope.deleteContact = function () {
        if ($scope.contactsForm.length > 1) {
            $scope.contactsForm.splice($scope.contactsForm.length - 1, 1);
        }
    },

    //allows removing element in array within double ngrepeat
    $scope.remove = function (array, index) {
        array.splice(index, 1);
    },
    //allows adding element in array within double ngrepeat
    $scope.addEditContact = function (array, contact) {
        array.push(contact);
        $scope.contactForm = {};
    },

    //delete company
    $scope.removeCompany = function (index) {
        data.splice(selectCompany(index), 1);
        updateView();
    }
    
});