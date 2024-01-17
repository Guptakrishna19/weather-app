var apiKey='ecc90a4c86ecd906737083fb80fea806';

var weather = document.querySelector("#weather");
var form = document.querySelector("form");
var search = document.querySelector("#search");
const getWeather=async(city)=>{
    weather.innerHTML=`<h2>LOADING...</h2>`;
    var apiLink=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
    const response=await fetch(apiLink);
    const data=await response.json();
    console.log(response);
showWeather(data);
    console.log(data);

}
const showWeather=(data)=>{
    //var weather=document.createElement("div");
    if(data.cod=='404'){
        weather.innerHTML=`<h2>PAGE NOT FOUND!!</h2>`;
    }
    weather.innerHTML=` <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h2>${data.main.temp}</h2>
    <h4>${data.weather[0].main}</h4>
    <h4>${data.name}</h4>
</div>`;

}
form.addEventListener("submit",function(event){
    getWeather(search.value);
    event.preventDefault();
});