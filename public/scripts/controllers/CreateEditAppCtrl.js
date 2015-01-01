(function(){
	angular.module("expertApp").controller("CreateEditAppCtrl", function($scope, $state, $stateParams,  AppService){
		$scope.formData = {};

		var appId = $stateParams.appId;

		$scope.createEditApp = function(formData){
			if(formData.id){
				AppService.update(formData, function(res){
					$state.go("listapp");
				});	
			} else {
				AppService.save(formData, function(res){
					$state.go("listapp");
				});				
			}
		};

		if(appId){
			AppService.get({id: appId}, function(res){
				$scope.formData = res;
			});
		}
	});	
})();