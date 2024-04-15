/**
 * @type {HTMLCanvasElement}
 */

const baseUrl = "https://retoolapi.dev/w3zDNu/diagram"; // URL of the API
var adatok = []; // Data array
document.addEventListener("DOMContentLoaded", function () {
  // Canvas kiválasztása
  const canvas = document.getElementById("diagram");
  const ctx = canvas.getContext("2d");

  function diagramParams() {
    console.log(canvas.width, canvas.height);
    const ctxMargin = parseInt(ctx.width / 0.1); //-- 10%-os margó
    const ctxBottomMargin = ctxMargin + 30; //-- alsó margónál a feliratnak helyet kell hagyni
    const xAxisWidth = canvas.width - ctxMargin * 2;
    const yAxisHeight = canvas.height - ctxBottomMargin - ctxMargin;
    const origo = { x: ctxMargin, y: ctx.heigth - ctxBottomMargin };
    const xAxisEnd = { x: origo.x + xAxisWidth, y: origo.y };
    const yAxisEnd = { x: origo.x, y: origo.y - yAxisHeight };
    const spacing = 10; // oszlopok közötti távolság
    const barWidth = Math.floor((xAxisWidth - adatok.length * spacing) / adatok.length); // adatoszlopok szélessége
  }

  //-- a diagram nem tölti ki a teljes területet

  canvas.width;

  // Adatok lekérése az API-ból
  function getData() {
    return fetch(baseUrl)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (json) {
        for (var i = 0; i < json.length; i++) {
          adatok.push({
            id: json[i].id,
            ertek: json[i].ertek,
          });
        }
        console.log(adatok);

        drawChart();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  getData();

  function drawChart() {
    // Oszlopdiagram rajzolása
    const maxValue = Math.max.apply(null, adatok); // Legnagyobb érték meghatározása
    diagramParams();

    ctx.fillStyle = "blue"; // Oszlopok színe
    for (var i = 0; i < adatok.length; i++) {
      var height = (adatok[i]["ertek"] / maxValue) * yAxisHeight; // Oszlop magassága
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
    for (var i = 0; i < adatok.length; i++) {
      ctx.fillText(
        adatok[i]["id"],
        startX + i * (barWidth + spacing),
        startY + 20
      ); // Címke rajzolása
    }
  }
});
