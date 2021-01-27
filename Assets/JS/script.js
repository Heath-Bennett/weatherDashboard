$(document).ready(function(){
  let lon = "";
  let lat = "";
  let index = null;
  let city = "";
  let state = "";
  let userInput = "";
  let entry = "";

  let now = luxon.DateTime;
  let date= now.local();
  // let month = date.month;
  // let day = date.day;
  // let year = date.year;

  const UV = $("#uv");

  
  
  let currentDay = date.toLocaleString({locale: 'en-us'});

  
  let day1 = date.plus({days: 1}).toLocaleString({locale: 'en-us'});
  let day2 = date.plus({days: 2}).toLocaleString({locale: 'en-us'});
  let day3 = date.plus({days: 3}).toLocaleString({locale: 'en-us'});
  let day4 = date.plus({days: 4}).toLocaleString({locale: 'en-us'});
  let day5 = date.plus({days: 5}).toLocaleString({locale: 'en-us'});

  $("div.currentLoc > span").text(currentDay);
  $("#dateOne").text(day1);
  $("#dateTwo").text(day2);
  $("#dateThree").text(day3);
  $("#dateFour").text(day4);
  $("#dateFive").text(day5);
  
  const APIKey = "d8a66d784d55a0943c5edc1ccf69c69b";
  
  const cityName = $("div.currentLoc > p");
  const button = $("span.blue");

  //This function retrieves info from local storage and populates the page with it
  let init = function(){
    entry = localStorage.getItem("lastEntry");
    city = localStorage.getItem("city");
    console.log("entry: ", entry);
    cityName.text(city);
    getWeather();
  }
  
  //This function receives userInput and separates it into city and state. 
  let getCityState = function(){

    userInput = $("input.form-control").val();

    if (userInput){
      
      userInput = userInput.toLowerCase();
      for (let i = 0; i < userInput.length; i++){
        if (userInput.charAt(i) === ","){
          index = i; 
        }
      }
  
      if (index === null){
        console.log("null");
      }
  
      city = userInput.slice(0, index);
      state = userInput.slice(index +1);
      state = state.trim();
      entry = city + "," + state;
    }
    
   

    localStorage.setItem("lastEntry", entry);
    localStorage.setItem("city", city);
    console.log("lastEntry: ", entry);

  }

  //This function populates fiveDay
  let populates = function(response){
    for (let i = 0; i < 5; i++){
      $("#temp" + i).text(parseInt(response.daily[i].temp.day));
      $("#humid" + i).text(parseInt(response.daily[i].humidity));

      let icon = response.daily[i].weather[0].icon;
      let srcHtml = ("http://openweathermap.org/img/wn/" + icon + ".png");

      switch (icon){
        case "01d":
        case "01n":
          $("#img" + i).attr({"src": srcHtml, "alt": "Clear Sky"});
          break;
        case "02d":
        case "02n":
          $("#img" + i).attr({"src": srcHtml, "alt": "Few Clouds"});
          break;
        case "03d":
        case "03n":
          $("#img" + i).attr({"src": srcHtml, "alt": "Scattered Clouds"});
          break;
        case "04d":
        case "04n":
          $("#img" + i).attr({"src": srcHtml, "alt": "Broken Clouds"});
          break;
        case "09d":
        case "09n":
          $("#img" + i).attr({"src": srcHtml, "alt": "Shower Rain"});
          break;
        case "10d":
        case "10n":
          $("#img" + i).attr({"src": srcHtml, "alt": "Rain"});
          break;
        case "11d":
        case "11n":
          $("#img" + i).attr({"src": srcHtml, "alt": "Thunderstorm"});
          break;
        case "13d":
        case "13n":
          $("#img" + i).attr({"src": srcHtml, "alt": "Snow"});
          break;
        case "50d":
        case "50n":
          $("#img" + i).attr({"src": srcHtml, "alt": "Mist"});
          break;
      }

      
    }

    
  }
  

  //This function populates current weather's Icon
  let currentWeatherIcon = function(response){
    let currDayIcon = response.weather[0].icon;
    let srcHtml2 = ("http://openweathermap.org/img/wn/" + currDayIcon + ".png");
    console.log(currDayIcon);

    switch (currDayIcon){
      case "01d":
      case "01n":
        $("#currDay").attr({"src": srcHtml2, "alt": "Clear Sky"});
        break;
      case "02d":
      case "02n":
        $("#currDay").attr({"src": srcHtml2, "alt": "Few Clouds"});
        break;
      case "03d":
      case "03n":
        $("#currDay").attr({"src": srcHtml2, "alt": "Scattered Clouds"});
        break;
      case "04d":
      case "04n":
        $("#currDay").attr({"src": srcHtml2, "alt": "Broken Clouds"});
        break;
      case "09d":
      case "09n":
        $("#currDay").attr({"src": srcHtml2, "alt": "Shower Rain"});
        break;
      case "10d":
      case "10n":
        $("#currDay").attr({"src": srcHtml2, "alt": "Rain"});
        break;
      case "11d":
      case "11n":
        $("#currDay").attr({"src": srcHtml2, "alt": "Thunderstorm"});
        break;
      case "13d":
      case "13n":
        $("#currDay").attr({"src": srcHtml2, "alt": "Snow"});
        break;
      case "50d":
      case "50n":
        $("#currDay").attr({"src": srcHtml2, "alt": "Mist"});
        break;
    }
  }

  //This function properly colors UV Index
  let uVColor = function(uvRating){
    if (uvRating < 3.0){
      UV.css("background-color", "green");
      UV.css("color", "white");
    }
    else if (uvRating < 6.0){
      UV.css("background-color", "yellow");
      UV.css("color", "black");
    }
    else if (uvRating < 8.0){
      UV.css("background-color", "orange");
      UV.css("color", "black");
    }
    else if (uvRating < 11.0){
      UV.css("background-color", "red");
      UV.css("color", "white");
    }
    else {
      UV.css("background-color", "violet");
      UV.css("color", "white");
    }
  }
  
  //This function calls the functions and API requests
  let getWeather = function(){

    
    getCityState();
    

    
    
    
    const queryURLOne = "https://api.openweathermap.org/data/2.5/weather?q="+ entry + ",840&appid=" + APIKey + "&units=imperial";
    
    $.ajax({
      url: queryURLOne,
      method: "GET"
    }).then(function(response) {
      
      $("#extendedForecast").text(response.name);

        lon = response.coord.lon;
        lat = response.coord.lat;

        currentWeatherIcon(response);
        console.log(response);
        
        const queryURLTwo = "http://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey;
        $.ajax({
          url: queryURLTwo,
          method: "GET"
        }).then(function(responseTwo) {
    
          let fTemp = parseInt(responseTwo.current.temp);
          $("#temp").text(fTemp);

          let humidity = parseInt(responseTwo.current.humidity);
          $("#humid").text(humidity);

          let wndSpd = parseFloat(responseTwo.current.wind_speed);
          $("#wind").text(wndSpd);

          let uvValue = parseFloat(responseTwo.current.uvi);
          UV.text(uvValue);
          
          cityName.text(city);

          uVColor(uvValue);
          populates(responseTwo);

      
          
          
        });
      });
  }

  init();
  button.on("click", getWeather);

});