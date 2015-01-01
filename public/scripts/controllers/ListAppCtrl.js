(function(){
	angular.module("expertApp").controller("ListAppCtrl", function($scope, $stateParams, AppService){
		$scope.formData = {};

		var appId  = $stateParams.appId;

		if(appId){
			AppService.get({id: appId}, function(res){
				$scope.app = res;
			});
		} else {
			$scope.apps = AppService.query();
		}

		$scope.removeApp = function(index, appId){
			AppService.remove({id: appId}, function(res){
				$scope.apps.splice(index, 1);
			});
		};

	});	
})();