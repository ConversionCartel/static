var avalonApp=angular.module("avalonApp",["ngRoute"]);avalonApp.config(function(t){t.when("/home",{templateUrl:"home.html"}),t.when("/404",{templateUrl:"404/404.html"}),t.when("/about-us",{templateUrl:"about-us/aboutus.html"}),t.when("/ourhistory",{templateUrl:"about-us/our-history.html"}),t.when("/theteam",{templateUrl:"about-us/the-team.html"}),t.when("/boardpolicies",{templateUrl:"about-us/boardpolicies.html"}),t.when("/prospectivestudents",{templateUrl:"for-prospective-students/prospective-students.html"}),t.when("/how-were-different",{templateUrl:"about-us/the-team.html"}),t.when("/currentstudents",{templateUrl:"about-us/the-team.html"}),t.otherwise({redirectTo:"/404"})});