# window.requestAnimationFrame
https://developer.mozilla.org/ru/docs/DOM/window.requestAnimationFrame

рассмотрим типовую функцию, которую мы используем, когда реализуем анимацию:

Javascript
var step = function(){
  // описываем один шаг
}

setInterval(step, 100); // повторяем шаг через наждые 0.1с
или так:

Javascript
var step = function(){
  setTimeout(step, 100); // циклически выполняем шаги один за одним, вызывая функцию саму из себя
  // описываем один шаг тут
}
step(); // выполняем шаг в первый раз

setInterval и частота кадров

Плавность анимации зависит от частоты кадров. Частота кадров измеряется в “кадрах в секунду” (FPS – frame per second). Фильмы и видео обычно делают с 24fps – 30fps. Чем больше это число, тем более гладкой кажется анимация. С другой стороны – чем больше fps, тем больше требуется ресурсов процессора, что может привести к подвисанию и пропуску кадров. Поскольку большинство экранов имеет частоту обновления 60 Гц – fps к которому надо стремится равен 60-ти.

идеальный интервал 1000ms / 60(fps) = 16.7ms

Javascript
setInterval(step, 17);

SetTimeout не принимает во внимание то, что еще происходит в браузере. Страница может, например, находится в неактивной вкладке браузера. При этом она будет использовать ресурсы процессора не взирая на это.

Chrome делает setInterval и setTimeout равным 1fps в скрытых вкладках..

SetTimeout требует перерисовки страницы не в то же время, когда это делает ваш компьютер. Это означает, что ваш браузер должен синхронизировать вашу анимацию с обновлением всего экрана, и если ее частота не синхронизирована с обновлением всего экрана, это может потребовать больше вычислительной мощности.

# requestAnimationFrame

Чтобы преодолеть эти проблемы, Mozilla (создатели Firefox) предложил функцию requestAnimationFrame, которая впоследствии была принята и усовершенствована командой WebKit (Chrome и Safari). Она обеспечивает встроеный API для запуска любых типов анимации в браузере (DOM элементов, canvas, WebGL и др.)

        function step() {
          requestAnimationFrame(step);
          // описываем один шаганимации тут
        }
        step();

При желании вы можете передать еще один параметр – анимируемый элемент:             
    requestAnimationFrame(step, element);

Если вы используете requestAnimationFrame, все ваши анимации будут гладкими и красивыми, синхронизированными с вашим графическим процессором (GPU) и съедающими гораздо меньше ресурсов центрального процессора (CPU).

Это совсем новый API и.. для Chrome и Safari – это webkitRequestAnimationFrame. Соответственно в Firefox это mozRequestAnimationFrame. Microsoft (Internet Explorer 10) будет поддерживать msRequestAnimationFrame.

## polyfill:

        (function() {
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                           || window[vendors[x]+'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function(callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                      timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
        }());

Вставляем в начало кода и requestAnimationFrame работает как родной. В браузерах, где он вообще не поддерживается, будет изпользоваться setInterval

# How to make a simple HTML5 Canvas game

        <!DOCTYPE html>
        <html lang="en">
        	<head>
        		<meta charset="utf-8">
        		<title>Simple Canvas Game</title>
        	</head>
        	<body>
        		<script src="js/game.js"></script>
        	</body>
        </html>

        // Create the canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = 512;
        canvas.height = 480;
        document.body.appendChild(canvas);

        // Background image
        var bgReady = false;
        var bgImage = new Image();
        bgImage.onload = function () {
        	bgReady = true;
        };
        bgImage.src = "images/background.png";

        // Hero image
        var heroReady = false;
        var heroImage = new Image();
        heroImage.onload = function () {
        	heroReady = true;
        };
        heroImage.src = "images/hero.png";

        // Monster image
        var monsterReady = false;
        var monsterImage = new Image();
        monsterImage.onload = function () {
        	monsterReady = true;
        };
        monsterImage.src = "images/monster.png";

        // Game objects
        var hero = {
        	speed: 256 // movement in pixels per second
        };
        var monster = {};
        var monstersCaught = 0;

        // Handle keyboard controls
        var keysDown = {};

        addEventListener("keydown", function (e) {
        	keysDown[e.keyCode] = true;
        }, false);

        addEventListener("keyup", function (e) {
        	delete keysDown[e.keyCode];
        }, false);

        // Reset the game when the player catches a monster
        var reset = function () {
        	hero.x = canvas.width / 2;
        	hero.y = canvas.height / 2;

        	// Throw the monster somewhere on the screen randomly
        	monster.x = 32 + (Math.random() * (canvas.width - 64));
        	monster.y = 32 + (Math.random() * (canvas.height - 64));
        };

        // Update game objects
        var update = function (modifier) {
        	if (38 in keysDown) { // Player holding up
        		hero.y -= hero.speed * modifier;
        	}
        	if (40 in keysDown) { // Player holding down
        		hero.y += hero.speed * modifier;
        	}
        	if (37 in keysDown) { // Player holding left
        		hero.x -= hero.speed * modifier;
        	}
        	if (39 in keysDown) { // Player holding right
        		hero.x += hero.speed * modifier;
        	}

        	// Are they touching?
        	if (
        		hero.x <= (monster.x + 32)
        		&& monster.x <= (hero.x + 32)
        		&& hero.y <= (monster.y + 32)
        		&& monster.y <= (hero.y + 32)
        	) {
        		++monstersCaught;
        		reset();
        	}
        };

        // Draw everything
        var render = function () {
        	if (bgReady) {
        		ctx.drawImage(bgImage, 0, 0);
        	}

        	if (heroReady) {
        		ctx.drawImage(heroImage, hero.x, hero.y);
        	}

        	if (monsterReady) {
        		ctx.drawImage(monsterImage, monster.x, monster.y);
        	}

        	// Score
        	ctx.fillStyle = "rgb(250, 250, 250)";
        	ctx.font = "24px Helvetica";
        	ctx.textAlign = "left";
        	ctx.textBaseline = "top";
        	ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
        };

        // The main game loop
        var main = function () {
        	var now = Date.now();
        	var delta = now - then;

        	update(delta / 1000);
        	render();

        	then = now;

        	// Request to do this again ASAP
        	requestAnimationFrame(main);
        };

        // Cross-browser support for requestAnimationFrame
        var w = window;
        requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

        // Let's play this game!
        var then = Date.now();
        reset();
        main();
