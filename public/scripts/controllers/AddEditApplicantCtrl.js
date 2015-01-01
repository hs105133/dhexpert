(function(){
	angular.module("expertApp").controller("AddEditApplicantCtrl", function($scope, $stateParams, $state, ApplicantService){
		$scope.formData = {};

		var applicantId = $stateParams.applicantId;
		$scope.formData.appId = $stateParams.appId;

		$scope.addEditApplicant = function(formData){
			if(formData.id){
				ApplicantService.update(formData, function(res){
					$state.go("applicants");
				});	
			} else {
				ApplicantService.save(formData, function(res){
					$state.go("applicants");
				});				
			}
		};

		if(applicantId){
			ApplicantService.get({id: applicantId}, function(res){
				$scope.formData = res;
			});
		}
		
	});	
})();