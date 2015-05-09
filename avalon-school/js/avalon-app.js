var avalonApp = angular.module('avalonApp', ['ngRoute']);

avalonApp.config(function ($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home.html'
	});
	$routeProvider.when('/404', {
		templateUrl: '404/404.html'
	});

	// ABOUT US SECTION AND CHILDREN
	$routeProvider.when('/about-us', {
		templateUrl: 'about-us/aboutus.html'
	});
	$routeProvider.when('/ourhistory', {
		templateUrl: 'about-us/our-history.html'
	});
	$routeProvider.when('/theteam', {
		templateUrl: 'about-us/the-team.html'
	});

	// PROSPECTING STUDENTS
	$routeProvider.when('/prospectivestudents', {
		templateUrl: 'for-prospective-students/prospective-students.html'
	});

	// ONCE THIS IS ALL SET AND WORKING REDIRECT THIS TO THE 404 PAGE
	// TODO SET UP 404 PAGE
	$routeProvider.otherwise({ redirectTo: '/404' });

});
