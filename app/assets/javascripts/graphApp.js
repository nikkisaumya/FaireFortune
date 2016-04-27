var fortuneGraph= angular.module('fortuneGraph',['highcharts-ng']);
fortuneGraph.controller('graphController',['$scope', 'Graph', function($scope, Graph){
    $scope.showModal =  false;
    console.log("worknation")

    $scope.scatter = Graph.scatter();
    $scope.bar = Graph.bar();
    $scope.stackedColumns = Graph.stackedColumns();
    $scope.pie = Graph.pie({ titleText: 'Internship Locations' })

}])