const apiKey = "629ee54d502b887b5924259f1ec704d9";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById('searchBox');
const searchBtn= document.getElementById('searchButton');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-text").innerHTML = data.main.humidity  + "%";
    document.querySelector(".wind-speed-text").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/Mist.png"
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBtn.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
        console.log('Hello');
    }
});
