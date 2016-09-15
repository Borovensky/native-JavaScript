window.onload = function()
 {
    canvasApp();
 }

  function canvasApp() {
     drawScreen();

     function drawScreen() {
       var canvas = document.getElementById("canvas3");
        if (canvas.getContext){
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.beginPath();
            ctx.moveTo(75,50);
            ctx.lineTo(100,75);
            ctx.lineTo(100,25);
            ctx.fill();

            // Filled triangle
            ctx.beginPath();
            ctx.moveTo(125,25);
            ctx.lineTo(205,25);
            ctx.lineTo(125,105);
            ctx.fillStyle = "rgb(0,0,255)";
            ctx.fill();

            // Stroked triangle
            ctx.beginPath();
            ctx.moveTo(225,100);
            ctx.lineTo(225,125);
            ctx.lineTo(125,100);
            ctx.closePath();
            ctx.strokeStyle = "rgb(0,0,255)";
            ctx.stroke();


            ctx.beginPath();
            ctx.arc(175,175,50,0,Math.PI*2,true); // Внешняя окружность
            ctx.moveTo(210,175);
            ctx.arc(175,175,35,0,Math.PI,false);  // рот (по часовой стрелке)
            ctx.moveTo(165,165);
            ctx.arc(160,165,5,0,Math.PI*2,true);  // Левый глаз
            ctx.moveTo(195,165);
            ctx.arc(190,165,5,0,Math.PI*2,true);  // Правый глаз
            ctx.strokeStyle = "rgb(0,255,0)";
            ctx.stroke();


        }else {
            console.log('Canvas Error!');
        }
     }
  }
