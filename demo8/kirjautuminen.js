document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function kirjauduSisaan() {
    var nimi = document.getElementById("nimi").value;
    if (nimi !== "") {
      document.getElementById("kirjautumisLaatikko").style.display = "none";
      document.getElementById("tervetuloaTeksti").innerText = "Tervetuloa " + nimi + "!";
      document.getElementById("kirjauduUlos").style.display = "block";
    } else {
      alert("Syötä nimesi!");
    }
  }
  
  function kirjauduUlos() {
    document.getElementById("kirjautumisLaatikko").style.display = "block";
    document.getElementById("tervetuloaTeksti").innerText = "";
    document.getElementById("kirjauduUlos").style.display = "none";
  }