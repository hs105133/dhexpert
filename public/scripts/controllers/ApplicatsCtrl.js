(function(){
	angular.module("expertApp").controller("ApplicatsCtrl", function($scope, $stateParams, ApplicantService){

		$scope.applicants = ApplicantService.query();
		// $scope.formData = {};

		var applicantId  = $stateParams.applicantId;

		if(applicantId){
			ApplicantService.get({id: applicantId}, function(res){
				$scope.applicant = res;
			});
		} else {
			//$scope.apps = AppService.query();
		}

		$scope.removeApplicant = function(index, applicantId){
			ApplicantService.remove({id: applicantId}, function(res){
				$scope.applicants.splice(index, 1);
			});
		};
		
	});	
})();