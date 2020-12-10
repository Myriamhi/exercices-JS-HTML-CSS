
let reponse = prompt("Voulez-vous convertir des °C en °F ou des °F en °C ?")
if (reponse == "°C en °F") {
    ConvertirCelsius(prompt("°C="))
    function ConvertirCelsius(C) {
        F = (9 * C + (32 * 5)) / 5;
        alert(C + "°C" + "" + "=" + F + "F")
    }
}
else if (reponse == "°F en °C") {
    ConvertirFahrenheit(prompt("°F="))
    function ConvertirFahrenheit(F) {
        C = (F - 32) * 5 / 9;
        alert(F + "°F" + "" + "=" + C + "°C")
    }
}
else alert("Choisissez °C en °F ou °F en °C")





