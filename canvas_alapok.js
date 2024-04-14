document.addEventListener("DOMContentLoaded", () => {
  /**
   * @type {HTMLCanvasElement}
   */
  const rajzlap = document.getElementById("rajzlap");
  const rajzfelulet = rajzlap.getContext("2d");
  //-- négyszög rajzolás
  rajzfelulet.fillStyle = "green";
  rajzfelulet.fillRect(50, 50, 150, 100);
  rajzfelulet.fillStyle = "black";
  //-- vonal kezőpont
  rajzfelulet.moveTo(0, 0);
  //-- végpont koordinátái
  rajzfelulet.lineTo(300, 200);
  //-- összekötjük a pontokat
  rajzfelulet.stroke();

  //-- kör
  rajzfelulet.lineWidth(8);

  rajzfelulet.beginPath();
  rajzfelulet.strokeStyle = "yellow";
  //rajzfelulet.fillStyle = "blue";
  rajzfelulet.fill();
  rajzfelulet.arc(30, 30, 20, 0, 2 * Math.PI);
  rajzfelulet.stroke();

  //-- szöveg megjelenítése
  rajzfelulet.font = "20px Arial";
  rajzfelulet.fillText("Ennyi a rajzolás!!!", 10, 100);
});
