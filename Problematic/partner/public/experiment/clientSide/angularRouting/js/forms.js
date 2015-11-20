
(function(){ 
	  angular
		.module("AssignmentApp")
		.controller("FormsController", FormsController);

	function FormsController($scope){
		
		var forms = ["Registration Form", "Contact List", "To Do List"];
		
		$scope.addform = addform;
		$scope.removeform = removeform;
		$scope.selectform = selectform;
		$scope.updateform = updateform;
		
		$scope.forms = forms;

		function addform(form){
			forms.push(form);
		}

		function removeform(form)
		{
			var index = $scope.forms.indexOf(form);
			$scope.forms.splice(index, 1);
		}

		function updateform(form)
		{

		}

		function selectform(form)
		{

		}
	}
})();


