# CANVAS
canvas переводится как холст
HTML элемент canvas - это элемент HTML 5, который предназначен для создания растрового изображения, используя языки программирования (обычно это JavaScript).

canvas был впервые представлен Apple для Mac OS X Dashboard и позже был реализован для Safari и Google Chrome. Браузеры основанные на  Gecko 1.8, такие как Firefox 1.5, так же поддерживают этот элемент. Тег canvas часть спецификации WhatWG Web applications 1.0 также известной как HTML5.

# Adding Canvas to the HTML Page

        <canvas id="canvasOne" width="500" height="300">
         Your browser does not support HTML5 Canvas.
        </canvas>

## Предварительная настройка холста

Он выглядит как элемент img, но его отличие в том, что он не имеет атрибутов src и alt. Элемент canvas имеет только два атрибута - ширину и высоту. Оба они не обязательны и могут быть выставлены с использованием свойств DOM. Если атрибуты высоты и ширины не установлены, canvas будет по умолчанию шириной 300 писелей и в высоту 150 пикселей. Вы так же можете выставить размеры произвольно в CSS, но во время рендеринга изображение будет масштабироваться в соответствии с его размером и ориентацией.

 Если вид вашего изображения кажется вам искаженным, попробуйте указать атрибуты ширины и высоты в явном виде в атрибутах canvas , а не с помощью CSS.

Атрибут id не специфичен для элемента canvas, но он может быть применен по умолчанию в атрибутах HTML, так как он может быть использован для любого элемента HTML (так же как класс).

Элемент canvas может быть стилизован также, как любое изображение (margin, border, background, и т. д.). Эти правила фактически не влияют на отрисовку в canvas.

## Запасное содержимое

Из-за того, что старые браузеры (в особенности, версии Internet Explorer раннее чем 9) не поддерживают элемент canvas, Вам следует предоставить запасное содержимое для отображения этими браузерами.

Браузеры, которые не поддерживают canvas проигнорируют container и отобразят запасное содержимое этого тега. Браузеры, которые поддерживают canvas проигнорируют запасное содержимое, и просто нормально отобразят canvas.

Например, мы можем предоставить текстовое описание содержимого canvas или предоставить статичное изображение динамически отображаемого содержимого.

        <canvas id="stockGraph" width="150" height="150">
          current stock price: $3.15 +0.15
        </canvas>

        <canvas id="clock" width="150" height="150">
          <img src="images/clock.png" width="150" height="150" alt=""/>
        </canvas>

Сообщать пользователю о том, что его браузер не поддерживает canvas не поможет тем, кто не может прочесть содержимое тега canvas. Предоставление полезной информации в дополнительном canvas делает этот тег более доступным для широкого использования.

В отличии от элемента img, элемент canvas  требует закрывающийся тег. Если этот тег не предоставлен, остаток документа будет считаться запасным контентом и не будет отображен.

### canvasapp1.html:

        <!doctype html>
        <html>
        	<head>
        		<title>canvasExample</title>
                <meta charset='utf-8' />
        	</head>
        	<body>
                <h1>HTML5 Canvas “Hello World!”</h1>
        		<canvas height='320' width='480' id='canvasOne'>Обновите браузер</canvas>
        		<script>
                    window.onload = function()
                     {
                        canvasApp();
                     }

                    function canvasApp() {
                         drawScreen();

                        function drawScreen() {
                               var theCanvas = document.getElementById("canvasOne");

                               if (!theCanvas || !theCanvas.getContext) {
                                     console.log('Hello Html 1!');
                                 }else{
                                     console.log('Hello Canvas One!');
                                 }
                        }
                    }
        		</script>
        	</body>
        </html>

# Рендеринг 2D содержимого (контекста)

Элемент canvas в документе создается с фиксированным размером элемента для рисования, который может иметь один или несколько контекстов для рендеринга, создавая и манипулируя содержимым для показа.

Другие контексты могут предоставлять разные типы рендеринга, к примеру WebGl использует 3D контекст основанный на OpenGL ES.

Холст изначально пустой и прозрачный. Первым делом скрипт получает доступ к контексту и отрисовывает его. Элемент canvas имеет метод getContext(), используется для получения контекста визуализации и ее функции рисования. getContext() принимает один параметр, тип контекста. Для 2D графики будем использвать метку "2d".

        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');

В первой строке скрипта мы получаем узел нашего холста canvas, далее с помощью  document.getContext() метода мы присваиваем ему контекст. Имея узел элемента, вы всегда можете получить для рисования контекст при помощи метода getContext().

## Проверка поддержки

Имея резервное содержимое для canvas вы можете его показывать для тех браузеров, которые не поддерживают данную технологию. Для этого достаточно сделать простую проверку на получение контекста методом getContext(). Ваш код будет выглядеть примерно так:

        var canvas = document.getElementById('myCanvas');

        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
          // drawing code here
        } else {
          // canvas-unsupported code here
        }

# Скелет шаблона canvasapp2.html
        <!doctype html>
        <html>
            <head>
                <title>HTML5 Canvas</title>
                <meta charset='utf-8' />
                <link rel="stylesheet" href="stylesheets/canvasapp2.css" />
            </head>
            <body>

               <h1>HTML5 Canvas</h1>
               <canvas height='320' width='480' id='canvas2'>Обновите браузер</canvas>

               <script type="text/javascript" src="javascripts/canvasapp2.js"></script>

            </body>
        </html>


## canvasapp2.js

        window.onload = function()
         {
            canvasApp();
         }

          function canvasApp() {
             drawScreen();

             function drawScreen() {
               var canvas = document.getElementById("canvas2");
                if (canvas.getContext){
                    var ctx = canvas.getContext('2d');
                }else {
                    console.log('Canvas Error!');
                }
             }
          }

Скрипт вызывает функцию canvasApp(), которая выполнится, когда страница закончит загрузку. Эта функция может быть вызвана как единожды, так и с помощью данных методов window.setTimeout(), window.setInterval(), или любым другим обработчиком события, когда страница будет загружена.


# Прямоугольники

Самой элементарной фигурой которую можно рисовать является прямоугольник.

Предусмотрено три функции для отрисовки прямоугольников.

        strokeRect(x, y, ширина, высота) // Рисует прямоугольник

        fillRect(x, y, ширина, высота)   // Рисует закрашенный прямоугольник

        clearRect(x, y, ширина, высота)  // Очищает область на холсте размер с прямоугольник заданного размера


Пример, который рисует два прямоугольника, один из которых имеет прозрачность alpha.

Каждый холст имеет контекст рисования. Как только вы нашли элемент canvas в DOM (с помощью document.getElementById() или любым другим способом), вызываете метод getContext(). Необходимо указать строку "2D" в методе getContext().

        window.onload = function()
         {
            canvasApp();
         }
          function canvasApp() {
             drawScreen();
             function drawScreen() {
                 // обнаружить элемент canvas в DOM
               var canvas = document.getElementById("canvas2");
                if (canvas.getContext){
                    // Каждый холст изначально пустой.
                    var ctx = canvas.getContext('2d');
                    ctx.fillStyle = "rgb(200,0,0)";
                    // рисует прямоугольник, заполненный текущим стилем заливки.
                    ctx.fillRect (10, 10, 55, 50);

                    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
                    // рисует прямоугольник, заполненный текущим стилем заливки.
                    ctx.fillRect (30, 30, 55, 50);
                }else {
                    console.log('Canvas Error!');
                }
             }
          }

Свойство fillStyle может быть цветом, рисунком или градиентом. По умолчанию fillStyle заливает сплошным черным цветом, но вы можете установить что угодно. Каждый контекст рисунка помнит свои собственные свойства при открытии страницы, пока вы ее не обновите.

fillRect(x, y, width, height) рисует прямоугольник, заполненный текущим стилем заливки.

Свойство strokeStyle как и fillStyle может быть цветом, рисунком или градиентом.

strokeRect(x, y, width, height) рисует прямоугольник с текущим стилем линии. StrokeRect не заливается внутри, он просто рисует границы.

clearRect(x, y, width, height) удаляет пиксели в указанном прямоугольнике.

          function clear_ex1() {
                        var b_canvas = document.getElementById("ex1");
                        var b_context = b_canvas.getContext("2d");
                        b_context.clearRect(50, 25, 150, 100); //удаляет пиксели в указанном прямоугольнике.
                      }
# Сетка

Обычно 1 единица на сетке соответствует 1 пикселю на canvas. Начало координат этой сетки расположено в верхнем левом углу в координате (0,0). Все элементы размещены относительно этого начала. Таким образом, положение верхнего левого угла квадрата составляет х пикселей слева и у пикселей сверху, на координате (х, у).

# Рисование контуров (path)

Контур - это набор точек, которые соединяясь в отрезки линий могут образовывать различные фигуры, изогнутые или нет, разной ширины и разного цвета. Контур (или субконтур)может быть закрытым. Создание фигур используя контуры происходит в несколько важных шагов:

-  Во-первых, вы создаете контур.
-  Затем, используя  команды рисования рисуете контур.
-  Потом контур закрываете.
-  Созданный контур, вы можете обвести или залить для его отображения.

## beginPath()
Создает новый контур. После создания используется в дальнейшем командами рисования при построении контуров.
## closePath()
Закрывает контур, так что будущие команды рисования вновь направлены контекст.
## stroke()
Рисует фигуру с внешней обводкой.
## fill()
Рисует фигуру с заливкой внутренней области.

Первый шаг создания контура заключается в вызове функции beginPath(). Внутри содержатся контуры ввиде набора суб-контуров (линии, дуги и др.), которые вместе образуют форму фигуры. Каждый вызов этого метода очищает набор и мы можем начинать рисовать новые фигуры.
если текущий контур пуст, такой как после вызова beginPath(), или на вновь созданном canvas, первой командой построения контура всегда является функция moveTo(). Поэтому мы всегда можем установить начальную позицию рисования контура после перезагрузки.

Вторым шагом является вызов методов определяемых видом контура, который нужно нарисовать.

Третий, и необязательный шаг - вызов closePath(). Этот метод пытается закрыть фигуру, рисуя прямую линию из текущей точки в начальную. Если фигура была уже закрыта или является просто точкой, то фугкция ничего не делает.
Когда вы вызываете fill(), то каждая открытая фигура закрывается автоматически, так что вы можете не использовать closePath(). Это обстоятельство не имеет место в случае вызова stroke().

# Рисование треугольника

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
           }else {
               console.log('Canvas Error!');
           }
        }


# Передвижение пера

Одна очень полезная функция, которая ничего не рисует, но становится частью набора описанного выше - это функция  moveTo(). Вы можете представить это как отрыв (подъем) пера от бумаги и перемещение в другое место.

## moveTo(x, y)
Перемещает перо в точку с координатами x и y.

При инициализации canvas или при вызове beginPath(), вы захотите использовать функцию moveTo() для перемещения в точку начала рисования. Мы могли бы использовать moveTo() для рисования несвязанного(незакрытого) контура.

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

Если вы захотите увидеть соединные линии, то можете удалить вызов moveTo().

# Линии

Для рисования прямых линий используйте метод lineTo().

## lineTo(x, y)
Рисует линию с текущей позиции до позиции, определенной x и y.

Этот метод принимает два аргумента x и y, которые являются координатами конечной точки линии. Начальная точка зависит от ранее нарисованных путей, причём конечная точка предыдущего пути является начальной точкой следующего и т. д. Начальная точка также может быть изменена с помощью метода moveTo().

Пример ниже рисует два треугольника, один закрашенный и другой обведен контуром.

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


начинается с вызова beginPath(), чтобы начать рисовать путь новой фигуры. Затем мы используем метод moveTo(), чтобы переместить начальную точку в нужное положение. Ниже этого, рисуются две линии, которые образуют две стороны треугольника.

# Дуги

Для рисования дуг и окружностей, используем методы arc() и arcTo().

## arc(x, y, radius, startAngle, endAngle, anticlockwise)
Рисуем дугу с центром в точке (x,y) радиусом r, начиная с угла startAngle и заканчивая в endAngle в направлении против часовой стрелки anticlockwise (по умолчанию по ходу движения часовой стрелки).
## arcTo(x1, y1, x2, y2, radius)
Рисуем дугу с заданными контрольными точками и радиусом, соединяя эти точки прямой линией.

метод arc() имеет пять параметров: x и y -- это координаты центра окружности, в которой должна быть нарисована дуга. radius is self-explanatory. Углы startAngle and endAngle определяют начальную и конечную точки дуги в радианах, вдоль кривой окружности. Отсчет происходит от оси x. Параметр anticlockwise  -- логическое значение, которое, если true, то рисование дуги совершается против хода часовой стрелки; иначе рисование происходит по ходу часовой стрелки.

Углы в функции arc() измеряют в радианах, не в градусах. Для перевода градусов в радианы вы можете использовать JavaScript-выражение:

        radians = (Math.PI/180)*degrees.

Здесь нарисованы 12 различных дуг с разными углами и заливками.

Два for цикла размещают дуги по столбцам и строкам. Для каждой дуги, мы начинаем новый контур, вызывая beginPath(). В это коде каждый параметр дуги для большей ясности задан в виде переменной.

Координаты x и y  должны быть достаточны ясны. radius and startAngle -- фиксированы. endAngle начинается со 180 градусов (полуокружность) в первой колонке и, увеличиваясь с шагом 90 градусов, достигает кульминации полноценной окружностью в последнем столбце.

Установка параметра clockwise определяет результат,  в первой и третьей строках рисование дуг происходит по часовой стрелке, а во второй и четвертой против часовой стрелки. Благодаря if-условию верхняя половина дуг образуется с контуром(обводкой), а нижняя половина дуг с заливкой.

## canvasapp4.js /*

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


# Квадратичные кривые Безье

В этом примере многократно используются квадратичные кривые Безье для рисования речевой выноски.

          function draw() {
            var canvas = document.getElementById('canvas');
            if (canvas.getContext) {
              var ctx = canvas.getContext('2d');

              // Quadratric curves example
              ctx.beginPath();
              ctx.moveTo(75,25);
              ctx.quadraticCurveTo(25,25,25,62.5);
              ctx.quadraticCurveTo(25,100,50,100);
              ctx.quadraticCurveTo(50,120,30,125);
              ctx.quadraticCurveTo(60,120,65,100);
              ctx.quadraticCurveTo(125,100,125,62.5);
              ctx.quadraticCurveTo(125,25,75,25);
              ctx.stroke();
            }
          }

# Cubic Bezier curves

          function draw() {
            var canvas = document.getElementById('canvas');
            if (canvas.getContext){
              var ctx = canvas.getContext('2d');

              // Quadratric curves example
              ctx.beginPath();
              ctx.moveTo(75,40);
              ctx.bezierCurveTo(75,37,70,25,50,25);
              ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
              ctx.bezierCurveTo(20,80,40,102,75,120);
              ctx.bezierCurveTo(110,102,130,80,130,62.5);
              ctx.bezierCurveTo(130,62.5,130,25,100,25);
              ctx.bezierCurveTo(85,25,75,37,75,40);
              ctx.fill();
            }
          }

# Прямоугольники

          function draw() {
            var canvas = document.getElementById('canvas');
            if (canvas.getContext){
              var ctx = canvas.getContext('2d');

              roundedRect(ctx,12,12,150,150,15);
              roundedRect(ctx,19,19,150,150,9);
              roundedRect(ctx,53,53,49,33,10);
              roundedRect(ctx,53,119,49,16,6);
              roundedRect(ctx,135,53,49,33,10);
              roundedRect(ctx,135,119,25,49,10);

              ctx.beginPath();
              ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
              ctx.lineTo(31,37);
              ctx.fill();

              for(var i=0;i<8;i++){
                ctx.fillRect(51+i*16,35,4,4);
              }

              for(i=0;i<6;i++){
                ctx.fillRect(115,51+i*16,4,4);
              }

              for(i=0;i<8;i++){
                ctx.fillRect(51+i*16,99,4,4);
              }

              ctx.beginPath();
              ctx.moveTo(83,116);
              ctx.lineTo(83,102);
              ctx.bezierCurveTo(83,94,89,88,97,88);
              ctx.bezierCurveTo(105,88,111,94,111,102);
              ctx.lineTo(111,116);
              ctx.lineTo(106.333,111.333);
              ctx.lineTo(101.666,116);
              ctx.lineTo(97,111.333);
              ctx.lineTo(92.333,116);
              ctx.lineTo(87.666,111.333);
              ctx.lineTo(83,116);
              ctx.fill();

              ctx.fillStyle = "white";
              ctx.beginPath();
              ctx.moveTo(91,96);
              ctx.bezierCurveTo(88,96,87,99,87,101);
              ctx.bezierCurveTo(87,103,88,106,91,106);
              ctx.bezierCurveTo(94,106,95,103,95,101);
              ctx.bezierCurveTo(95,99,94,96,91,96);
              ctx.moveTo(103,96);
              ctx.bezierCurveTo(100,96,99,99,99,101);
              ctx.bezierCurveTo(99,103,100,106,103,106);
              ctx.bezierCurveTo(106,106,107,103,107,101);
              ctx.bezierCurveTo(107,99,106,96,103,96);
              ctx.fill();

              ctx.fillStyle = "black";
              ctx.beginPath();
              ctx.arc(101,102,2,0,Math.PI*2,true);
              ctx.fill();

              ctx.beginPath();
              ctx.arc(89,102,2,0,Math.PI*2,true);
              ctx.fill();
            }
          }

          // A utility function to draw a rectangle with rounded corners.

          function roundedRect(ctx,x,y,width,height,radius){
            ctx.beginPath();
            ctx.moveTo(x,y+radius);
            ctx.lineTo(x,y+height-radius);
            ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
            ctx.lineTo(x+width-radius,y+height);
            ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
            ctx.lineTo(x+width,y+radius);
            ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
            ctx.lineTo(x+radius,y);
            ctx.quadraticCurveTo(x,y,x,y+radius);
            ctx.stroke();
          }

# Path2D objects

          Path2D()
              The Path2D() constructor returns a newly instantiated Path2D object, optionally with another path as an argument (creates a copy), or optionally with a string consisting of SVG path data.

          new Path2D();     // empty path object
          new Path2D(path); // copy from another path
          new Path2D(d);    // path from from SVG path data

# Path2D example

          function draw() {
            var canvas = document.getElementById('canvas');
            if (canvas.getContext){
              var ctx = canvas.getContext('2d');

              var rectangle = new Path2D();
              rectangle.rect(10, 10, 50, 50);

              var circle = new Path2D();
              circle.moveTo(125, 35);
              circle.arc(100, 35, 25, 0, 2 * Math.PI);

              ctx.stroke(rectangle);
              ctx.fill(circle);
            }
          }

# Using SVG paths

          The path will move to point (M10 10) and then move horizontally 80 points to the right (h 80), then 80 points down (v 80), then 80 points to the left (h -80), and then back to the start (z). You can see this example on the Path2D constructor page.

          var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");

            var p = new Path2D("M10 10 h 80 v 80 h -80 Z");
            ctx.fill(p);


#  Цвета

         Если мы хотим применить цвета к фигуре, то есть два важных свойства, которые мы можем использовать: fillStyle и strokeStyle.

         fillStyle = color
             Sets the style used when filling shapes.
         strokeStyle = color
             Sets the style for shapes' outlines.

         // these all set the fillStyle to 'orange'

         ctx.fillStyle = "orange";
         ctx.fillStyle = "#FFA500";
         ctx.fillStyle = "rgb(255,165,0)";
         ctx.fillStyle = "rgba(255,165,0,1)";

# Пример fillStyle

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
           for (var i=0;i<6;i++){
             for (var j=0;j<6;j++){
               ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                                Math.floor(255-42.5*j) + ',0)';
               ctx.fillRect(j*25,i*25,25,25);
             }
           }
         }

# Пример strokeStyle

         function draw() {
             var ctx = document.getElementById('canvas').getContext('2d');
             for (var i=0;i<6;i++){
               for (var j=0;j<6;j++){
                 ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' +
                                  Math.floor(255-42.5*j) + ')';
                 ctx.beginPath();
                 ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
                 ctx.stroke();
               }
             }
           }


# Прозрачность

         // Assigning transparent colors to stroke and fill style
         ctx.strokeStyle = "rgba(255,0,0,0.5)";
         ctx.fillStyle = "rgba(255,0,0,0.5)";

# Пример globalAlpha

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
           // draw background
           ctx.fillStyle = '#FD0';
           ctx.fillRect(0,0,75,75);
           ctx.fillStyle = '#6C0';
           ctx.fillRect(75,0,75,75);
           ctx.fillStyle = '#09F';
           ctx.fillRect(0,75,75,75);
           ctx.fillStyle = '#F30';
           ctx.fillRect(75,75,75,75);
           ctx.fillStyle = '#FFF';

           // set transparency value
           ctx.globalAlpha = 0.2;

           // Draw semi transparent circles
           for (i=0;i<7;i++){
             ctx.beginPath();
             ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
             ctx.fill();
           }
         }

# Пример использования rgba()

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

           // Draw background
           ctx.fillStyle = 'rgb(255,221,0)';
           ctx.fillRect(0,0,150,37.5);
           ctx.fillStyle = 'rgb(102,204,0)';
           ctx.fillRect(0,37.5,150,37.5);
           ctx.fillStyle = 'rgb(0,153,255)';
           ctx.fillRect(0,75,150,37.5);
           ctx.fillStyle = 'rgb(255,51,0)';
           ctx.fillRect(0,112.5,150,37.5);

           // Draw semi transparent rectangles
           for (var i=0;i<10;i++){
             ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
             for (var j=0;j<4;j++){
               ctx.fillRect(5+i*14,5+j*37.5,14,27.5);
             }
           }
         }

# Стили линий

         lineWidth = value
             Sets the width of lines drawn in the future.
         lineCap = type
             Sets the appearance of the ends of lines.
         lineJoin = type
             Sets the appearance of the "corners" where lines meet.
         miterLimit = value
             Establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes.
         getLineDash()
             Returns the current line dash pattern array containing an even number of non-negative numbers.
         setLineDash(segments)
             Sets the current line dash pattern.
         lineDashOffset = value
             Specifies where to start a dash array on a line.

# Пример lineWidth

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
           for (var i = 0; i < 10; i++){
             ctx.lineWidth = 1+i;
             ctx.beginPath();
             ctx.moveTo(5+i*14,5);
             ctx.lineTo(5+i*14,140);
             ctx.stroke();
           }
         }


# Пример lineCap

         butt
             The ends of lines are squared off at the endpoints.
         round
             The ends of lines are rounded.
         square
             The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
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
         }

# Пример lineJoin

         round
             Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
         bevel
             Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
         miter
             Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is effected by the miterLimit property which is explained below.

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
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
         }

# Демонстрация свойства miterLimit

             miterLimit = max miterLength / lineWidth = 1 / sin ( min θ / 2 )
             The default miter limit of 10.0 will strip all miters for sharp angles below about 11 degrees.
             A miter limit equal to √2 ≈ 1.4142136 (rounded up) will strip miters for all acute angles, keeping miter joins only for obtuse or right angles.
             A miter limit equal to 1.0 is valid but will disable all miters.
             Values below 1.0 are invalid for the miter limit.

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

           // Clear canvas
           ctx.clearRect(0,0,150,150);

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
         }
         //*/


# Using line dashes

         var ctx = document.getElementById('canvas').getContext('2d');
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

# Градиенты

         createLinearGradient(x1, y1, x2, y2)
             Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2).
         createRadialGradient(x1, y1, r1, x2, y2, r2)
             Creates a radial gradient. The parameters represent two circles, one with its center at (x1, y1) and a radius of r1, and the other with its center at (x2, y2) with a radius of r2.

         For example:

         var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
         var radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);

         Once we've created a CanvasGradient object we can assign colors to it by using the addColorStop() method.

         gradient.addColorStop(position, color)
             Creates a new color stop on the gradient object. The position is a number between 0.0 and 1.0 and defines the relative position of the color in the gradient, and the color argument must be a string representing a CSS <color>, indicating the color the gradient should reach at that offset into the transition.

         You can add as many color stops to a gradient as you need. Below is a very simple linear gradient from white to black.

         var lineargradient = ctx.createLinearGradient(0,0,150,150);
         lineargradient.addColorStop(0, 'white');
         lineargradient.addColorStop(1, 'black');

# Пример createLinearGradient

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

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

         }

# Пример createRadialGradient

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

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
         }

# Patterns

         createPattern(image, type)
             Creates and returns a new canvas pattern object. image is a CanvasImageSource (that is, an HTMLImageElement, another canvas, a <video> element, or the like. type is a string indicating how to use the image.

         repeat
             Tiles the image in both vertical and horizontal directions.
         repeat-x
             Tiles the image horizontally but not vertically.
         repeat-y
             Tiles the image vertically but not horizontally.
         no-repeat
             Doesn't tile the image. It's used only once.

For example:

         var img = new Image();
         img.src = 'someimage.png';
         var ptrn = ctx.createPattern(img,'repeat');

# Пример createPattern

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

           // create new image object to use as pattern
           var img = new Image();
           img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
           img.onload = function(){

             // create pattern
             var ptrn = ctx.createPattern(img,'repeat');
             ctx.fillStyle = ptrn;
             ctx.fillRect(0,0,150,150);

           }
         }

# Тени

         shadowOffsetX = float
             Indicates the horizontal distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
         shadowOffsetY = float
             Indicates the vertical distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
         shadowBlur = float
             Indicates the size of the blurring effect; this value doesn't correspond to a number of pixels and is not affected by the current transformation matrix. The default value is 0.
         shadowColor = color
             A standard CSS color value indicating the color of the shadow effect; by default, it is fully-transparent black.

# Пример текста с тенью

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

           ctx.shadowOffsetX = 2;
           ctx.shadowOffsetY = 2;
           ctx.shadowBlur = 2;
           ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

           ctx.font = "20px Times New Roman";
           ctx.fillStyle = "Black";
           ctx.fillText("Sample String", 5, 30);
         }


# Canvas fill rules

             "nonzero": The non-zero winding rule, which is the default rule.
             "evenodd": The even-odd winding rule.


         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
           ctx.beginPath();
           ctx.arc(50, 50, 30, 0, Math.PI*2, true);
           ctx.arc(50, 50, 15, 0, Math.PI*2, true);
           ctx.fill("evenodd");
         }


# Рисование текста

Контекст рендеринга canvas предоставляет два метода для рисования текста:

         fillText(text, x, y [, maxWidth])
             Вставляет заданный текст в положении (x,y). Опционально может быть указана максимальная ширина.
         strokeText(text, x, y [, maxWidth])
             Вставляет контур заданного текста в положении (x,y). Опционально может быть указана максимальная ширина.

## Пример fillText

Текст вставлен с использованием текущего fillStyle.

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
           ctx.font = "48px serif";
           ctx.fillText("Hello world", 10, 50);
         }



## Пример strokeText

Текст вставлен с использованием текущего strokeStyle.

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
           ctx.font = "48px serif";
           ctx.strokeText("Hello world", 10, 50);
         }

# Стиль текста

         font = value
             Это основной стиль, который будет использоваться для вывода текста. Строка имеет такой же синтаксис как CSS-свойство font. По умолчанию равно 10px sans-serif.
         textAlign = value
             Настройка выравнивания текста. Возможные значения: start, end, left, right or center. По умолчанию равно start.
         textBaseline = value
             Настройка выравнивания текста по вертикали. Возможные значения: top, hanging, middle, alphabetic, ideographic, bottom. По умолчанию равно alphabetic.
         direction = value
             Направление текста. Возможные значения: ltr, rtl, inherit. По умолчанию равно inherit.

## Пример textBaseline

Редактируя код ниже вы можете видеть как меняется отображение текста на canvas в реальном времени:

         ctx.font = "48px serif";
         ctx.textBaseline = "hanging";
         ctx.strokeText("Hello world!", 0, 100);

# Измерение текста

Для измерения ширины текста (без рисования его на canvas) можно воспользоваться следующим методом:

         measureText()
             Возвращает объект TextMetrics, содержащий ширину текста в пикселах когда он будет нарисован на canvas.

Пример ниже показывает как можно измерить ширину текста.

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
           var text = ctx.measureText("foo"); // TextMetrics object
           text.width; // 16;
         }

# Использование изображений для рисования

         HTMLImageElement
             Эти изображения созданы, используя конструктор Image(), также как все<img> элементы.
         HTMLVideoElement
             Используя HTML <video> элемент как источник изображения захватывает текущий кадр из видео и использует его как изображение.
         HTMLCanvasElement
             Вы можете использовать другой <canvas> элемент как источник изображения.

         Эти источники совместно именуемые по типу CanvasImageSource.

         Есть несколько способов, чтобы получить изображения для использования на холсте.
# Использование изображений из той же страницы

         Мы можем получить ссылку на изображение, на той же странице, на canvas с используя  один из способов:

            document.getElementsByTagName() метод

             Если вы знаете id конкретного изображения, который вы хотите использовать, вы можете использовать document.getElementById (), чтобы получить это конкретное изображение

# Использование изображений из других доменов

         Использование crossorigin атрибута <img> элемент (отображается  HTMLImageElement.crossOrigin свойства), вы можете запросить разрешение на загрузку другого домена для использования в drawImage(). Если хостинг домен разрешает доступ к междоменному изображению, то изображение может быть использовано в вашем canvas без  without tainting it;иначе он может испортить ваш canvas.
# Использование других canvas элементов

         var img = new Image();   // Create new img element
         img.src = 'myImage.png'; // Set source path


         var img = new Image();   // Create new img element
         img.addEventListener("load", function() {
           // execute drawImage statements here
         }, false);
         img.src = 'myImage.png'; // Set source path


# Вложение изображения с помощью данных: URL

         Другой возможный способ включить изображение это через data: url. Data URLs позволяет вам полностью определить изображение как Base64 кодированную строку символов прямо в ваш код.

         var img = new Image();   // Create new img element
         img.src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';

         Одним из преимуществ data URLs  это то что полученное изображение доступно сразу без других запросов туда-обратно на сервер. Другое потенциальное преимущество в том, что также можно инкапсулировать всё в одном файле все ваши CSS, JavaScript, HTML, и изображения, что делает его более портативным в других местах.

         Некоторые недостатки этого метода в том что ваше изображение не кешировано, и для изображений с большим размером кодированние url может стать очень долгим процессом.

# Использование кадров из видео

         function getMyVideo() {
           var canvas = document.getElementById('canvas');
           if (canvas.getContext) {
             var ctx = canvas.getContext('2d');

             return document.getElementById('myvideo');
           }
         }

# Рисование изображений

         drawImage(image, x, y)
             Draws the CanvasImageSource specified by the image parameter at the coordinates (x, y).

         SVG images must specify a width and height in the root <svg> element.

## Пример: Простой линейный график

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
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
         }

## Пример: Тайлинг изображения

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
           var img = new Image();
           img.onload = function(){
             for (var i=0;i<4;i++){
               for (var j=0;j<3;j++){
                 ctx.drawImage(img,j*50,i*38,50,38);
               }
             }
           };
           img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
         }

# Разрезание на куски

         drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

# Пример: Обрамление изображения

         <html>
          <body onload="draw();">
            <canvas id="canvas" width="150" height="150"></canvas>
            <div style="display:none;">
              <img id="source" src="https://mdn.mozillademos.org/files/5397/rhino.jpg" width="300" height="227">
              <img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150">
            </div>
          </body>
         </html>

         function draw() {
           var canvas = document.getElementById('canvas');
           var ctx = canvas.getContext('2d');

           // Draw slice
           ctx.drawImage(document.getElementById('source'),
                         33, 71, 104, 124, 21, 20, 87, 104);

           // Draw frame
           ctx.drawImage(document.getElementById('frame'),0,0);
         }

## Пример галереи искусства

         <html>
          <body onload="draw();">
              <table>
               <tr>
                 <td><img src="https://mdn.mozillademos.org/files/5399/gallery_1.jpg"></td>
                 <td><img src="https://mdn.mozillademos.org/files/5401/gallery_2.jpg"></td>
                 <td><img src="https://mdn.mozillademos.org/files/5403/gallery_3.jpg"></td>
                 <td><img src="https://mdn.mozillademos.org/files/5405/gallery_4.jpg"></td>
               </tr>
               <tr>
                 <td><img src="https://mdn.mozillademos.org/files/5407/gallery_5.jpg"></td>
                 <td><img src="https://mdn.mozillademos.org/files/5409/gallery_6.jpg"></td>
                 <td><img src="https://mdn.mozillademos.org/files/5411/gallery_7.jpg"></td>
                 <td><img src="https://mdn.mozillademos.org/files/5413/gallery_8.jpg"></td>
               </tr>
              </table>
              <img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150">
          </body>
         </html>

         И сюда какую-нибудь CSS для украшения:

         body {
           background: 0 -100px repeat-x url(https://mdn.mozillademos.org/files/5415/bg_gallery.png) #4F191A;
           margin: 10px;
         }

         img {
           display: none;
         }

         table {
           margin: 0 auto;
         }

         td {
           padding: 15px;
         }

         Tying it all together is the JavaScript to draw our framed images:

         function draw() {

           // Loop through all images
           for (var i=0;i<document.images.length;i++){

             // Don't add a canvas for the frame image
             if (document.images[i].getAttribute('id')!='frame'){

               // Create canvas element
               canvas = document.createElement('canvas');
               canvas.setAttribute('width',132);
               canvas.setAttribute('height',150);

               // Insert before the image
               document.images[i].parentNode.insertBefore(canvas,document.images[i]);

               ctx = canvas.getContext('2d');

               // Draw image to canvas
               ctx.drawImage(document.images[i],15,20);

               // Add frame
               ctx.drawImage(document.getElementById('frame'),0,0);
             }
           }
         }

# Saving and restoring state

         save()
             Saves the entire state of the canvas.
         restore()
             Restores the most recently saved canvas state.

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

           ctx.fillRect(0,0,150,150);   // Draw a rectangle with default settings
           ctx.save();                  // Save the default state

           ctx.fillStyle = '#09F';      // Make changes to the settings
           ctx.fillRect(15,15,120,120); // Draw a rectangle with new settings

           ctx.save();                  // Save the current state
           ctx.fillStyle = '#FFF';      // Make changes to the settings
           ctx.globalAlpha = 0.5;
           ctx.fillRect(30,30,90,90);   // Draw a rectangle with new settings

           ctx.restore();               // Restore previous state
           ctx.fillRect(45,45,60,60);   // Draw a rectangle with restored settings

           ctx.restore();               // Restore original state
           ctx.fillRect(60,60,30,30);   // Draw a rectangle with restored settings
         }

# Translating

         translate(x, y)
             Moves the canvas and its origin on the grid. x indicates the horizontal distance to move, and y indicates how far to move the grid vertically.

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
           for (var i=0;i<3;i++) {
             for (var j=0;j<3;j++) {
               ctx.save();
               ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';
               ctx.translate(10+j*50,10+i*50);
               ctx.fillRect(0,0,25,25);
               ctx.restore();
             }
           }
         }

# Rotating

         rotate(angle)
             Rotates the canvas clockwise around the current origin by the angle number of radians.

         Reminder: Angles are in radians, not degrees. To convert, we are using: radians = (Math.PI/180)*degrees.
         //*/

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

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
         }
         //*


# Scaling

         scale(x, y)
             Scales the canvas units by x horizontally and by y vertically. Both parameters are real numbers. Values that are smaller than 1.0 reduce the unit size and values above 1.0 increase the unit size. Values of 1.0 leave the units the same size.

# A scale example

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

           // draw a simple rectangle, but scale it.
           ctx.save();
           ctx.scale(10, 3);
           ctx.fillRect(1,10,10,10);
           ctx.restore();

           // mirror horizontally
           ctx.scale(-1, 1);
           ctx.font = "48px serif";
           ctx.fillText("MDN", -135, 120);
         }

# Transforms

         transform(a, b, c, d, e, f)
             Multiplies the current transformation matrix with the matrix described by its arguments. The transformation matrix is described by: [acebdf001]\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]

         The parameters of this function are:

         a (m11)
             Horizontal scaling.
         b (m12)
             Horizontal skewing.
         c (m21)
             Vertical skewing.
         d (m22)
             Vertical scaling.
         e (dx)
             Horizontal moving.
         f (dy)
             Vertical moving.
         setTransform(a, b, c, d, e, f)
             Resets the current transform to the identity matrix, and then invokes the transform() method with the same arguments. This basically undoes the current transformation, then sets the specified transform, all in one step.
         resetTransform()
             Resets the current transform to the identity matrix. This is the same as calling: ctx.setTransform(1, 0, 0, 1, 0, 0);

# Example for transform and setTransform

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

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
         }
# Clipping paths

         clip()
             Turns the path currently being built into the current clipping path.

## A clip example

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');
           ctx.fillRect(0,0,150,150);
           ctx.translate(75,75);

           // Create a circular clipping path
           ctx.beginPath();
           ctx.arc(0,0,60,0,Math.PI*2,true);
           ctx.clip();

           // draw background
           var lingrad = ctx.createLinearGradient(0,-75,0,75);
           lingrad.addColorStop(0, '#232256');
           lingrad.addColorStop(1, '#143778');

           ctx.fillStyle = lingrad;
           ctx.fillRect(-75,-75,150,150);

           // draw stars
           for (var j=1;j<50;j++){
             ctx.save();
             ctx.fillStyle = '#fff';
             ctx.translate(75-Math.floor(Math.random()*150),
                           75-Math.floor(Math.random()*150));
             drawStar(ctx,Math.floor(Math.random()*4)+2);
             ctx.restore();
           }

         }
         //*
         function drawStar(ctx,r){
           ctx.save();
           ctx.beginPath();
           ctx.moveTo(r,0);
           for (var i=0;i<9;i++){
             ctx.rotate(Math.PI/5);
             if(i%2 === 0) {
               ctx.lineTo((r/0.525731)*0.200811,0);
             } else {
               ctx.lineTo(r,0);
             }
           }
           ctx.closePath();
           ctx.fill();
           ctx.restore();
         }
         //*


# Basic animation steps

# Scheduled updates

         setInterval(function, delay)
             Starts repeatedly executing the function specified by function every delay milliseconds.
         setTimeout(function, delay)
             Executes the function specified by function in delay milliseconds.
         requestAnimationFrame(callback)
             Tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.

# An animated solar system

         var sun = new Image();
         var moon = new Image();
         var earth = new Image();
         function init(){
           sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
           moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
           earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
           window.requestAnimationFrame(draw);
         }

         function draw() {
           var ctx = document.getElementById('canvas').getContext('2d');

           ctx.globalCompositeOperation = 'destination-over';
           ctx.clearRect(0,0,300,300); // clear canvas

           ctx.fillStyle = 'rgba(0,0,0,0.4)';
           ctx.strokeStyle = 'rgba(0,153,255,0.4)';
           ctx.save();
           ctx.translate(150,150);

           // Earth
           var time = new Date();
           ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
           ctx.translate(105,0);
           ctx.fillRect(0,-12,50,24); // Shadow
           ctx.drawImage(earth,-12,-12);

           //* Moon
           ctx.save();
           ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
           //*
           ctx.translate(0,28.5);
           ctx.drawImage(moon,-3.5,-3.5);
           ctx.restore();

           ctx.restore();

           ctx.beginPath();
           ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
           ctx.stroke();

           ctx.drawImage(sun,0,0,300,300);

           window.requestAnimationFrame(draw);
         }

         init();

# An animated clock

         function clock(){
           var now = new Date();
           var ctx = document.getElementById('canvas').getContext('2d');
           ctx.save();
           ctx.clearRect(0,0,150,150);
           ctx.translate(75,75);
           ctx.scale(0.4,0.4);
           ctx.rotate(-Math.PI/2);
           ctx.strokeStyle = "black";
           ctx.fillStyle = "white";
           ctx.lineWidth = 8;
           ctx.lineCap = "round";

           // Hour marks
           ctx.save();
           for (var i=0;i<12;i++){
             ctx.beginPath();
             ctx.rotate(Math.PI/6);
             ctx.moveTo(100,0);
             ctx.lineTo(120,0);
             ctx.stroke();
           }
           ctx.restore();

           // Minute marks
           ctx.save();
           ctx.lineWidth = 5;
           for (i=0;i<60;i++){
             if (i%5!=0) {
               ctx.beginPath();
               ctx.moveTo(117,0);
               ctx.lineTo(120,0);
               ctx.stroke();
             }
             ctx.rotate(Math.PI/30);
           }
           ctx.restore();

           var sec = now.getSeconds();
           var min = now.getMinutes();
           var hr  = now.getHours();
           hr = hr>=12 ? hr-12 : hr;

           ctx.fillStyle = "black";

           // write Hours
           ctx.save();
           ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec ) //*
           ctx.lineWidth = 14;
           ctx.beginPath();
           ctx.moveTo(-20,0);
           ctx.lineTo(80,0);
           ctx.stroke();
           ctx.restore();

           // write Minutes
           ctx.save();
           ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )//*
           ctx.lineWidth = 10;
           ctx.beginPath();
           ctx.moveTo(-28,0);
           ctx.lineTo(112,0);
           ctx.stroke();
           ctx.restore();

           // Write seconds
           ctx.save();
           ctx.rotate(sec * Math.PI/30);
           ctx.strokeStyle = "#D40000";
           ctx.fillStyle = "#D40000";
           ctx.lineWidth = 6;
           ctx.beginPath();
           ctx.moveTo(-30,0);
           ctx.lineTo(83,0);
           ctx.stroke();
           ctx.beginPath();
           ctx.arc(0,0,10,0,Math.PI*2,true);
           ctx.fill();
           ctx.beginPath();
           ctx.arc(95,0,10,0,Math.PI*2,true);
           ctx.stroke();
           ctx.fillStyle = "rgba(0,0,0,0)";
           ctx.arc(0,0,3,0,Math.PI*2,true);
           ctx.fill();
           ctx.restore();

           ctx.beginPath();
           ctx.lineWidth = 14;
           ctx.strokeStyle = '#325FA2';
           ctx.arc(0,0,142,0,Math.PI*2,true);
           ctx.stroke();

           ctx.restore();

           window.requestAnimationFrame(clock);
         }

         window.requestAnimationFrame(clock);

# A looping panorama

         var img = new Image();

         // User Variables - customize these to change the image being scrolled, its
         // direction, and the speed.

         img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
         var CanvasXSize = 800;
         var CanvasYSize = 200;
         var speed = 30; //lower is faster
         var scale = 1.05;
         var y = -4.5; //vertical offset

         // Main program

         var dx = 0.75;
         var imgW;
         var imgH;
         var x = 0;
         var clearX;
         var clearY;
         var ctx;

         img.onload = function() {
             imgW = img.width*scale;
             imgH = img.height*scale;
             if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
             if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
             else { clearX = CanvasXSize; }
             if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
             else { clearY = CanvasYSize; }
             //Get Canvas Element
             ctx = document.getElementById('canvas').getContext('2d');
             //Set Refresh Rate
             return setInterval(draw, speed);
         }

         function draw() {
             //Clear Canvas
             ctx.clearRect(0,0,clearX,clearY);
             //If image is <= Canvas Size
             if (imgW <= CanvasXSize) {
                 //reset, start from beginning
                 if (x > (CanvasXSize)) { x = 0; }
                 //draw aditional image
                 if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
             }
             //If image is > Canvas Size
             else {
                 //reset, start from beginning
                 if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
                 //draw aditional image
                 if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
             }
             //draw image
             ctx.drawImage(img,x,y,imgW,imgH);
             //amount to move
             x += dx;
         }

         <canvas id="canvas" width="800" height="200"></canvas>

# video         
         <!DOCTYPE html><html class=''>
         <head>

             <meta charset='UTF-8'>

         <script src="http://s.codepen.io/assets/libs/modernizr.js" type="text/javascript"></script>

         <style>
         #mycanvas {
             position: absolute;
             margin: 0 auto;
             top: 0;
             bottom: 0;
             left: 0;
             right: 0;
             width: 75%;
             height: 75%;
             -webkit-filter: grayscale(1);
         }

         #video1 {
             position: absolute;
             left: 0;

         }</style>

         </head>
         <body>
         <canvas id='mycanvas'></canvas>
         <video id='video1' controls='controls' width='320'>
         	<source src="video.mp4" type="video/mp4" />
         	<source src="video.webm" type="video/webm" />
         	<source
         		src="video.ogv" type="video/ogg" /></video>
         <script>

         document.addEventListener('DOMContentLoaded', function () {
             var v = document.getElementById('video1');
             var canvas = document.getElementById('mycanvas');
             var context = canvas.getContext('2d');
             var cw = 640;
             var ch = 480;
             canvas.width = cw;
             canvas.height = ch;
             v.addEventListener('play', function () {
                 draw(this, context, cw, ch);
             }, false);
         }, false);
         function draw(v, c, w, h) {
             if (v.paused || v.ended)
                 return false;
             c.drawImage(v, 0, 0, w, h);
             setTimeout(draw, 20, v, c, w, h);
         }

         </script>
         </body></html>
