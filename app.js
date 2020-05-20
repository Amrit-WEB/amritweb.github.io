//variable for DOM
var btn = document.querySelector('.btn')
var search = document.querySelector('.search-input')
var place = document.querySelector('#place');
var desc = document.querySelector('#desc');
var temp = document.querySelector('#temp');

//when search button click
btn.addEventListener('click',get_data);

//when hitting ENTER key 
search.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        get_data();
        }
  });

  //function for getting data from openweather API
  function get_data(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search.value+'&appid=b648e6bc8928e069f6bb960990c8f699')
    .then(response => response.json())
    .then(data => {
        var placeValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
    
        place.innerHTML = placeValue;
        desc.innerHTML = descValue;
        temp.innerHTML = tempValue; 
    
    })
    
    .catch(err => alert("Wrong city name !"))
  }