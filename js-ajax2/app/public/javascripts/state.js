function print_console(text){
  document.getElementById("console").innerHTML += text;
}

function startAjax(){
  var request;

  if(window.XMLHttpRequest){
      request = new XMLHttpRequest();
  } else if(window.ActiveXObject){
      request = new ActiveXObject("Microsoft.XMLHTTP");
  } else {
      return;
  }

  document.getElementById("start").addEventListener('click',function(){

  request.onreadystatechange = function(){
    switch (request.readyState) {
      case 1: print_console("<br/><em>1: вызван open...</em>"); break
      case 2: print_console("<br/><em>2: получены заголовки...</em>"); break
      case 3: print_console("<br/><em>3: загружается тело..</em>"); break
      case 4:{
       if(request.status==200){
            print_console("<br/><em>4: запрос завершён</em>");
            document.getElementById("result").innerHTML = "<b>"+request.responseText+"</b>";
           }else if(request.status==404){
            console.log("HTTP Status: 404 : NOT FOUND!");
           }
            else console.log("текущее состояние запроса: "+ request.status);

      break
      }
    }
    }
    request.open("GET",'#',true);
    request.send();
    });

}

window.onload = startAjax();
