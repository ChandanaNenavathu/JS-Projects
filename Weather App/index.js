let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");


// Function to fetch weather details from api and display them 
let getWeather = () => {
    let cityValue = cityRef.value;
    // If input field is empty
    if(cityValue.length == 0){
       result.innerHTML = `<h3 class ="msg"> Please enter a city name </h3>`
    }
    // If input field is Not empty
    else {
        cityRef.value = "";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;    
        fetch(url)
            .then((response => response.json()))
            // If city name is valid
            .then(data => {
                console.log(data);
                console.log(data.weather[0].icon);
                console.log(data.weather[0].main);
                console.log(data.weather[0].description);
                console.log(data.name);
                console.log(data.main.temp_min);
                console.log(data.main.temp_max);
                result.innerHTML=`
                <h2>${data.name}</h2>
                <h4 class ="weather">${data.weather[0].main}</h4>
                <h4 class="desc">${data.weather[0].description}</h4>
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="" />
                <h1>${data.main.temp}&#176;</h1>
                <div class="temp-container">
                    <div>
                        <h4 class="title">Min</h4>
                        <h4 class="temp">${data.main.temp_min}</h4>
                    </div>
                    <div>
                        <h4 class="title">Max</h4>
                        <h4 class="temp">${data.main.temp_max}</h4>
                    </div>
                </div>
                `;
            })
            // if city name os NOT Valid
            .catch(() => {
            result.innerHTML = `<h3 class> City Not Found </h3>`

        })
    }
}
searchBtn.addEventListener('click', getWeather)
window.addEventListener("load", getWeather)