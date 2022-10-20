let ci = document.querySelector(".city");
let tem = document.querySelector(".temp");
let ic = document.querySelector(".icon");
let desc = document.querySelector(".description");
let hu = document.querySelector(".humidit");
let ws = document.querySelector(".wind");

const searchinput = document.getElementById("search-input");
const searchbutton = document.getElementById("search-button");

searchbutton.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(searchinput.value);
});


const getWeather = async(place) => {
    try{
        console.log(place);
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=a5bed5d290250840c89a69d5ee5e1ecf`
        );

        const weatherData = await response.json();
        console.log(weatherData);

        const {name} = weatherData;
        const {feels_like} = weatherData.main;
        const {humidity} = weatherData.main;
        const {speed} = weatherData.wind;
        const {id,main} = weatherData.weather[0];
        
       
        ci.innerHTML = "Weather in " + name;
        tem.innerHTML = "Temperature : " + Math.round(feels_like-273) + "°C";
        desc.innerHTML = main;
        hu.innerHTML = "Humidity : " + humidity ;
        ws.innerHTML = "Wind Speed : " + speed + "km/hr";

    }
    catch{
        ci.innerHTML ="";
        tem.innerHTML = "";
        desc.innerHTML ="CITY NOT FOUND :(";
        hu.innerHTML ="";
        ws.innerHTML ="";
    }
}
