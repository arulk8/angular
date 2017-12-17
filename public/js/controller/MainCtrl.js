app.controller('MainCtrl',function($scope)
			{
                $scope.title='first app';
            }
    );
app.controller('user',function($scope){
	$scope.user={};

	function submit(){
		console.log($scope.user);
	}
});

app.controller('business',function($scope){
	$scope.buser={};

	function submit(){
		console.log($scope.buser);
	}
});