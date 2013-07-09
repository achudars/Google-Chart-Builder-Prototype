'use strict';

google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['google-chart-sample']);
});
google.load('visualization', '1', {packages: ['corechart']});

angular.module('google-chart-sample', ['googlechart.directives']).controller("SampleCtrl", function ($scope) {

    var chart1 = {};
    chart1.type = "AreaChart";
    chart1.displayed = false;

    chart1.options = {
        "width": 900,
        "height": 300,
        "title": "Chart Title",
        "isStacked": "true",

        "displayExactValues": true,
        "vAxis": {
            "title": "Sales unit", "gridlines": {"count": 10}
        },
        "hAxis": {
            "title": "Date"
        },
        "colors" : ["#1abc9c","#34495e","#8e44ad","#2ecc71","#2980b9","#3498db","#9b59b6","#16a085","#27ae60","#2c3e50","#f1c40f","#e67e22","#e74c3c","#f39c12","#d35400","#c0392b"]
    };

    chart1.data = {
    "cols": [
        {id: "month", label: "Month", type: "string"},
        {id: "laptop-id", label: "Laptop", type: "number"},
        {id: "desktop-id", label: "Desktop", type: "number"},
        {id: "server-id", label: "Server", type: "number"}
    ],
    "rows": [
        {c: [
            {v: "January"},
            {v: 19, f: "42 items"},
            {v: 12, f: "Only 12 items"},
            {v: 7, f: "7 servers"}
        ]},
        {c: [
            {v: "February"},
            {v: 13},
            {v: 1, f: "1 unit (Out of stock this month)"},
            {v: 12}
        ]},
        {c: [
            {v: "March"},
            {v: 24},
            {v: 5},
            {v: 11}
        ]}
    ]
    };

    
    $scope.cols = chart1.data.cols;
    $scope.chart = chart1;


    // handles data upload and applies the data to draw a chart
    $scope.apply = function(data) {
        try {
            $scope.chart.data = preprocessJSON(this.data.replace(/'/g, '"'));
                
        } catch(e) {
            console.log(e);
    }

    };





});

function Ctrl($scope) {

  $scope.type="number";

  $scope.submit = function() {
    if (this.id && this.label && this.type) {
      $scope.cols.push({ "id": this.id, "label": this.label, "type": this.type });
      this.id = "";
      this.label = "";
      this.type = "number";
    }
  };

  $scope.remove = function() {
    if ($scope.cols.length > 0) {
      $scope.cols.pop();
    }
  };

  

};


function preprocessJSON(str) {

    return str.replace(/("(\\.|[^"])*"|'(\\.|[^'])*')|(\w+)\s*:/g,
    function(all, string, strDouble, strSingle, jsonLabel) {
        if (jsonLabel) {
            return '"' + jsonLabel + '": ';
        }
        return all;
    });

}
