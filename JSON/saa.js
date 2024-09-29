const apiKey = '665ecd56dfc08dbb50feb8b8f5034e28';
const helsinkiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${apiKey}&units=metric`;
const tampereUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tampere&appid=${apiKey}&units=metric`;

// Haetaan Helsingistä
fetch(helsinkiUrl)
// Muunnetaan vastaus JSON muotoon
.then(function (response) 
{ return response.json();
})
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
    naytaSaa(responseJson, "Helsinki")
// Kutsutaan funktiota
})
// Jos tuli jokin virhe
.catch(function (error) { 
    document.getElementById("vastaus").innerHTML = "<p>Helsingin säätietoja ei pystytä hakemaan </p>"+ error;
})

// Haetaan Tampereelta
fetch(tampereUrl)
// Muunnetaan vastaus JSON muotoon
.then(function (response) 
{ return response.json();
})
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
    naytaSaa(responseJson, "Tampere")
// Kutsutaan funktiota
})
// Jos tuli jokin virhe
.catch(function (error) { 
    document.getElementById("vastaus").innerHTML = "<p>Tampereen säätietoja ei pystytä hakemaan </p>"+ error;
})

// Funktio näyttää säätiedot
function naytaSaa(data, kaupunki) {
    var teksti = "";
    teksti += `<h2>Säätiedot: ${kaupunki}</h2>`;
    teksti += `<p>Lämpötila: ${data.main.temp} °C</p>`;
    teksti += `<p>Kuvaus: ${data.weather[0].description}</p>`;
    teksti += `<p>Tuulen nopeus: ${data.wind.speed} m/s</p>`;
    teksti += `<p>Kosteus: ${data.main.humidity} %</p>`;
  

document.getElementById("vastaus").innerHTML += teksti;

}