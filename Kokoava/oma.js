fetch('data.json')

// Muunnetaan vastaus JSON muotoon
  .then(function (response) { 
    return response.json(); 
  })
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
  .then(function (responseJson) {
    kerro(responseJson);
    // Kutsutaan funktiota ja välitetään sille json-vastaus tapahtumat(responseJson)
  })
  // Jos tuli jokin virhe
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    console.error('Virhe haettaessa dataa:', error);
  });


function kerro(data) {
  var teksti = "";
  teksti += "<h4>" + data.otsikko + "</h4>";
  if (data.valmistusaika) {
    teksti += "<p>Valmistuaika: " + data.valmistusaika + "</p>";
  }
  if (data.ainesosat) {
    teksti += "<h5>Ainesosat:</h5>";
    data.ainesosat.forEach(function(ainesosa) {
      teksti += "<p>" + ainesosa.nimi + ": " + ainesosa.maara + "</p>";
    });
  }
 
  if (data.ohjeet) {
    teksti += "<p>Ohjeet: " + data.ohjeet + "</p>";
  }
  document.getElementById("vastaus").innerHTML = teksti;
}
