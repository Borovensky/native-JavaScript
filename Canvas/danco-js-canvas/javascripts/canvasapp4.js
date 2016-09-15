window.onload = function()
 {
    canvasApp();
 }

  function canvasApp() {
     drawScreen();


     function drawScreen() {

       var canvas = document.getElementById("canvas");
       var clear_canvas= function() {
                      ctx.clearRect(0, 0, 500, 500); //удаляет пиксели в указанном прямоугольнике.
                };
        if (canvas.getContext){
            var ctx = canvas.getContext('2d');

            document.getElementById("b1").onclick=function(){
                clear_canvas();
                ctx.fillStyle = "rgb(200,0,0)";
                ctx.beginPath();
                ctx.moveTo(75,50);
                ctx.lineTo(100,75);
                ctx.lineTo(100,25);
                ctx.fill();
            };

            document.getElementById("b2").onclick=function(){
                clear_canvas();
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
            };

            document.getElementById("b3").onclick=function(){
                clear_canvas();
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
            };
            document.getElementById("b4").onclick=function(){
                clear_canvas();
                for(var i=0;i<4;i++){
                  for(var j=0;j<3;j++){
                    ctx.beginPath();
                    var x = 25+j*50; // x coordinate
                    var y = 25+i*50; // y coordinate
                    var radius = 20; // Arc radius
                    var startAngle = 0; // Starting point on circle
                    var endAngle = Math.PI+(Math.PI*j)/2; // End point on circle
                    var anticlockwise = i%2==0 ? false : true; // clockwise or anticlockwise

                    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                    if (i>1){
                      ctx.fill();
                    } else {
                      ctx.stroke();
                    }
                  }
                }
              };
          }else {
            console.log('Canvas Error!');
        }
     }
  }
