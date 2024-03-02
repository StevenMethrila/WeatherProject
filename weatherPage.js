let searchinputEl = document.getElementById("searchinput");
let paraHyd = document.getElementById("para-Hyderabad");
let ParaTem = document.getElementById("para-Temperature");
let hum_label = document.getElementById("hum-label");
let wind_label = document.getElementById("wind-label");
let form = document.querySelector("form");
const APIkey = "22d1a931155b7a385ee8c9f9db74ed54";



// let url = "https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=22d1a931155b7a385ee8c9f9db74ed54&units=metric";
// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((json) => {
//         console.log(json.main.temp);
//     })
let getCityName = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    paraHyd.textContent = city;
    let spanEl = document.createElement("span");
    spanEl.textContent = " °C";
    ParaTem.textContent = data.main.temp;
    ParaTem.appendChild(spanEl);
    hum_label.textContent = data.main.humidity + " %";
    wind_label.textContent = data.wind.speed + " Kmp";
    console.log(data);
}

form.addEventListener("submit", function(event) {
    console.log(searchinputEl.value);
    getCityName(searchinputEl.value);
    event.preventDefault();
})