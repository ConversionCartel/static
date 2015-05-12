var avalonApp = angular.module('avalonApp', ['ngRoute']);

avalonApp.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'home.html'
	});
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
	$routeProvider.when('/boardpolicies', {
		templateUrl: 'about-us/boardpolicies.html'
	});

	// PROSPECTING STUDENTS
	$routeProvider.when('/prospectivestudents', {
		templateUrl: 'for-prospective-students/why-avalon.html'
	});
	$routeProvider.when('/faq', {
		templateUrl: 'for-prospective-students/prospective-students.html'
	});
	$routeProvider.when('/awards-recognition', {
		templateUrl: 'for-prospective-students/AwardsRecog.html'
	});

	// PROJECT BASED LEARNING - HOW WERE DIFFERENT
	$routeProvider.when('/how-were-different', {
		templateUrl: 'project-based-learning/PBL.html'
	});
	$routeProvider.when('/why-pbl', {
		templateUrl: 'project-based-learning/why-pbl.html'
	});
	$routeProvider.when('/gradelevel', {
		templateUrl: 'project-based-learning/grade-level.html'
	});
	$routeProvider.when('/community', {
		templateUrl: 'project-based-learning/community-involvement.html'
	});

	// CURRENT STUDENTS
	$routeProvider.when('/current-students', {
		templateUrl: 'current-student/current-student.html'
	});
	$routeProvider.when('/lunch-program', {
		templateUrl: 'current-student/lunch-program.html'
	});
	$routeProvider.when('/gradstandard', {
		templateUrl: 'current-student/gradstandard.html'
	});
	$routeProvider.when('/seminar', {
		templateUrl: 'current-student/seminar.html'
	});
	$routeProvider.when('/resources', {
		templateUrl: 'current-student/resources.html'
	});
	$routeProvider.when('/get-involved', {
		templateUrl: 'current-student/get-involved.html'
	});

	// TEACHER CENTER
	$routeProvider.when('/teacher-center', {
		templateUrl: 'teacher-center/teacher-center.html'
	});

	// ONCE THIS IS ALL SET AND WORKING REDIRECT THIS TO THE 404 PAGE
	// TODO SET UP 404 PAGE
	$routeProvider.otherwise({ redirectTo: '/404' });

});

avalonApp.directive('sidebarmenu', function() {
	return {
		link: function(scope, element, attr) {
			$('.sidebar-toggle').on('click', function() {
				$(this).toggleClass('toggle-is-active');
				$('.sidebar-menu').toggleClass('sidebar-is-active');
			});
		}
	}
});
