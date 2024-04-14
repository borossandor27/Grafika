/*
 * készítette: Sáray Anna
 */
document.addEventListener("DOMContentLoaded", () => {
  /**
   * @type {HTMLCanvasElement}
   */
  const rajzlap = document.getElementById("olimpia");
  const rajzfelulet = rajzlap.getContext("2d");
  //--ellipszis
  const circle = (x, y, color, width, radius) => {
    rajzfelulet.beginPath();
    rajzfelulet.lineWidth = width;
    rajzfelulet.strokeStyle = color;
    rajzfelulet.arc(x, y, radius, 0, 2 * Math.PI);
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

  const colors = ["#2a9df4", "gold", "black", "green", "red"];
  const texts = ["Európa", "Ázsia", "Afrika", "Ausztrália", "Amerika"];

  /*
for (let i=0; i<3; i++) {
    x=100;
    y=100;
    num=0;
    if (i==0) {
        z=colors[num];
        a=12;
        b=55;
    } else {
        z=white;
        a=6;
        if (i==1) {b=63.5;} else {b=46.5;}
    }
    for (let j=0; j<5; j++) {
        circle(x, y, z, a, b);
        x+=70;
        if (j%2==0) {
            y+=50;
        } else {
            y-=50;
        }
        num+=1;
    }
    
}
*/
  //körök

  x = 100;
  y = 100;
  for (let i = 0; i < 5; i++) {
    circle(x, y, colors[i], 12, 55);
    x += 70;
    if (i % 2 == 0) {
      y += 50;
    } else {
      y -= 50;
    }
  }

  x = 100;
  y = 100;
  for (let i = 0; i < 5; i++) {
    circle(x, y, "white", 6, 63.5);
    x += 70;
    if (i % 2 == 0) {
      y += 50;
    } else {
      y -= 50;
    }
  }
  x = 100;
  y = 100;
  for (let i = 0; i < 5; i++) {
    circle(x, y, "white", 6, 46.5);
    x += 70;
    if (i % 2 == 0) {
      y += 50;
    } else {
      y -= 50;
    }
  }

  //*elő cikkely
  x = 100;
  y = 100;
  a = 5.8;
  for (let i = 0; i < 4; i++) {
    quarterCircle(x, y, colors[i], 12, a, 2.5);
    x += 70;
    if (i % 2 == 0) {
      a -= 1.2;
      y += 50;
    } else {
      a += 1.2;
      y -= 50;
    }
  }
  x = 170;
  y = 150;
  a = 2.4;
  for (let i = 0; i < 4; i++) {
    quarterCircle(x, y, colors[i + 1], 12, a, 2.5);
    x += 70;
    if (i % 2 == 0) {
      a -= 0.9;
      y -= 50;
    } else {
      a += 0.9;
      y += 50;
    }
  }

  //szöveg
  x = 100;
  y = 97;
  for (let i = 0; i < 5; i++) {
    text(x, y, texts[i]);
    x += 70;
    if (i % 2 == 0) {
      y += 56;
    } else {
      y -= 56;
    }
  }
});
