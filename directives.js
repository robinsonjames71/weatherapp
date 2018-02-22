weatherApp.directive('weatherReport', function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/weather-report.html',
        replace: true,
        scope: {
            weatherObject: '=',
            conversionObject: '='
        }
    }
})