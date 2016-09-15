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
                ctx.font = "48px serif";
                ctx.fillText("Hello world", 10, 50);
            };

            document.getElementById("b2").onclick=function(){
                clear_canvas();
                ctx.font = "48px serif";
                ctx.strokeText("Hello world", 10, 50);

            };

            document.getElementById("b3").onclick=function(){
                clear_canvas();
                ctx.font = "48px serif";
                ctx.textBaseline = "hanging";
                ctx.strokeText("Hello world!", 0, 100);
            };

            document.getElementById("b4").onclick=function(){
                clear_canvas();
                var text = ctx.measureText("Sample String"); // TextMetrics object
                ctx.font = "20px Times New Roman";
                ctx.fillStyle = "Black";
                ctx.fillText(text, 5, 30);
                //text.width; // 16;

                ctx.fillStyle = "Red";
                ctx.fillText(text.width, 5, 90);

              };
              
          }else {
            console.log('Canvas Error!');
        }
     }
  }
