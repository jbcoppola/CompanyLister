# Insiten Code

###### Live project demo: [https://jbcoppola.github.io/InsitenCode/]

## Overview

InsitenCode is an Angular application to allow the user to create a list of companies in their web browser. The user can add companies via form, delete a company with a button, or edit a company's information.

There are two views, list and card view. They can be toggled with a button, as can the number of displayed companies on screen. The UI is fully responsive. Below a certain screen size the window is automatically forced to the mobile-friendly card view.

Users can search for a particular company by selecting a field and searching for either a string or selecting an option from a dropdown menu.

I completed the basic project in a week, and took the next week to greatly improve it by adding features and fixing bugs.

## Resources used

-HTML5
-Javascript
-Angular
-Bootstrap 3.3.7
-UI-bootstrap

## Challenges

1. **Challenge:** Learning Angular for the first time in less than a week
**Solution:** It actually was less challenging than I had initially assumed. Once I got a basic MVP working from tutorials online, I was able to build basic features and then expand on them later. Since I already know Javascript, MVC structuring, and HTML/CSS, the basics of Angular were fairly intuitive. As the project went on and I got a better understanding of the features I was able to simplify and continually reconfigure my code to work better more efficiently.

2. **Challenge:** Implement dynamic sorting for each seperate field
**Solution:** There were two main hurdles here. First I had to get the $filter element working, then figure out how to structure the data so that what was searched would appear on the screen after every keystroke. The eventual solution I worked out was to parallel the MVC concept: have the list of every company loaded into a "data" variable at the start of the application process, then have CompanyList that would load every company that matched the search terms with the filter. DisplayedCompanyList would display the correct number of companies to fit the page with the options the user had selected and based on what page they were on. Once I figured out this three-tier system  I was able to standarize the rest of the application around it and greatly speed my workflow.

3. **Challenge:** Allow the user to add or remove contacts
**Solution:** The solution was fairly simple, but took me a while to puzzle out and make bulletproof. I wanted the user to be able to have more than one contact per company, and add or remove them in edit mode. The first problem was that in the add company form binding the input to an array of objects the user could add to or delete ended up displaying "empty object" in the field when a new form was created. I solved this by making the new objects have a '' by default, and when the form is submitted looping through the array and removing any elements that are just ''. This allows the user to enter as many contacts as they wish, but if there are empty fields they get removed before the company is added to the data. I also allow the user to add a contact or remove them in edit mode, but only allow them to add a contact after they fill out the field. This ensures they can't just add empty contacts.

## Code Samples

The code for enabling edit mode (only one company can be edited at a time)

```
//triggers edit mode on single company and saves info when done
    $scope.edit = function (index, editMode) {
        if (!editMode) {
            $scope.currentlyEditing = true;
            $scope.displayedCompanyList[index].editMode = true;
            $scope.editCompany = index;
            $scope.editForm = data[selectCompany(index)];
        }
        else {
            $scope.currentlyEditing = false;
            $scope.displayedCompanyList[index].editMode = false;
            $scope.editCompany = selectCompany(index);
            data[selectCompany(index)] = $scope.editForm;
        }
    }
```

Code for forcing window to Card UI below certain window size

```
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
```

Code for selecting the correct company from what's currently displayed on page, even if the user isn't on the first page

```
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
```
