var app = angular.module('myToDoApp');
app.controller('userCtrl', function ($scope, $state, $http) {
    //“$scope” , "$state and “$http” objects are created and injected by the angular framework

    var dataList = [{
        "id": "5a4baf9471cd1733acbdbe0c",
        "taskId": "4",
        "description": "bill payment",
        "status": "open"
    },
        {
            "id": "5a4bb0e871cd173bf475c53d",
            "taskId": "1",
            "description": "bill payment",
            "status": "open"
        }];


    var getAllTask = function () {
        console.log("got a getAll request");
        //$scope.taskList = data;
        $http.get("http://localhost:8080/api/getAll").then(function (response) {
             console.log("task get All successful" + response.data);
             $scope.taskList = response.data;
             $scope.task = {};
         });
    };

    $scope.getAllData = getAllTask();

    $scope.create = function () {
        console.log("received create req : " + $scope.task.description);
        $http.post("http://localhost:8080/api/create", $scope.task).then(function (response) {
            console.log("task created successfully" );
            //alert("task created Successful..");
            //$state.go('create', {}, {reload:true});
            getAllTask();
           // $state.go('create');

        });
        // refresh the list
        //getAllTask();

    };

    $scope.remove = function (index) {
        $scope.taskList.splice(index, 1);
    };

    $scope.delete = function (id) {
        console.log("got a delete request id : "+ id);
        $http.delete('http://localhost:8080/api/delete/' + id).then(function (response) {
            console.log("task deleted successfully");
            getAllTask();
          //  $state.go('delete'); //, {}, {reload:true});
        });
        //refresh the task list
        //getAllTask();
    };

    $scope.update = function (id) {
        console.log("received update req : " + id);
        $http.put('http://localhost:8080/api/update/' + id, $scope.task).then(function (response) {
            console.log("task updated successfully");
            getAllTask();
            //$state.go('home', {}, {reload:true});

        });
        //refresh the task list
        //getAllTask();

    }

});