$(document).ready(function () {
    $(".weatherBox").hide();
    $("#history").hide();
    $("#currentDisplay").hide();

    function currentSearch() {
        var city = $("#searchBar").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=44c38455c07369969dfcf31cc60c6f41&units=imperial";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {
            console.log(res.city.coord.lon)
            console.log(res.city.coord.lat)

            var lon = (res.city.coord.lon);
            var lat = (res.city.coord.lat);
            var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=44c38455c07369969dfcf31cc60c6f41&lat=" + lat + "&lon=" + lon;
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response.value);
                console.log(res);

                var city = (res.city.name);
                // var date1 = (res.list[5].dt_txt).split("-").join("/");
                var temp1 = (res.list[5].main.temp_max + ' °F');
                var humid1 = ('Humidity ' + res.list[5].main.humidity + ' %');
                var wind1 = ('Wind Speed ' + res.list[5].wind.speed + ' Mph')
                var icon1 = res.list[6].weather[0].icon;
                var uv1 = (response.value);
                var weatherIcon1 = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png"



                function appendCurrent() {
                    $("#currentDisplay").empty();

                    $("#currentDisplay").append("<h1 class='currentDate'>" + "Today : " + city + "</h1>");
                    $("#currentDisplay").append("<img class='currentImg' src='" + weatherIcon1 + "'>");
                    $("#currentDisplay").append("<p class='currentTemp'>" + "Current Temperature : " + temp1 + "</p>");
                    $("#currentDisplay").append("<p class='currentHumid'>" + "Current Humidity : " + humid1 + "</p>");
                    $("#currentDisplay").append("<p class='currentWind'>" + "Current Wind Speed : " + wind1 + "</p>");
                    $("#currentDisplay").append("<p class='currentUv'>" + "UV Index : " + uv1 + "</p>");
                }
                appendCurrent();
            })
        });


    }


    function theSearch() {
        var city = $("#searchBar").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=44c38455c07369969dfcf31cc60c6f41&units=imperial";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {

            var date1 = (res.list[5].dt_txt).split("-").join("/");
            var date2 = (res.list[13].dt_txt).split("-").join("/");
            var date3 = (res.list[21].dt_txt).split("-").join("/");
            var date4 = (res.list[29].dt_txt).split("-").join("/");
            var date5 = (res.list[37].dt_txt).split("-").join("/");

            var temp1 = (res.list[5].main.temp_max + '°F');
            var temp2 = (res.list[13].main.temp_max + '°F');
            var temp3 = (res.list[21].main.temp_max + '°F');
            var temp4 = (res.list[29].main.temp_max + '°F');
            var temp5 = (res.list[37].main.temp_max + '°F');

            var humid1 = ('Humidity ' + res.list[5].main.humidity + '%');
            var humid2 = ('Humidity ' + res.list[13].main.humidity + '%');
            var humid3 = ('Humidity ' + res.list[21].main.humidity + '%');
            var humid4 = ('Humidity ' + res.list[29].main.humidity + '%');
            var humid5 = ('Humidity ' + res.list[37].main.humidity + '%');

            var wind1 = ('Wind Speed ' + res.list[5].wind.speed + 'Mph')
            var wind2 = ('Wind Speed ' + res.list[13].wind.speed + 'Mph')
            var wind3 = ('Wind Speed ' + res.list[21].wind.speed + 'Mph')
            var wind4 = ('Wind Speed ' + res.list[29].wind.speed + 'Mph')
            var wind5 = ('Wind Speed ' + res.list[37].wind.speed + 'Mph')
            // var windSpeed = (res.wind.speed);
            // console.log(tempDay1);
            var icon1 = res.list[6].weather[0].icon;
            var icon2 = res.list[14].weather[0].icon;
            var icon3 = res.list[22].weather[0].icon;
            var icon4 = res.list[30].weather[0].icon;
            var icon5 = res.list[38].weather[0].icon;

            var weatherIcon1 = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png"
            var weatherIcon2 = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png"
            var weatherIcon3 = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png"
            var weatherIcon4 = "http://openweathermap.org/img/wn/" + icon4 + "@2x.png"
            var weatherIcon5 = "http://openweathermap.org/img/wn/" + icon5 + "@2x.png"


            console.log(res);


            function appendTest() {
                $("#appendHere").empty();

                $("#appendHere").append("<h1 class='changeMeDate'>" + date1 + "</h1>");
                $("#appendHere").append("<img class='imgChange' src='" + weatherIcon1 + "'>");
                $("#appendHere").append("<p class='changeMe1'>" + temp1 + "</p>");
                $("#appendHere").append("<p class='changeMe1'>" + humid1 + "</p>");
                $("#appendHere").append("<p class='changeMe1'>" + wind1 + "</p>");
            }
            function appendTest1() {
                $("#appendHere1").empty();

                $("#appendHere1").append("<h1 class='changeMeDate'>" + date2 + "</h1>");
                $("#appendHere1").append("<img class='imgChange' src='" + weatherIcon2 + "'>");
                $("#appendHere1").append("<p class='changeMe1'>" + temp2 + "</p>");
                $("#appendHere1").append("<p class='changeMe1'>" + humid2 + "</p>");
                $("#appendHere1").append("<p class='changeMe1'>" + wind2 + "</p>");

            }
            function appendTest2() {
                $("#appendHere2").empty();

                $("#appendHere2").append("<h1 class='changeMeDate'>" + date3 + "</h1>");
                $("#appendHere2").append("<img class='imgChange' src='" + weatherIcon3 + "'>");
                $("#appendHere2").append("<p class='changeMe1'>" + temp3 + "</p>");
                $("#appendHere2").append("<p class='changeMe1'>" + humid3 + "</p>");
                $("#appendHere2").append("<p class='changeMe1'>" + wind3 + "</p>");

            }
            function appendTest3() {
                $("#appendHere3").empty();

                $("#appendHere3").append("<h1 class='changeMeDate'>" + date4 + "</h1>");
                $("#appendHere3").append("<img class='imgChange' src='" + weatherIcon4 + "'>");
                $("#appendHere3").append("<p class='changeMe1'>" + temp4 + "</p>");
                $("#appendHere3").append("<p class='changeMe1'>" + humid4 + "</p>");
                $("#appendHere3").append("<p class='changeMe1'>" + wind4 + "</p>");

            }
            function appendTest4() {
                $("#appendHere4").empty();

                $("#appendHere4").append("<h1 class='changeMeDate'>" + date5 + "</h1>");
                $("#appendHere4").append("<img class='imgChange' src='" + weatherIcon5 + "'>");
                $("#appendHere4").append("<p class='changeMe1'>" + temp5 + "</p>");
                $("#appendHere4").append("<p class='changeMe1'>" + humid5 + "</p>");
                $("#appendHere4").append("<p class='changeMe1'>" + wind5 + "</p>");

            }


            appendTest();
            appendTest1();
            appendTest2();
            appendTest3();
            appendTest4();


        });
    };


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
            currentSearch();
            var search = $('#searchBar').val();
            function appendSearch() {

                $(".searchHistory").append("<button class='sizeButton'>" + search + "</button>")
            }
            appendSearch();
            $(".weatherBox").show();
            $("#history").show();
            $("#currentDisplay").show();
            localStorage.setItem('saved', search)
        }
    });


    $("#srchBtn").on('click', function () {
        console.log('You clicked the submit button')
        theSearch();
        currentSearch();
        var search = $('#searchBar').val();
        function appendSearch() {

            $(".searchHistory").append("<button class='sizeButton'>" + search + "</button>")
        }
        appendSearch();
        $(".weatherBox").show();
        $("#history").show();
        $("#currentDisplay").show();
        localStorage.setItem('saved', search)
    });

    $(document).on('click', '.sizeButton', function () {
        var cityBtn = $(this).text();
        console.log(cityBtn);
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityBtn + "&appid=44c38455c07369969dfcf31cc60c6f41&units=imperial";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {
            var date1 = (res.list[5].dt_txt).split("-").join("/");
            var date2 = (res.list[13].dt_txt).split("-").join("/");
            var date3 = (res.list[21].dt_txt).split("-").join("/");
            var date4 = (res.list[29].dt_txt).split("-").join("/");
            var date5 = (res.list[37].dt_txt).split("-").join("/");

            var temp1 = (res.list[5].main.temp_max + '°F');
            var temp2 = (res.list[13].main.temp_max + '°F');
            var temp3 = (res.list[21].main.temp_max + '°F');
            var temp4 = (res.list[29].main.temp_max + '°F');
            var temp5 = (res.list[37].main.temp_max + '°F');

            var humid1 = ('Humidity ' + res.list[5].main.humidity + '%');
            var humid2 = ('Humidity ' + res.list[13].main.humidity + '%');
            var humid3 = ('Humidity ' + res.list[21].main.humidity + '%');
            var humid4 = ('Humidity ' + res.list[29].main.humidity + '%');
            var humid5 = ('Humidity ' + res.list[37].main.humidity + '%');

            var wind1 = ('Wind Speed ' + res.list[5].wind.speed + 'Mph')
            var wind2 = ('Wind Speed ' + res.list[13].wind.speed + 'Mph')
            var wind3 = ('Wind Speed ' + res.list[21].wind.speed + 'Mph')
            var wind4 = ('Wind Speed ' + res.list[29].wind.speed + 'Mph')
            var wind5 = ('Wind Speed ' + res.list[37].wind.speed + 'Mph')
            // var windSpeed = (res.wind.speed);
            // console.log(tempDay1);
            var icon1 = res.list[6].weather[0].icon;
            var icon2 = res.list[14].weather[0].icon;
            var icon3 = res.list[22].weather[0].icon;
            var icon4 = res.list[30].weather[0].icon;
            var icon5 = res.list[38].weather[0].icon;

            var weatherIcon1 = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png"
            var weatherIcon2 = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png"
            var weatherIcon3 = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png"
            var weatherIcon4 = "http://openweathermap.org/img/wn/" + icon4 + "@2x.png"
            var weatherIcon5 = "http://openweathermap.org/img/wn/" + icon5 + "@2x.png"


            console.log(res);
            var lon = (res.city.coord.lon);
            var lat = (res.city.coord.lat);
            var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=44c38455c07369969dfcf31cc60c6f41&lat=" + lat + "&lon=" + lon;
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response.value);
                console.log(res);
                $(document).on('click', '.sizeButton', function () {
                    var city = $(this).text();
                    console.log(city);
                    // var date1 = (res.list[5].dt_txt).split("-").join("/");
                    var temp = (res.list[5].main.temp_max + ' °F');
                    var humid = ('Humidity ' + res.list[5].main.humidity + ' %');
                    var wind = ('Wind Speed ' + res.list[5].wind.speed + ' Mph')
                    var weatherIcon = res.list[6].weather[0].icon;
                    var uv = (response.value);
                    var weatherIcon = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png"
                    function appendCurrent() {
                        $("#currentDisplay").empty();

                        $("#currentDisplay").append("<h1 class='currentDate'>" + "Today : " + city + "</h1>");
                        $("#currentDisplay").append("<img class='currentImg' src='" + weatherIcon + "'>");
                        $("#currentDisplay").append("<p class='currentTemp'>" + "Current Temperature : " + temp + "</p>");
                        $("#currentDisplay").append("<p class='currentHumid'>" + "Current Humidity : " + humid + "</p>");
                        $("#currentDisplay").append("<p class='currentWind'>" + "Current Wind Speed : " + wind + "</p>");
                        $("#currentDisplay").append("<p class='currentUv'>" + "UV Index : " + uv + "</p>");
                    }
                    appendCurrent();
                })






            })

            function appendTest() {
                $("#appendHere").empty();

                $("#appendHere").append("<h1 class='changeMeDate'>" + date1 + "</h1>");
                $("#appendHere").append("<img class='imgChange' src='" + weatherIcon1 + "'>");
                $("#appendHere").append("<p class='changeMe1'>" + temp1 + "</p>");
                $("#appendHere").append("<p class='changeMe1'>" + humid1 + "</p>");
                $("#appendHere").append("<p class='changeMe1'>" + wind1 + "</p>");
            }
            function appendTest1() {
                $("#appendHere1").empty();

                $("#appendHere1").append("<h1 class='changeMeDate'>" + date2 + "</h1>");
                $("#appendHere1").append("<img class='imgChange' src='" + weatherIcon2 + "'>");
                $("#appendHere1").append("<p class='changeMe1'>" + temp2 + "</p>");
                $("#appendHere1").append("<p class='changeMe1'>" + humid2 + "</p>");
                $("#appendHere1").append("<p class='changeMe1'>" + wind2 + "</p>");

            }
            function appendTest2() {
                $("#appendHere2").empty();

                $("#appendHere2").append("<h1 class='changeMeDate'>" + date3 + "</h1>");
                $("#appendHere2").append("<img class='imgChange' src='" + weatherIcon3 + "'>");
                $("#appendHere2").append("<p class='changeMe1'>" + temp3 + "</p>");
                $("#appendHere2").append("<p class='changeMe1'>" + humid3 + "</p>");
                $("#appendHere2").append("<p class='changeMe1'>" + wind3 + "</p>");

            }
            function appendTest3() {
                $("#appendHere3").empty();

                $("#appendHere3").append("<h1 class='changeMeDate'>" + date4 + "</h1>");
                $("#appendHere3").append("<img class='imgChange' src='" + weatherIcon4 + "'>");
                $("#appendHere3").append("<p class='changeMe1'>" + temp4 + "</p>");
                $("#appendHere3").append("<p class='changeMe1'>" + humid4 + "</p>");
                $("#appendHere3").append("<p class='changeMe1'>" + wind4 + "</p>");

            }
            function appendTest4() {
                $("#appendHere4").empty();

                $("#appendHere4").append("<h1 class='changeMeDate'>" + date5 + "</h1>");
                $("#appendHere4").append("<img class='imgChange' src='" + weatherIcon5 + "'>");
                $("#appendHere4").append("<p class='changeMe1'>" + temp5 + "</p>");
                $("#appendHere4").append("<p class='changeMe1'>" + humid5 + "</p>");
                $("#appendHere4").append("<p class='changeMe1'>" + wind5 + "</p>");

            }


            appendTest();
            appendTest1();
            appendTest2();
            appendTest3();
            appendTest4();


        });

    });

    /////
    /////      /////////
    ///////               ///////////
    ///////                         /////////
    ///////                                 /////////
    ////// THE ON CLICK OR ENTER BUTTON FUNCTIONS  /////




});
