const checkweather = async (name) => {
    const apiid = "1c2101b3103ce5bf3d2bfb2cde32f0f0";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiid}&units=metric`;

    const res = await fetch(apiurl);
    const data = await res.json();
    console.log(data);

    if (data.name && data.main && data.weather) {
        document.querySelector("#country").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#des").innerHTML = data.weather[0].description;
        document.querySelector("#hum").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + " m/s";
    } else {
        document.querySelector("#country").innerHTML = "Invalid city name";
        document.querySelector("#temp").innerHTML = "--";
        document.querySelector("#des").innerHTML = "--";
        document.querySelector("#hum").innerHTML = "--";
        document.querySelector("#wind").innerHTML = "--";
        console.log("Invalid city name");
    }
};

document.querySelector(".inp button").addEventListener("click", () => {
    const location = document.querySelector(".inp input").value.trim();

    if (location === "") {
        document.querySelector("#country").innerHTML = "Please enter a city name";
        return;
    }

    checkweather(location);
});
