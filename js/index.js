var weatherData = [];

var cityInput = document.getElementById('search');


//Get Weather From api function
async function getWeather(city) {
  try {
      var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c1c01cd44a8d4d25908200209241006&q=${city}&days=3`, {
          method: 'GET'
      });
      var data = await response.json();
      weatherData = data;
      console.log(weatherData);
      display(weatherData);
  } catch (error) {
      console.error("Error  data", error);
  }
}






function display(data) {
    var box = ``;
    var currentTemp = data.current.temp_c;
    var currentRain = data.current.precip_in;
    var currentWind = data.current.wind_kph;
    var currentWindDir = data.current.wind_dir;
    for (var i = 0; i < data.forecast.forecastday.length; i++){
        box += `
        ${i === 0 ? `<div class="card text-white mb-3 col-lg-4 col-md-12 rounded position-relative top-50">
        <div class="card-head d-flex justify-content-between text-center">
                    <h5 class=" text-secondary fs-6">${new Date(data.forecast.forecastday[i].date).toLocaleDateString('en-US', { weekday: 'long' })}</h5>
                    <h5 class=" text-secondary fs-6">${new Date(data.forecast.forecastday[i].date).toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</h5>
                </div>
                <div class="card-body">
                <h5 class="card-title fs-4 text-start text-secondary">${data.location.name}</h5>
                <p class=" current-temp"> ${currentTemp}°C</p>
                <img src="https:${data.forecast.forecastday[i].day.condition.icon}" class="current-icon" alt="weather icon">
                <p class=" text-primary">${data.forecast.forecastday[i].day.condition.text}</p>
                    <div class=" d-flex  justify-content-between me-5">
                    <div class="rain d-flex"><img src="images/icon-umberella.png" alt="icon" class=" me-2 current-img">
                    <p>${currentRain}%</p>
                    </div>
                    <div class="rain d-flex"><img src="images/icon-wind.png" alt="icon" class=" me-2 current-img">
                    <p>${currentWind}km/h</p>
                    </div>
                    <div class="rain d-flex"><img src="images/icon-compass.png" alt="icon" class=" me-2 current-img">
                    <p>${currentWindDir}</p>
                    </div>
                    </div>
                </div>
        </div>
        `: i === 1 ? `<div class="card second-card text-white mb-3  col-lg-4 col-md-12 rounded position-relative top-50">
        <div class="card-head2 w-100 text-center">
                    <h5 class=" text-secondary fs-6">${new Date(data.forecast.forecastday[i].date).toLocaleDateString('en-US', { weekday: 'long' })}</h5>
                </div>
                <div class="card-body  px-2 d-flex flex-column justify-content-center text-center align-items-center">
                <div class=" d-flex flex-column justify-content-center">
                <img src="https:${data.forecast.forecastday[i].day.condition.icon}" class="icon" alt="weather icon">
                    <p class=" fs-1">${data.forecast.forecastday[i].day.maxtemp_c}</p>
                    <p class="text-secondary">${data.forecast.forecastday[i].day.mintemp_c}</p>
                    <p class=" text-primary">${data.forecast.forecastday[i].day.condition.text}</p>
                    
                    </div>
                    </div> 
        </div>` : `<div class="card text-white mb-3 col-lg-4 col-md-12 rounded position-relative top-50">
        <div class="card-head w-100 text-center">
                    <h5 class=" text-secondary fs-6">${new Date(data.forecast.forecastday[i].date).toLocaleDateString('en-US', { weekday: 'long' })}</h5>
                </div>
                <div class="card-body d-flex flex-column justify-content-center text-center align-items-center">
                <div class=" d-flex flex-column justify-content-center">
                <img src="https:${data.forecast.forecastday[i].day.condition.icon}" class="icon" alt="weather icon">
                    <p class=" fs-1">${data.forecast.forecastday[i].day.maxtemp_c}</p>
                    <p class="text-secondary">${data.forecast.forecastday[i].day.mintemp_c}</p>
                    <p class=" text-primary">${data.forecast.forecastday[i].day.condition.text}</p>
                    
                    </div>
                    </div>
        </div>`}
        `
    }
    document.getElementById('rowData').innerHTML = box;
}


//Search Function
function citySearch(){
    var city = cityInput.value;
    if (city.toLowerCase()){
        getWeather(city);
       
    }else{
        alert(' Enter City Name');
    }
    
}

document.getElementById('btn-search').addEventListener('click', function(){
    clear();
})


//Clear  Function
function clear (){
    cityInput.value = null;
}

getWeather('England');




document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            for (let j = 0; j < navLinks.length; j++) {
                navLinks[j].classList.remove('active');
            }
            this.classList.add('active');
        });
    }
});