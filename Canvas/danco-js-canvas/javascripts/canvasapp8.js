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
                // Create gradients
                var lingrad = ctx.createLinearGradient(0,0,0,150);
                lingrad.addColorStop(0, '#00ABEB');
                lingrad.addColorStop(0.5, '#fff');
                lingrad.addColorStop(0.5, '#26C000');
                lingrad.addColorStop(1, '#fff');

                var lingrad2 = ctx.createLinearGradient(0,50,0,95);
                lingrad2.addColorStop(0.5, '#000');
                lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

                // assign gradients to fill and stroke styles
                ctx.fillStyle = lingrad;
                ctx.strokeStyle = lingrad2;

                // draw shapes
                ctx.fillRect(10,10,130,130);
                ctx.strokeRect(50,50,50,50);
            };

            document.getElementById("b2").onclick=function(){
                clear_canvas();
                // Create gradients
                var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
                radgrad.addColorStop(0, '#A7D30C');
                radgrad.addColorStop(0.9, '#019F62');
                radgrad.addColorStop(1, 'rgba(1,159,98,0)');

                var radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
                radgrad2.addColorStop(0, '#FF5F98');
                radgrad2.addColorStop(0.75, '#FF0188');
                radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

                var radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
                radgrad3.addColorStop(0, '#00C9FF');
                radgrad3.addColorStop(0.8, '#00B5E2');
                radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

                var radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
                radgrad4.addColorStop(0, '#F4F201');
                radgrad4.addColorStop(0.8, '#E4C700');
                radgrad4.addColorStop(1, 'rgba(228,199,0,0)');

                // draw shapes
                ctx.fillStyle = radgrad4;
                ctx.fillRect(0,0,150,150);
                ctx.fillStyle = radgrad3;
                ctx.fillRect(0,0,150,150);
                ctx.fillStyle = radgrad2;
                ctx.fillRect(0,0,150,150);
                ctx.fillStyle = radgrad;
                ctx.fillRect(0,0,150,150);

            };

            document.getElementById("b3").onclick=function(){
                clear_canvas();
                // create new image object to use as pattern
                var img = new Image();
                img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
                img.onload = function(){

                  // create pattern
                  var ptrn = ctx.createPattern(img,'repeat');
                  ctx.fillStyle = ptrn;
                  ctx.fillRect(0,0,150,150);

                }
            };

            document.getElementById("b4").onclick=function(){
                clear_canvas();
                ctx.shadowOffsetX = 2;
                ctx.shadowOffsetY = 2;
                ctx.shadowBlur = 2;
                ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

                ctx.font = "20px Times New Roman";
                ctx.fillStyle = "Black";
                ctx.fillText("Sample String", 5, 30);
              };
              document.getElementById("b5").onclick=function(){
                  clear_canvas();
                  ctx.beginPath();
                  ctx.arc(50, 50, 30, 0, Math.PI*2, true);
                  ctx.arc(50, 50, 15, 0, Math.PI*2, true);
                  ctx.fill("evenodd");
              };

          }else {
            console.log('Canvas Error!');
        }
     }
  }
