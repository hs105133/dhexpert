(function(){
	angular.module("expertApp")
		.factory("AppService", function($resource){
			return $resource("/apps/:id", {id: "@id"}, {"update": { method: "PUT"}});
		})
		.factory("ApplicantService", function($resource){
			return $resource("/applicants/:id", {id: "@id"}, {"update": { method: "PUT"}});
		});
})();