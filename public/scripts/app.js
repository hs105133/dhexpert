(function(){
	angular.module("expertApp", ["ui.router", "ngResource"]);	

	angular.module("expertApp")
		.config(function($stateProvider, $urlRouterProvider){

			$urlRouterProvider.otherwise("/dashboard");
			
			$stateProvider.state("dashboard", {
				url: "/dashboard",
				templateUrl: "views/dashboard.html"
			})
			.state("createapp", {
				url: "/apps/create",
				templateUrl: "views/createEditApp.html",
				controller: "CreateEditAppCtrl"
			})
			.state("listapp", {
				url: "/apps",
				templateUrl: "views/listapp.html",
				controller: "ListAppCtrl"
			})
			.state("viewApp", {
				url: "/apps/:appId",
				templateUrl: "views/viewApp.html",
				controller: "ListAppCtrl"
			})
			.state("editApp", {
				url: "/apps/:appId/edit",
				templateUrl: "views/createEditApp.html",
				controller: "CreateEditAppCtrl"
			})
			.state("addEditApp", {
				url: "/apps/:appId/add",
				templateUrl: "views/addEditApplicant.html",
				controller: "AddEditApplicantCtrl"
			})
			.state("applicants", {
				url: "/applicants",
				templateUrl: "views/applicants.html",
				controller: "ApplicatsCtrl"
			})
			.state("viewApplicant", {
				url: "/applicants/:applicantId",
				templateUrl: "views/applicant.html",
				controller: "ApplicatsCtrl"
			})
			.state("/editApplicant", {
				url: "/applicants/:applicantId/edit",
				templateUrl: "views/addEditApplicant.html",
				controller: "AddEditApplicantCtrl"
			});
		});
})();