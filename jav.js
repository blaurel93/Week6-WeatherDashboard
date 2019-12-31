$(document).ready(function () {





    function theSearch() {
        var city = $("#searchBar").val();
        var request = new XMLHttpRequest()
        request.open('GET', "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=44c38455c07369969dfcf31cc60c6f41&units=imperial", true)
        request.onload = function () {
            // Begin accessing JSON data here
            var res = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                var temp1 = (res.list[3].main.temp + '°F');
                var temp2 = (res.list[3].main.temp + '°F');
                var temp3 = (res.list[3].main.temp + '°F');
                var temp4 = (res.list[3].main.temp + '°F');
                var temp5 = (res.list[3].main.temp + '°F');
                // appendTest();
                var humid1 = ('Humidity ' + res.list[3].main.humidity + '%');
                var humid2 = ('Humidity ' + res.list[11].main.humidity + '%');
                var humid3 = ('Humidity ' + res.list[19].main.humidity + '%');
                var humid4 = ('Humidity ' + res.list[27].main.humidity + '%');
                var humid5 = ('Humidity ' + res.list[35].main.humidity + '%');

                var wind1 = ('Wind Speed ' + res.list[3].wind.speed + 'Mph')
                var wind2 = ('Wind Speed ' + res.list[11].wind.speed + 'Mph')
                var wind3 = ('Wind Speed ' + res.list[19].wind.speed + 'Mph')
                var wind4 = ('Wind Speed ' + res.list[27].wind.speed + 'Mph')
                var wind5 = ('Wind Speed ' + res.list[35].wind.speed + 'Mph')
                // var windSpeed = (res.wind.speed);
                console.log(res);
                console.log(res.list[3]);
                console.log(temp1);
                console.log(humid1);
                console.log(wind1);
                // function appendTest() {
                //     var newTable1 = res.list[3].main.temp + '°F';
                //     $("#appendHere").innerText = newTable1.toString;
                //     console.log('Worked just cant see it')
                // }



                console.log(res.list[11]);
                console.log(temp2);
                console.log(humid2);
                console.log(wind2);

                console.log(res.list[19]);
                console.log(temp3);
                console.log(humid3);
                console.log(wind3);

                console.log(res.list[27]);
                console.log(temp4);
                console.log(humid4);
                console.log(wind4);

                console.log(res.list[35]);
                console.log(temp5);
                console.log(humid5);
                console.log(wind5);


            } else {
                console.log('error')
            }
        }
        request.send()

    }


    ////// THE ON CLICK OR ENTER BUTTON FUNCTIONS  /////
    ////////                               //////
    /////////                   ////////
    ///////             ///////
    //////      ///////
    /////////
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
    /////
    /////      /////////
    ///////               ///////////
    ///////                         /////////
    ///////                                 /////////
    ////// THE ON CLICK OR ENTER BUTTON FUNCTIONS  /////



});
