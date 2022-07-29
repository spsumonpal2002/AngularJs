let sumon=angular.module('sumon',[]);
sumon.controller('myinstitutecontroller',['$scope',function($scope){
    $scope.institute=[
        {
            name:"Sumon Pal",
            course:"Web Devolopment",
            code:8333,
            fees:21000
        },
        {
            name:"Koustav Parui",
            course:"Web Devolopment",
            code:8234,
            fees:21000
        },
        {
            name:"Sayak Chakravorty",
            course:"PHP & Adv PHP",
            code:8335,
            fees:21000
        },
        {
            name:"Debadyuti Karmakar",
            course:"PHP & Adv PHP",
            code:8436,
            fees:21000
        },
        {
            name:"Harsh  kumar",
            course:"Smart Pro. Acounting",
            code:8537,
            fees:21000
        },
        {
            name:"ajay Ghosh",
            course:"Smart Pro. Acounting",
            code:8638,
            fees:21000
        }
        
    ]
}])