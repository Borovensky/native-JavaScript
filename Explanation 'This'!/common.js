function my(){
	this.style.color = 'red';
}

var h1 = document.getElementsByTagName('h1');
// h1[0].onclick = my; // присвоение свойства h1;

h1[0].onclick = function(){
	this.style.color = 'green';
}

// h1[0].addEventListener('click', my, false);

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

// nextSibling обращение к 'брату '
function toggleMenu(){
	if(this.nextSibling.style.display == 'none'){
		this.nextSibling.style.display = 'block';
	}else{
		this.nextSibling.style.display = 'none';
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
		a.setAttribute('href', '#');
		var ul1 = document.createElement('ul');
		var li1, a1;
		for(var j = 0; j < menu2[i][1].length; j++){
			li1 = document.createElement('li');
			a1 = document.createElement('a');
			a.addEventListener('click', toggleMenu, false);
			a1.appendChild(document.createTextNode(menu2[i][1][j][0]));
			a1.setAttribute('href', menu2[i][1][j][1]);
			li1.appendChild(a1);
			ul1.appendChild(li1);
			ul1.style.display = 'none';
		}
		li.appendChild(a);
		li.appendChild(ul1);
	}
	ul.appendChild(li);

}
document.getElementById('menu2').appendChild(ul);