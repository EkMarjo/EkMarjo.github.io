// mocky https://run.mocky.io/v3/82c9ef9f-fedb-47d8-99fe-15b6c7d94cf8
fetch('data.json')

// Muunnetaan vastaus JSON muotoon
  .then(function (response) { 
    return response.json(); 
  })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
  .then(function (responseJson) {
    kerro(responseJson);
    // Kutsutaan funktiota ja välitetään sille json-vastaus
  })
  // Jos tuli jokin virhe
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    console.error('Virhe haettaessa dataa:', error);
  });


function kerro(data) {
  var teksti = "";
  teksti += "<h3>" + data.otsikko + "</h3>";
  if (data.kuvaus) {
    teksti += "<p>" + data.kuvaus + "</p>";
  }
  
  if (data.kuva) {
    teksti += "<img src='" + data.kuva + "' alt='kuva'>";
  }
  document.getElementById("vastaus").innerHTML = teksti;
}
