const searchButton = () =>{
    const inputField = document.getElementById("inputField");
    // console.log(inputField.value);
    if(inputField.value==''){
        errorMessage('');
    }
    else{
        loadData(inputField.value);
    }

    inputField.value = '';
}



const errorMessageS = document.getElementById("errorMessageS");
const weatherInfo = document.getElementById("weatherInfo");
const image = "http://127.0.0.1:5500/weatherMapAPI/images/02d@2x.png";

const clearContent = () => {
    errorMessageS.textContent = '';
    weatherInfo.textContent = '';
}

const errorMessage = (message) =>{
    clearContent();
    const h1 = document.createElement('h1');

    if(message==''){
        h1.innerText = 'Please enter something to get a result';
    }
    else{
        h1.innerText = message;
    }

    errorMessageS.appendChild(h1);
}

const loadData = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=278de88460b27cf7d073de2541ab61f8&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.cod=='404'){
        errorMessage(data.message);
    }
    else if(data.cod=='200'){
        displayData(data);
    }
    // console.log(data);
}

const displayData = (weather) => {
    clearContent();
    weatherInfo.innerHTML = `
        <div class="mb-3">
            <img src="${image}" alt="weatherImage">
        </div>
        <div>
            <h1>${weather.name}</h1>
            <h3>${weather.main.temp}°C</h3>
            <h5>${weather.weather[0].description}</h5>
        </div>
    `;
}