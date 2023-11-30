

const key = "3b2190efd553e759167d79be584a732b"

function dataOnScreen(data) {
console.log(data)
document.querySelector(".city").innerHTML = "Tempo em " + data.name
document.querySelector(".temp").innerHTML = Math.floor (data.main.temp) + "°C"
document.querySelector(".text-forecast").innerHTML = data.weather[0].description
document.querySelector(".air-humidity").innerHTML = "Umidade " + data.main.humidity + "%"
document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}


async function searchCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    dataOnScreen(data)

}

function buttonClicked() {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}

