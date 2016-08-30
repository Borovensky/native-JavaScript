// var ul;
// var li_items;
// var li_number;
// var image_number = 0;
// var slider_width = 0;
// var image_width;
// var current = 0;

// function init(){

//     ul = document.getElementById('image_slider');
//     li_items = ul.children;
//     li_number = li_items.length;

//     console.log('li_number= ',li_number);

//     for (var i = 0; i < li_number; i++){
//             image_width = li_items[i].childNodes[0].clientWidth;
//             slider_width += image_width;
//             image_number++;
//     }

//     ul.style.width = parseInt(slider_width) + 'px';

//     console.log('image_width=',image_width,'slider_width=',slider_width,'image_number=',image_number);
// }

// window.onload = init;


// clientWidth - потому что мы не присваеваем ширину в css
// =======================================================

// function move(elem) {
//   var left = 0
//   function frame() {
//     left++  // update parameters
//     elem.style.left = left + 'px' // show frame
//     if (left == 500)  // check finish condition
//       clearInterval(id)
//   }
//   var id = setInterval(frame, 10) // draw every 10ms
// }


// ======================================================


// function move(element, delta, duration) {
//   var to = 500
//   // типичный пример объекта ООП
//   animate({
//     delay: 10,
//     duration: duration || 1000, // 1 sec by default
//     delta:function(p){return Math.max(0, -1 + 2 * p)},
//     step: function(delta) {
//       element.style.left = to*delta + "px"
//     }
//   })
// }
// function animate(opts) {
//   var start = new Date
//   var id = setInterval(function() {
//     var timePassed = new Date - start // вичесления дельты для управления движением слайдера
//     var progress = timePassed / opts.duration
//     if (progress > 1) progress = 1
//     var delta = opts.delta(progress)
//     opts.step(delta)
//     if (progress == 1) {
//       clearInterval(id)
//     }
//   }, opts.delay || 10)
// }

//=========================================================

var ul;
var li_items;
var li_number;
var image_number = 0;
var slider_width = 0;
var image_width;
var current = 0;

function init(){

    ul = document.getElementById('image_slider');
    li_items = ul.children;
    li_number = li_items.length;

    for (var i = 0; i < li_number; i++){
         image_width = li_items[i].childNodes[0].clientWidth;
         slider_width += image_width;
         image_number++;
    }

    ul.style.width = parseInt(slider_width) + 'px';

    slider(ul);
    // управление кнопками
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    prev.onclick = function(){
    	onclickPrev();
    }
    next.onclick = function(){
    	onclickNext();
    }
}

// управление кнопками
function onclickPrev(){
	if(current == 0){
		slideTo(image_number - 1);
	}else{
		slideTo(current - 1);
	}
}
function onclickNext(){
	if(current == image_number){
		slideTo(0);
	}else{
		slideTo(current + 1);
	}
}


var currentPosition = 0;

function slideTo(toGo){
	var derection;
	var numOfImage = Math.abs(toGo - current);
	direction = current > toGo ? 1 : -1;
	currentPosition = -1 * current * image_width;
	var opts = {
		duration: 1000,
		delta: function(p){
			return p;
		},
		step: function(delta){
			ul.style.left = parseInt(currentPosition + direction * delta * image_width * numOfImage) + 'px';
		},
		callback: function(){
			current = toGo;
		}
	}
	animate(opts);
}


function slider(){
        animate({
            delay:17,
            duration: 3000,
            delta:function(p){return Math.max(0, -1 + 2 * p)},
            step:function(delta){
                    ul.style.left = '-' + parseInt(current * image_width + delta * image_width) + 'px';
                },
            callback:function(){
            	current++;
            	if(current < li_number - 1){
            		slider();
            	}else{
            		var left = (li_number - 1)*image_width;
            		setTimeout(function(){goBack(left)},2000);
            		setTimeout(slider, 4000); 
            	}
            }
        });
}
/*=============================*/
function goBack(left_limits){
    current = 0;
    setInterval(function(){
        if(left_limits >= 0){
            ul.style.left = '-' + parseInt(left_limits) + 'px';
            left_limits -= image_width/10;
        }
    }, 17);
}
/*===========================*/
function animate(opts){
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed/opts.duration
        // console.log('progress= ',progress);
        if(progress > 1){
            progress = 1;
        }
        var delta = opts.delta(progress);
        opts.step(delta);
        // console.log('delta= ',delta);
        if (progress == 1){
            clearInterval(id);
            opts.callback();
        }
    }, opts.dalay || 17);
}

// Пагинаторы для карусели. (незаконченная функция)
function generetePage(imageNumber){
	var pageNumder;
	var pageDiv = document.getElementById('page');
	for(i = 0; i < imageNumber; i++){
		var li = document.createElement();
	},
}
// Почитать про "фабричные функции";


window.onload = init;