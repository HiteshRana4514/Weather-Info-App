

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd726a53f9amsh4e17ddbd3fb71c4p179bacjsn1c63683cad57',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    document.getElementById("city_name").innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
            var cloudPct = response.cloud_pct
            var tempGen = response.temp
            var feelsLike = response.feels_like
            var humidity = response.humidity
            var minTemp = response.min_temp
            var maxTemp = response.max_temp
            var windSpeed = response.wind_speed
            var windDegrees = response.wind_degrees
            var sunRise = response.sunrise
            var sunSet = response.sunset
            document.getElementById("temp").innerHTML = tempGen;
            document.getElementById("cloud_des").innerHTML = cloudPct;
            document.getElementById("humidity_desc").innerHTML = humidity;
            document.getElementById("wind_des").innerHTML = windSpeed;
            document.getElementById("feel_des").innerHTML = feelsLike;
        })
        .catch(err => console.error(err));
}
search_city.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})
getWeather("Delhi");