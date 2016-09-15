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
                var img = new Image();
                img.onload = function(){
                  ctx.drawImage(img,0,0);
                  ctx.beginPath();
                  ctx.moveTo(30,96);
                  ctx.lineTo(70,66);
                  ctx.lineTo(103,76);
                  ctx.lineTo(170,15);
                  ctx.stroke();
                };
                img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
            };

            document.getElementById("b2").onclick=function(){
                clear_canvas();
                var img = new Image();
                img.onload = function(){
                  for (var i=0;i<4;i++){
                    for (var j=0;j<3;j++){
                      ctx.drawImage(img,j*50,i*38,50,38);
                    }
                  }
                };
                img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

            };

            document.getElementById("b3").onclick=function(){
                clear_canvas();
                var img = document.getElementById("scream");
                ctx.drawImage(img,10,10);

            };

            document.getElementById("b4").onclick=function(){
                clear_canvas();
                var img = new Image();
                img.src = 'data:image/gif;base64,R0lGODlhDAAMAOYAANPe5Pz//4KkutDb4szY3/b+/5u5z/3//3KWrfn//8rk8naasYGkuszY4Mbg8qG+0dzv9tXg5sTg8t/o7vP8/4iqv9ft9NPe5qfD1Mfc56O/0YKlu+Lr8M3Z4JCwxuj2/Of0+eDz9+rw9Z68z8/n8sHe8sbT3Ju6zuDv96nE1Onw9Nbh6cvX39Hq89Hq8u77/srW3tbh54Kku8ba56TD1u37/vL8/vL8/9ft9ebu8+Ps8bzM1Ymsw7XR4Nnj6Yanvsnj8qrI2Or2/NTf5tvl68vY3+r3/HqdtNji6OXt8eDz+dLc477c7bDO3t7n7d7v9s3Z4dbs9N/y98Pd6PX+/8/b4f7//+Hp7tDo8vv//+fu84GjunKWro6uxHqctOfu9P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAMAAwAAAeEgCJfg4RfWlo5KlpgjI2OOklWBwcBAVmXCQlXHAUFVBkGBjMUNzZOEy81IF2sXUZCH0QrDyhPGzICAkohUj4XHhoQKQsLGDgWUTFIJxUjUy0uWNIkQxE9W9gMDD9BCgpLAEBNXl5H5F40DlUDEkxc71wICDwlDQBQHQ0EBEUsJjswBgQCADs=';
                
                ctx.drawImage(img,100,100,150,150);


              };

          }else {
            console.log('Canvas Error!');
        }
     }
  }
