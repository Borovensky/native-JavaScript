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
                for (var i=0;i<3;i++) {
                  for (var j=0;j<3;j++) {
                    ctx.save();
                    ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';
                    ctx.translate(10+j*50,10+i*50);
                    ctx.fillRect(0,0,25,25);
                    ctx.restore();
                  }
                }
            };

            document.getElementById("b2").onclick=function(){
                clear_canvas();
                // left rectangles, rotate from canvas origin
                ctx.save();
                // blue rect
                ctx.fillStyle = "#0095DD";
                ctx.fillRect(30,30, 100, 100);
                ctx.rotate((Math.PI/180)*25);
                //* grey rect
                ctx.fillStyle = "#4D4E53";
                ctx.fillRect(30,30, 100, 100);
                ctx.restore();

                // right rectangles, rotate from rectangle center
                // draw blue rect
                ctx.fillStyle = "#0095DD";
                ctx.fillRect(150, 30, 100, 100);

                ctx.translate(200, 80); // translate to rectangle center
                                        // x = x + 0.5 * width
                                        // y = y + 0.5 * height
                ctx.rotate((Math.PI/180)*25); // rotate
                ctx.translate(-200, -80); // translate back

                // draw grey rect
                ctx.fillStyle = "#4D4E53";
                ctx.fillRect(150, 30, 100, 100);

            };

            document.getElementById("b3").onclick=function(){
                clear_canvas();
                // draw a simple rectangle, but scale it.
                ctx.save();
                ctx.scale(10, 3);
                ctx.fillRect(1,10,10,10);
                ctx.restore();

                // mirror horizontally
                ctx.scale(-1, 1);
                ctx.font = "48px serif";
                ctx.fillText("MDN", -135, 120);

            };

            document.getElementById("b4").onclick=function(){
                clear_canvas();
                var sin = Math.sin(Math.PI/6);
                var cos = Math.cos(Math.PI/6);
                ctx.translate(100, 100);
                var c = 0;
                for (var i=0; i <= 12; i++) {
                  c = Math.floor(255 / 12 * i);
                  ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
                  ctx.fillRect(0, 0, 100, 10);
                  ctx.transform(cos, sin, -sin, cos, 0, 0);
                }

                ctx.setTransform(-1, 0, 0, 1, 100, 100);
                ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
                ctx.fillRect(0, 50, 100, 100);


              };

          }else {
            console.log('Canvas Error!');
        }
     }
  }
