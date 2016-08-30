// var list = [1, 2, 3];

// console.log(list[list.length - 2]);

// for (var i = 0; i < list.length; i++){
// 	console.log(list[i]);
// }
//====================================================
// var list = document.getElementsByTagName('li');

// for (var i = 0; i < list.length; i++){
// 	console.log(list[i].innerHTML);
// }
// ===================================================
var menu = [
	['Main', 'index.thml'],
	['Aboute', 'aboute.thml'],
	['Catalog', ['phone', 'phone.html'],
					['computers', 'computers.html'],
					['WTF', 'WTF.html']],
	['Contact', 'contact.thml']];

var li, ul, content, a;

ul = document.createElement('ul');

for(var i = 0; i < menu.length; i++){
	li = document.createElement('li');
	ul.appendChild(li);

	content = document.createTextNode(menu[i][0]);
	li.appendChild(content);
	ul.appendChild(li);

	a = document.createElement('a');
	a.appendChild(content);
	a.setAttribute('href', menu[i][1]);
	li.appendChild(a);
}
document.getElementById('menu').appendChild(ul);

// =======================================================

var menu2 = [
					['Main', ['index.thml']],
					['Aboute', ['aboute.thml']],
					['Catalog', [
								['phone', 'phone.html'],
								['computers', 'computers.html'],
								['WTF', 'WTF.html']
								]
							],
					['Contact', ['contact.thml']]
				];

function toggleMenu(id){
	if(id.style.display == 'none'){
		id.style.display = 'block';
	}else{
		id.style.display = 'none';
	}
}

var li, ul, content, a;

ul = document.createElement('ul');

for(var i = 0; i < menu2.length; i++){
	li = document.createElement('li');
	// ul.appendChild(li);

	content = document.createTextNode(menu2[i][0]);
	// li.appendChild(content);

	a = document.createElement('a');
	a.appendChild(content);
	if(menu2[i][1].length == 1){	
		a.setAttribute('href', menu2[i][1]);
		li.appendChild(a);
	}else{
		var idm = 'id' + i;
		a.setAttribute('href', '#');
		a.setAttribute('onclick', 'toggleMenu(' + idm + ');');
		var ul1 = document.createElement('ul');
		var li1, a1;
		for(var j = 0; j < menu2[i][1].length; j++){
			li1 = document.createElement('li');
			a1 = document.createElement('a');
			a1.appendChild(document.createTextNode(menu2[i][1][j][0]));
			a1.setAttribute('href', menu2[i][1][j][1]);
			li1.appendChild(a1);
			ul1.appendChild(li1);
			ul1.setAttribute('id', idm);
			ul1.style.display = 'none';
		}
		li.appendChild(a);
		li.appendChild(ul1);
	}
	ul.appendChild(li);

}
document.getElementById('menu2').appendChild(ul);