$(document).ready(function () {

    function theSearch() {
        var city = $("#searchBar").val();
        var request = new XMLHttpRequest()
        request.open('GET', "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=44c38455c07369969dfcf31cc60c6f41&units=imperial", true)
        request.onload = function () {
            // Begin accessing JSON data here
            var res = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                var temp = (res.main.temp);
                var humid = (res.main.humidity);
                var windSpeed = (res.wind.speed);
                // var tempa = parseInt(temp − 273.15) × 9/5 + 32;
                console.log(res);
                console.log(res.name);
                // console.log(res);
                console.log('Temperature ' + temp + '°F');
                console.log('Humidity ' + humid + '%');
                console.log('Wind Speed ' + windSpeed + ' Mph');

            } else {
                console.log('error')
            }
        }
        request.send()

    }


    // $('#searchBar').bind("enterKey", function (e) { });
    $('#searchBar').keyup(function (e) {
        if (e.keyCode == 13) {
            $(this).trigger("enterKey");
            theSearch();
        }
    });


    $("#srchBtn").on('click', function () {
        console.log('You clicked the submit button')
        theSearch();
    });





});
