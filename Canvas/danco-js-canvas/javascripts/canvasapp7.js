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
                for (var i = 0; i < 10; i++){
                  ctx.lineWidth = 1+i;
                  ctx.beginPath();
                  ctx.moveTo(5+i*14,5);
                  ctx.lineTo(5+i*14,140);
                  ctx.stroke();
                }
            };

            document.getElementById("b2").onclick=function(){
                clear_canvas();
                var lineCap = ['butt','round','square'];

                // Draw guides
                ctx.strokeStyle = '#09f';
                ctx.beginPath();
                ctx.moveTo(10,10);
                ctx.lineTo(140,10);
                ctx.moveTo(10,140);
                ctx.lineTo(140,140);
                ctx.stroke();

                // Draw lines
                ctx.strokeStyle = 'black';
                for (var i=0;i<lineCap.length;i++){
                  ctx.lineWidth = 15;
                  ctx.lineCap = lineCap[i];
                  ctx.beginPath();
                  ctx.moveTo(25+i*50,10);
                  ctx.lineTo(25+i*50,140);
                  ctx.stroke();
                }

            };

            document.getElementById("b3").onclick=function(){
                clear_canvas();
                var lineJoin = ['round','bevel','miter'];
                ctx.lineWidth = 10;
                for (var i=0;i<lineJoin.length;i++){
                  ctx.lineJoin = lineJoin[i];
                  ctx.beginPath();
                  ctx.moveTo(-5,5+i*40);
                  ctx.lineTo(35,45+i*40);
                  ctx.lineTo(75,5+i*40);
                  ctx.lineTo(115,45+i*40);
                  ctx.lineTo(155,5+i*40);
                  ctx.stroke();
                }
            };

            document.getElementById("b4").onclick=function(){
                clear_canvas();
                // Draw guides
                ctx.strokeStyle = '#09f';
                ctx.lineWidth   = 2;
                ctx.strokeRect(-5,50,160,50);

                // Set line styles
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 10;

                // check input
                if (document.getElementById('miterLimit').value.match(/\d+(\.\d+)?/)) {
                  ctx.miterLimit = parseFloat(document.getElementById('miterLimit').value);
                } else {
                  alert('Value must be a positive number');
                }

                // Draw lines
                ctx.beginPath();
                ctx.moveTo(0,100);
                for (i=0;i<24;i++){
                  var dy = i%2==0 ? 25 : -25 ;
                  ctx.lineTo(Math.pow(i,1.5)*2,75+dy);
                }
                ctx.stroke();
                return false;
              };
              document.getElementById("b5").onclick=function(){
                  clear_canvas();
                  var offset = 0;

                  function draw() {
                    ctx.clearRect(0,0, canvas.width, canvas.height);
                    ctx.setLineDash([4, 2]);
                    ctx.lineDashOffset = -offset;
                    ctx.strokeRect(10,10, 100, 100);
                  }

                  function march() {
                    offset++;
                    if (offset > 16) {
                      offset = 0;
                    }
                    draw();
                    setTimeout(march, 20);
                  }

                  march();
              };

          }else {
            console.log('Canvas Error!');
        }
     }
  }
