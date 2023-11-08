let circle = document.getElementById("circleCanvas");
circle=circle.getContext("2d");
for (let i=0; i<255; i+=50){
    circle.fillStyle = `rgb(${255-i},${255-i},${255-i})`;
    circle.beginPath();
    circle.arc(50+i,50+i,20,0,Math.PI*2);
    circle.fill();
    circle.stroke();
}

