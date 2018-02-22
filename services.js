weatherApp.service('cityService', function() {
    this.city = 'London';
});

weatherApp.service('weatherService', ['$resource', function($resource) {

    this.GetWeather = function(city, days) {

        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?:q:cnt:api", {api: '&APPID=9f710dc7b2f3ab2b76fcb9421aed8ef0'}, { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

        return weatherAPI.get({ q: 'q=' + city, cnt: '&cnt=' + days });

    };

}]);