avalonApp.factory('staff', function() {
	var staff = {};
	staff.list = [
		{
			pathImg: "gsm.jpg",
			firstName: "Gretchen Sage-Martinson",
      staffTitle: "Staff Member"
		},
    {
      pathImg: "aw.jpg",
      firstName: "Anna Wesley",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "rg.jpg",
      firstName: "Regina Goldner",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "cb.jpg",
      firstName: "Carrie Bakken",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "kw.jpg",
      firstName: "Kevin Ward",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "cj.jpg",
      firstName: "Chris Jandro",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "nw.jpg",
      firstName: "Nora Whalen",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "ll.jpg",
      firstName: "Lauren Leith",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "by.jpg",
      firstName: "Becky Yuzna",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "js.jpg",
      firstName: "Jo Sullivan",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "mn.jpg",
      firstName: "Monessa Newell",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "bm.jpg",
      firstName: "Becca Merton",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "db.jpg",
      firstName: "David Ball",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "tk.jpg",
      firstName: "Tyler Kutseheid",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "team-placeholder.jpg",
      firstName: "Mandy Weinkauf",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "tq.jpg",
      firstName: "Tim Quealy",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "rk.jpg",
      firstName: "Randall Kinnamon",
      staffTitle: "Staff Member"
    },
    {
      pathImg: "in.jpg",
      firstName: "Ian Noble",
      staffTitle: "Staff Member"
    }
	];
	return staff;
});

function StaffCtrl($scope, staff) {
	$scope.staff = staff;
}