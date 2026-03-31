let cityName = document.querySelectorAll(".cityName li");

cityName.forEach((city) =>{
    city.style.cursor = "pointer";
    city.onclick = () => {
        alert("Loading weather report...");
    }
})

let acceptbtn = document.querySelector(".accept");
acceptbtn.onclick = () => {
    acceptbtn.parentElement.remove();
}

let temperature = document.querySelector(".selectIt"); 
temperature.onchange = () => {
    let unit = temperature.value;
    let allTemps = document.querySelectorAll(".temp"); 
    allTemps.forEach(tempElement => {
        let currentVal = parseInt(tempElement.innerText); 
        if (unit === "fahrenheit") {
            tempElement.innerText = Math.round((currentVal * 9/5) + 32) + "°";
        } else {
            tempElement.innerText = Math.round((currentVal - 32) * 5/9) + "°";
        }
    });
}