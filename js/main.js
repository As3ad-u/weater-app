let searchInput=document.querySelector('.searchInput');
const btn=document.querySelector('.searchIcon');
let  apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=cairo`;
const apiKey=`dbec5f0fa62e90c7b59031b36a46dacd`;
let weatherIcon=document.querySelector('.weatherIcon');
window.onload=function(){
    autoFocus();
}

function autoFocus(){
    searchInput.focus();

}
async function checkWeather(){
    let cityName=searchInput.value;
    apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}`;

    const response =await fetch(apiUrl + `&appid=${apiKey}`);
    let data= await response.json();
    console.log(data);
    if(response.status==200){
        document.querySelector('.degree').innerHTML=Math.round(data.main.temp);
        document.querySelector('.city').innerHTML=data.name; 
        document.querySelector('.humidityDegree').innerHTML=data.main.humidity;
        document.querySelector('.windDegree').innerHTML=data.wind.speed;
        if(data.weather[0].main=='Clear'){
            weatherIcon.src='./images/clear.png'
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src='./images/rain.png';
        }
        else if(data.weather[0].main=="Clouds"){
            weatherIcon.src='./images/clouds.png';
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src='./images/drizzle.png';
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src='./images/mist.png';
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src='./images/snow.png';
        }
    }
    else{
        Swal.fire({
            title: "OOOOPS",
            text: "please enter correct city name",
            icon: "error"
        });    
    }
    searchInput.value="";
    autoFocus();
}

btn.addEventListener('click',function(){
    checkWeather();
})








