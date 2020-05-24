//variable for DOM

//for button and search
var btn = document.querySelector(".btn");
var search = document.querySelector(".search-input");
//for current weather
var place = document.querySelector("#place");
var desc = document.querySelector("#desc");
var temp = document.querySelector("#temp");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
//for map
var tempdel = document.querySelector("#temp_delhi");
var tempmum = document.querySelector("#temp_mumbai");
var tempche = document.querySelector("#temp_chennai");
var tempkol = document.querySelector("#temp_kolkata");

//for forecasting
var day1 = document.querySelector(".day1");
var temp_max1 = document.querySelector(".temp_max1");
var temp_min1 = document.querySelector(".temp_min1");
var desc1 = document.querySelector(".desc1");

var day2 = document.querySelector(".day2");
var temp_max2 = document.querySelector(".temp_max2");
var temp_min2 = document.querySelector(".temp_min2");
var desc2 = document.querySelector(".desc2");

var day3 = document.querySelector(".day3");
var temp_max3 = document.querySelector(".temp_max3");
var temp_min3 = document.querySelector(".temp_min3");
var desc3 = document.querySelector(".desc3");

var day4 = document.querySelector(".day4");
var temp_max4 = document.querySelector(".temp_max4");
var temp_min4 = document.querySelector(".temp_min4");
var desc4 = document.querySelector(".desc4");

var day5 = document.querySelector(".day5");
var temp_max5 = document.querySelector(".temp_max5");
var temp_min5 = document.querySelector(".temp_min5");
var desc5 = document.querySelector(".desc5");

var day6 = document.querySelector(".day6");
var temp_max6 = document.querySelector(".temp_max6");
var temp_min6 = document.querySelector(".temp_min6");
var desc6 = document.querySelector(".desc6");

var day7 = document.querySelector(".day7");
var temp_max7 = document.querySelector(".temp_max7");
var temp_min7 = document.querySelector(".temp_min7");
var desc7 = document.querySelector(".desc7");

//direct API calling for these four cities on map
//for delhi
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=b648e6bc8928e069f6bb960990c8f699" //in this api i use &units=metric so i can get data in celcius
)
  .then((response) => {
    return response.json();
  })
  .then((delhi_data) => {
    tempdel.innerHTML = delhi_data["main"]["temp"] + "&#8451";
  });
//for mumbai
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=b648e6bc8928e069f6bb960990c8f699" //without requesting metric data they gives data in kelvin thats by i caonverting temperatura data into celcius
)
  .then((response) => {
    return response.json();
  })
  .then((mumbai_data) => {
    tempmum.innerHTML =
      (mumbai_data["main"]["temp"] - 273).toFixed(2) + "&#8451"; //toFixed(2) is used for converting long decimal unit with 2 decimal
  });
//for chennai
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=b648e6bc8928e069f6bb960990c8f699"
)
  .then((response) => {
    return response.json();
  })
  .then((chennai_data) => {
    tempche.innerHTML =
      (chennai_data["main"]["temp"] - 273).toFixed(2) + "&#8451";
  });
//for kolkata
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=b648e6bc8928e069f6bb960990c8f699"
)
  .then((response) => {
    return response.json();
  })
  .then((kolkata_data) => {
    tempkol.innerHTML =
      (kolkata_data["main"]["temp"] - 273).toFixed(2) + "&#8451";
  });

//when click on search button
btn.addEventListener("click", get_data);

//when hitting ENTER key
search.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    get_data();
  }
});

//function for getting data from openweather API
var get_data = () => {
  //fetching data for current weather
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      search.value +
      "&appid=b648e6bc8928e069f6bb960990c8f699"
  )
    .then((response) => {
      return response.json();
    })
    .then((current_data) => {
      var placeValue = current_data["name"];
      var tempValue =
        (current_data["main"]["temp"] - 273).toFixed(2) + "&#8451";
      var descValue = current_data["weather"][0]["description"];
      var humidValue = current_data["main"]["humidity"];
      var windvalue = current_data["wind"]["speed"];

      place.innerHTML = placeValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
      humidity.innerHTML = "Humidity : " + humidValue + "%";
      wind.innerHTML = "Speed : " + windvalue + "kmph";
    })
    .catch((err) => {
      return alert("Wrong city name!");
    });

    //setInterval is used for autorefreshing current weather part by 20second
    //setInterval('get_data()', 20000); //autorefresing is currently disable because of limitation of api calls which is 60 call/min  

  //fetching data for 7days forecast
  document.querySelector(".part2").style.display = "block";

  fetch("http://www.mocky.io/v2/5ec9eb4c3000006300a6ceb2")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      day1.innerHTML = data['list'][0]['main']['day'];
      temp_max1.innerHTML = data['list'][0]['main']['temp_max'] + "&#8451";
      temp_min1.innerHTML = data['list'][0]['main']['temp_min'] + "&#8451";
      desc1.innerHTML = data['list'][0]['main']['description'];

      day2.innerHTML = data['list'][1]['main']['day'];
      temp_max2.innerHTML = data['list'][1]['main']['temp_max'] + "&#8451";
      temp_min2.innerHTML = data['list'][1]['main']['temp_min'] + "&#8451";
      desc2.innerHTML = data['list'][1]['main']['description'];

      day3.innerHTML = data['list'][2]['main']['day'];
      temp_max3.innerHTML = data['list'][2]['main']['temp_max'] + "&#8451";
      temp_min3.innerHTML = data['list'][2]['main']['temp_min'] + "&#8451";
      desc3.innerHTML = data['list'][2]['main']['description'];

      day4.innerHTML = data['list'][3]['main']['day'];
      temp_max4.innerHTML = data['list'][3]['main']['temp_max'] + "&#8451";
      temp_min4.innerHTML = data['list'][3]['main']['temp_min'] + "&#8451";
      desc4.innerHTML = data['list'][3]['main']['description'];

      day5.innerHTML = data['list'][4]['main']['day'];
      temp_max5.innerHTML = data['list'][4]['main']['temp_max'] + "&#8451";
      temp_min5.innerHTML = data['list'][4]['main']['temp_min'] + "&#8451";
      desc5.innerHTML = data['list'][4]['main']['description'];

      day6.innerHTML = data['list'][5]['main']['day'];
      temp_max6.innerHTML = data['list'][5]['main']['temp_max'] + "&#8451";
      temp_min6.innerHTML = data['list'][5]['main']['temp_min'] + "&#8451";
      desc6.innerHTML = data['list'][5]['main']['description'];

      day7.innerHTML = data['list'][6]['main']['day'];
      temp_max7.innerHTML = data['list'][6]['main']['temp_max'] + "&#8451";
      temp_min7.innerHTML = data['list'][6]['main']['temp_min'] + "&#8451";
      desc7.innerHTML = data['list'][6]['main']['description'];
    })
    
   
     

  /*
  //this commented code is for future use : opencagedata to get latitute AND  longitude so that this data further send to //openweather API to get real 7 day forecast weather


  fetch(
    "https://api.opencagedata.com/geocode/v1/json?q=" +
      search.value +
      "&key=1108cc4f8c214009a7b66d70707ea07c"
  )
    .then((response) => {
      return response.json();
    })
    .then((converter) => {
      var lat = (converter["results"][0]["geometry"]["lat"]).toFixed(2);
      var lng = (converter["results"][0]["geometry"]["lng"]).toFixed(2);

      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat.value +
          "&lon=" +
          lng.value +
          "&exclude=daily&appid=b648e6bc8928e069f6bb960990c8f699"
      )
        .then((response) => {
          return response.json();
        })
        .then((forecast_data) => {
          console.log(forecast_data);
        });
    });
   
    */

  //.catch(err => alert("Wrong city name !"))
};
