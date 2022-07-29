let sumon = angular.module('sumon',['ngRoute']);
sumon.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl:'views/home.html'
        })
        .when('/directory',{
            templateUrl:'views/directory.html',
            controller:'myappcontroller'
        }).otherwise({
            redirectTo:'/home'
        })
}]);

sumon.controller('myappcontroller',['$scope','$http',function($scope,$http){

    $scope.removedata = function(institutes){
        let removedata = $scope.institute.indexOf(institutes);
        $scope.institute.splice(removedata,1);
    }




    $scope.addstudent=function(){
        $scope.institute.push({
            name:$scope.student.name,
            course:$scope.student.course,
            code:$scope.student.code,
            fees:$scope.student.fees,
           available:true

        });
        $scope.student.name="";
        $scope.student.course="";
        $scope.student.code="";
        $scope.student.fees="";
    };
   
    $http.get('data/institute.json')
    .then(function(response){

            console.log(response);
            $scope.institute = response.data
        });

}]);