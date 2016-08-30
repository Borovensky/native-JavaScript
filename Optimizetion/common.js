var menu = [
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
		this.classList.add('current');
	}else{
		this.nextSibling.style.display = 'none';
		this.classList.remove('current');
	}
};

var createItem = function(a, menu){
	var cloneA = a.cloneNode();
	cloneA.appendChild(document.createTextNode(menu[0]));
	if(menu[1].length  > 1){
		cloneA.setAttribute('href', '#');
		cloneA.addEventListener('click', toggleMenu, false);
	}else{
		cloneA.setAttribute('href', menu[1]);
	}
	return cloneA;
};

var li, ul, cloneli, a;

ul = document.createElement('ul');
li = document.createElement('li');
a = document.createElement('a');

for(var i = 0; i < menu.length; i++){
	cloneli = document.createElement('li');
	cloneli.appendChild(createItem(a,menu[i]));
	if(menu[i][1].length == 1){
	}else{
		var ul1 = document.createElement('ul');
		var li1, a1;
		for(var j = 0; j < menu[i][1].length; j++){
			cloneli1 = document.createElement('li');
			cloneli1.appendChild(createItem(a,menu[i][1][j]));
			ul1.appendChild(cloneli1);
			ul1.style.display = 'none';
		}
		cloneli.appendChild(ul1);
	}
	ul.appendChild(cloneli);
};
document.getElementById('menu').appendChild(ul);