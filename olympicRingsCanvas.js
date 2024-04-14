/*
* készítette: Sáray Anna
*/
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("olympicRingsCanvas");
    const ctx = canvas.getContext("2d");
    const radius = 60; // radius of the circles
    const ringWidth = 10; // width of the rings
    const gap = 10; // gap between the rings
    // colors of the rings in order of European, African, American, Asian, and Australian continents
    const rings = [
        { x: 100, y: 80, color: "blue", title: "European" },
        { x: 200, y: 80, color: "black", title: "African" },
        { x: 300, y: 80, color: "red", title: "American" },
        { x: 150, y: 130, color: "yellow", title: "Asian" },
        { x: 250, y: 130, color: "green", title: "Australian" }
    ]
    var x = 100; // starting x-coordinate
    var y = 100;

    for (var i = 0; i < rings.length; i++) {
        ctx.beginPath();
        ctx.arc(rings[i]['x'], rings[i]['y'], radius-gap, 0, 2 * Math.PI);
        //-- a körök közepébe írjuk a kontinens nevét
        ctx.font = "bold 10px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText(rings[i]['title'], rings[i]['x'], rings[i]['y']);
        ctx.lineWidth = ringWidth;
        ctx.strokeStyle = rings[i]['color'];
        ctx.stroke();
        x += 2 * radius - ringWidth / 2;
        if (i % 2 == 1) {
            x = 100;
            y += radius;
        }
    }

    function drawOlympicRings() {
        for (var i = 0; i < colors.length; i++) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.lineWidth = ringWidth;
            ctx.strokeStyle = colors[i];
            ctx.stroke();
            x += 2 * radius - ringWidth / 2;
            if (i % 2 == 1) {
                x = 100;
                y += radius;
            }
        }
    }
});