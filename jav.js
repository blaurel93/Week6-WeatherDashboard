$(document).ready(function () {
$(".weatherBox").hide();




    function theSearch() {
        var city = $("#searchBar").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=44c38455c07369969dfcf31cc60c6f41&units=imperial";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(res) {
            // var tempDay1 = [res.list[3].main.temp + '°F',
                // res.list[4].main.temp + '°F',
                // res.list[5].main.temp + '°F',
                // res.list[6].main.temp + '°F',
                // res.list[7].main.temp + '°F',
                // res.list[8].main.temp + '°F',
                // res.list[9].main.temp + '°F',
                // res.list[10].main.temp + '°F',
                // ];
                var date1 = (res.list[3].dt_txt);
                var date2 = (res.list[11].dt_txt);
                var date3 = (res.list[19].dt_txt);
                var date4 = (res.list[27].dt_txt);
                var date5 = (res.list[35].dt_txt);

                var temp1 = (res.list[3].main.temp_max + '°F');
                var temp2 = (res.list[11].main.temp_max + '°F');
                var temp3 = (res.list[19].main.temp_max + '°F');
                var temp4 = (res.list[27].main.temp_max + '°F');
                var temp5 = (res.list[35].main.temp_max + '°F');
                
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
                // console.log(tempDay1);
                
                // console.log(temp2);
                // console.log(temp3);
                // console.log(temp4);
                // console.log(temp5);
                console.log(res);
                console.log(res.list[3]);
                console.log(date1);
                console.log(temp1);
                console.log(humid1);
                console.log(wind1);
                
                function appendTest() {
                    // var newTable1 = res.list[3].main.temp + '°F';
                    // $("#appendHere").append = newTable1.toString;
                    $("#appendHere").append("<h1 class='changeMeDate'>" + date1 + "</h1>");
                    $("#appendHere").append("<img class='imgChange' src='https://cdn2.iconfinder.com/data/icons/unisketch-multimedia-vol-1/60/020_009_brightness_low_small_sun-512.png'>");

                    $("#appendHere").append("<p class='changeMe1'>" + temp1 + "</p>");
                    $("#appendHere").append("<p class='changeMe1'>" + humid1 + "</p>");
                    $("#appendHere").append("<p class='changeMe1'>" + wind1 + "</p>");
                    // console.log('Worked just cant see it')
                }
                function appendTest1() {
                    // var newTable1 = res.list[3].main.temp + '°F';
                    // $("#appendHere").append = newTable1.toString;
                    $("#appendHere1").append("<h1 class='changeMeDate'>" + date2 + "</h1>");
                    $("#appendHere1").append("<img class='imgChange' src='https://cdn2.iconfinder.com/data/icons/unisketch-multimedia-vol-1/60/020_009_brightness_low_small_sun-512.png'>");

                    $("#appendHere1").append("<p class='changeMe1'>" + temp2 + "</p>");
                    $("#appendHere1").append("<p class='changeMe1'>" + humid2 + "</p>");
                    $("#appendHere1").append("<p class='changeMe1'>" + wind2 + "</p>");
                    
                }
                function appendTest2() {
                    // var newTable1 = res.list[3].main.temp + '°F';
                    // $("#appendHere").append = newTable1.toString;
                    $("#appendHere2").append("<h1 class='changeMeDate'>" + date3 + "</h1>");
                    $("#appendHere2").append("<img class='imgChange' src='https://cdn2.iconfinder.com/data/icons/unisketch-multimedia-vol-1/60/020_009_brightness_low_small_sun-512.png'>");

                    $("#appendHere2").append("<p class='changeMe1'>" + temp3 + "</p>");
                    $("#appendHere2").append("<p class='changeMe1'>" + humid3 + "</p>");
                    $("#appendHere2").append("<p class='changeMe1'>" + wind3 + "</p>");
                    
                }
                function appendTest3() {
                    // var newTable1 = res.list[3].main.temp + '°F';
                    // $("#appendHere").append = newTable1.toString;
                    $("#appendHere3").append("<h1 class='changeMeDate'>" + date4 + "</h1>");
                    $("#appendHere3").append("<img class='imgChange' src='https://cdn2.iconfinder.com/data/icons/unisketch-multimedia-vol-1/60/020_009_brightness_low_small_sun-512.png'>");

                    $("#appendHere3").append("<p class='changeMe1'>" + temp4 + "</p>");
                    $("#appendHere3").append("<p class='changeMe1'>" + humid4 + "</p>");
                    $("#appendHere3").append("<p class='changeMe1'>" + wind4 + "</p>");
                    
                }
                function appendTest4() {
                    // var newTable1 = res.list[3].main.temp + '°F';
                    // $("#appendHere").append = newTable1.toString;
                    $("#appendHere4").append("<h1 class='changeMeDate'>" + date5 + "</h1>");
                    $("#appendHere4").append("<img class='imgChange' src='https://cdn2.iconfinder.com/data/icons/unisketch-multimedia-vol-1/60/020_009_brightness_low_small_sun-512.png'>");

                    $("#appendHere4").append("<p class='changeMe1'>" + temp5 + "</p>");
                    $("#appendHere4").append("<p class='changeMe1'>" + humid5 + "</p>");
                    $("#appendHere4").append("<p class='changeMe1'>" + wind5 + "</p>");
                    
                }
                var search = $('#searchBar').val();
                function appendSearch() {
                    $(".searchHistory").append("<button class='sizeButton'>" + search + "</button>")
                }
                // console.log(res.list[11]);
                // console.log(temp2);
                // console.log(humid2);
                // console.log(wind2);

                // console.log(res.list[19]);
                // console.log(temp3);
                // console.log(humid3);
                // console.log(wind3);

                // console.log(res.list[27]);
                // console.log(temp4);
                // console.log(humid4);
                // console.log(wind4);

                // console.log(res.list[35]);
                // console.log(temp5);
                // console.log(humid5);
                // console.log(wind5);
                appendTest();
                appendTest1();
                appendTest2();
                appendTest3();
                appendTest4();
                appendSearch();
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
            $(".weatherBox").show();
        }
    });


    $("#srchBtn").on('click', function () {
        console.log('You clicked the submit button')
        theSearch();
        $(".weatherBox").show();
    });
    /////
    /////      /////////
    ///////               ///////////
    ///////                         /////////
    ///////                                 /////////
    ////// THE ON CLICK OR ENTER BUTTON FUNCTIONS  /////



});
