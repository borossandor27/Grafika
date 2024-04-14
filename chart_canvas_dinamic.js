/**
 * @type {HTMLCanvasElement}
 */

const baseUrl = "https://retoolapi.dev/w3zDNu/diagram"; // URL of the API
var datas = []; // Data array
document.addEventListener("DOMContentLoaded", function () {
  // Canvas kiválasztása
  const canvas = document.getElementById("diagram");
  const ctx = canvas.getContext("2d");

  function setDiagramStyle() {
    const ctxWidth = canvas.getWidth();
    const ctxHeight = canvas.getHeight();
    const ctxMargin = parseInt(ctxWidth / 0.1);
    const ctxBottomMargin = ctxMargin + 30; // alsó margónál a feliratnak helyet kell hagyni
    const xAxisWidth = ctxWidth - ctxMargin * 2;
    const yAxisHeight = ctxHeight - ctxBottomMargin - ctxMargin;
    const origo = { x: ctxMargin, y: ctxHeight - ctxBottomMargin };
    const xAxisEnd = { x: origo.x + xAxisWidth, y: origo.y };
    const yAxisEnd = { x: origo.x, y: origo.y - yAxisHeight };
    const barWidth = Math.floor((xAxisWidth-datas.length)/datas.length); // adatoszlopok szélessége
    const spacing = 10; // oszlopok közötti távolság
    console.log(ctxWidth, ctxHeight);
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
          datas.push({
            id: json[i].id,
            ertek: json[i].ertek,
          });
        }
        console.log(datas);

        drawChart();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  getData();

  function drawChart() {
    // Oszlopdiagram rajzolása
    const maxValue = Math.max.apply(null, datas); // Legnagyobb érték meghatározása
    setDiagramStyle();

    ctx.fillStyle = "blue"; // Oszlopok színe
    for (var i = 0; i < datas.length; i++) {
      var height = (datas[i]["ertek"] / maxValue) * 300; // Oszlop magassága
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
    for (var i = 0; i < datas.length; i++) {
      ctx.fillText(
        datas[i]["id"],
        startX + i * (barWidth + spacing),
        startY + 20
      ); // Címke rajzolása
    }
  }
});
