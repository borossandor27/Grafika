document.addEventListener("DOMContentLoaded", () => {
  /**
   * @type {HTMLCanvasElement}
   */
  const rajzlap = document.getElementById("olimpia");
  const rajzfelulet = rajzlap.getContext("2d");
  //--ellipszis
  const circle = (x, y, color, rotation) => {
    rajzfelulet.beginPath();
    rajzfelulet.lineWidth = 12;
    rajzfelulet.strokeStyle = color;
    rajzfelulet.arc(x, y, 55, rotation, 2 * Math.PI);
    rajzfelulet.stroke();
  };

  const quarterCircle = (x, y, color, width, rotation, len) => {
    rajzfelulet.beginPath();
    rajzfelulet.lineWidth = width;
    rajzfelulet.strokeStyle = color;
    rajzfelulet.arc(x, y, 55, rotation, rotation + Math.PI / len);
    rajzfelulet.stroke();
  };

  const text = (x, y, text) => {
    rajzfelulet.font = "bold 14px Arial";
    rajzfelulet.fillStyle = "black";
    rajzfelulet.textAlign = "center";
    rajzfelulet.textBaseline = "middle";
    rajzfelulet.fillText(text, x, y);
  };

  circle(100, 100, "#2a9df4", 0);
  circle(170, 150, "gold", 0);
  circle(240, 100, "black", 0);
  circle(310, 150, "green", 0);
  circle(380, 100, "red", 0);

  quarterCircle(100, 100, "white", 20, 6, 3);
  quarterCircle(240, 100, "white", 20, 6, 3);
  quarterCircle(170, 150, "white", 20, 2.5, 3);
  quarterCircle(310, 150, "white", 20, 2.5, 3);
  quarterCircle(310, 150, "white", 20, 4.6, 3);
  quarterCircle(170, 150, "white", 20, 4.6, 3);
  quarterCircle(380, 100, "white", 20, 1.5, 3);
  quarterCircle(240, 100, "white", 20, 1.5, 3);

  quarterCircle(100, 100, "#2a9df4", 12, 5.8, 2.5);
  quarterCircle(240, 100, "black", 12, 5.8, 2.5);
  quarterCircle(170, 150, "gold", 12, 2.4, 2.5);
  quarterCircle(310, 150, "green", 12, 2.4, 2.5);
  quarterCircle(170, 150, "gold", 12, 4.6, 2.5);
  quarterCircle(310, 150, "green", 12, 4.6, 2.5);
  quarterCircle(240, 100, "black", 12, 1.5, 2.5);
  quarterCircle(380, 100, "red", 12, 1.5, 2.5);

  text(100, 97, "Európa");
  text(170, 153, "Ázsia");
  text(240, 97, "Afrika");
  text(310, 153, "Ausztrália");
  text(380, 97, "Amerika");
});
