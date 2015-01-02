(function(){
	angular.module("expertApp").controller("ListAppCtrl", function($scope, $stateParams, AppService, ApplicantService){
		$scope.formData = {};

		var appId  = $stateParams.appId;

		if(appId){
			AppService.get({id: appId}, function(res){
				$scope.app = res;
			});
			$scope.applicants = ApplicantService.query({appId: appId});
		} else {
			$scope.apps = AppService.query();
		}

		$scope.removeApp = function(index, appId){
			AppService.remove({id: appId}, function(res){
				$scope.apps.splice(index, 1);
			});
		};

		$scope.removeApplicant = function(index, applicantId){
			ApplicantService.remove({id: applicantId}, function(res){
				$scope.applicants.splice(index, 1);
			});
		};		

	});	
})();