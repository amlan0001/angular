(function () {
    var ctx = document.getElementById("c").getContext("2d");
    ctx.canvas.width = 300;
    ctx.canvas.height = 300;
    var options = {
        responsive: true,
        maintainAspectRatio: false,
    }
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
    };
    var MyNewChart = new Chart(ctx).Line(data, options);


    var app = angular.module("myApp", []);
    app.controller("MainController", function ($scope) {
        $scope.data = [{ id: 1, values: [10, 20, 30, 40, 50, 60, 70] },
            { id: 2, values: [11, 26, 12, 4, 59, 60, 78] },
        { id: 3, values: [15, 28, 30, 89, 50, 64, 71] },
        { id: 4, values: [13, 52, 23, 74, 85, 76, 90] },
        { id: 5, values: [21, 22, 63, 34, 75, 60, 100] }
        ];



    });























}());
