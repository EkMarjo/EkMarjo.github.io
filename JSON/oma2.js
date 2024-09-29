// mocky https://run.mocky.io/v3/ad380593-c086-40b0-96b6-d697e1f523e3
fetch('kurssi.json')

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
  teksti += "<h4>" + data.toteutuksenNimi + "</h4>";
  if (data.osallistujatLkm) {
    teksti += "<p>Kurssille osallistuu: " + data.osallistujatLkm + " henkilöä</p>";
  }
  if (data.osallistujat) {
    teksti += "<h5>Osallistujat:</h5>";
    data.osallistujat.forEach(function(osallistuja) {
      teksti += "<p>" + osallistuja.nimi + "</p>";
    });
  }
    teksti += "<h5>Kesto:</h5>"
  if (data.alkamisaika && data.loppumisaika) {
    teksti += "<p>Kurssi alkaa: " + data.alkamisaika +". Kurssi päättyy: " +  data.loppumisaika + "</p>";
  }
  if (data.kestoViikkoina) {
    teksti += "<p>Kurssi kestää yhteensä: " + data.kestoViikkoina + " viikkoa</p>";
  }

  if (data.kuva) {
    teksti += "<img src='" + data.kuva + "' alt='kuva'>";
  }
  document.getElementById("vastaus").innerHTML = teksti;
}
