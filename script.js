const apikey ="622ba74a18e18f858077c6d298fb6ebd";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkweather(city){
    const response =await fetch (apiurl +city + `&appid=${apikey}`);
    var data = await response.json();

    console.log (data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Images/clear.png";
    } 
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Images/mist.png";
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "Images/mist.png";
    }
}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
