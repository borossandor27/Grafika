let baseUrl = "https://retoolapi.dev/w3zDNu/diagram"; // URL of the API
let data = []; // Data array
document.addEventListener("DOMContentLoaded", function () {
  // Canvas kiválasztása
  var canvas = document.getElementById("diagram");
  var ctx = canvas.getContext("2d");
  // Adatok lekérése az API-ból
  function getData() {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((json) => {
        data = json.data;
        drawChart();
      });
  }
  getData();

  function drawChart() {
    // Oszlopdiagram rajzolása
    let barWidth = 20; // adatoszlopok szélessége
    let spacing = 30; // Oszlopok közötti térköz
    let startX = 50; // Rajzolás kezdőpontja x-koordináta
    let startY = 350; // Rajzolás kezdőpontja y-koordináta
    let maxValue = Math.max.apply(null, data); // Legnagyobb érték meghatározása

    ctx.fillStyle = "blue"; // Oszlopok színe
    for (let i = 0; i < data.length; i++) {
      var height = (data[i] / maxValue) * 300; // Oszlop magassága
      ctx.fillRect(
        startX + i * (barWidth + spacing),
        startY - height,
        barWidth,
        height
      ); // Oszlop rajzolása
    }

    // Címkék hozzáadása
    ctx.fillStyle = "black"; // Címkék színe
    ctx.font = "16px Arial";
    for (var i = 0; i < labels.length; i++) {
      ctx.fillText(labels[i], startX + i * (barWidth + spacing), startY + 20); // Címke rajzolása
    }
  }
});
