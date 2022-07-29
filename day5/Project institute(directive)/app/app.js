let sumon = angular.module('sumon',[]);
// sumon.cofig(['$routeProvider',function($routeProvider){
//     $routeProvider
//         .when('/home',{
//             templateUrl:'views/directory.html'
//         })
//         .when('/directory',{
//             templateUrl:'views/directory.html',
//             controller:'myappcontroller'
//         }).otherwise({
//             redirectTo:'/home'
//         })
// }]);
sumon.controller('myappcontroller',['$scope', function($scope){

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
    $scope.institute=[
        {
            name:"Sumon Pal",
            course:"Web Devolopment",
            code:8333,
            available:true,
            picture:"content/picture/SUMONPHOTO.jpg",
            fees:21
        },
        {
            name:"Koustav Parui",
            course:"Web Devolopment",
            code:8234,
            available:true,
            picture:"content/picture/koustav.jpg",
            fees:21
        },
        {
            name:"Sayak Chakravorty",
            course:"PHP & Adv PHP",
            code:8335,
            available:true,
            picture:"content/picture/sayak.jpg",
            fees:20
        },
        {
            name:"Debadyuti Karmakar",
            course:"PHP & Adv PHP",
            code:8436,
            available:true,
            picture:"content/picture/debadyuti.jpg",
            fees:10
        },
        {
            name:"Harsh  kumar",
            course:"Smart Pro. Acounting",
            code:8537,
            available:true,
            picture:"content/picture/harshkumar.jpg",
            fees:30
        },
        {
            name:"ajay Ghosh",
            course:"Smart Pro. Acounting",
            code:8638,
            available:true,
            picture:"content/picture/SUMONPHOTO.jpg",
            fees:12
        }
        
    ];
}]);