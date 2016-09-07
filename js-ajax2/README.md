# Ajax 02

Создание AJAX запросов с помощью jQuery
============================
AJAX запрос созданный с помощью jQuery занимает всего одну строчку кода, и уже оптимизирован для использования и с новыми и старыми версиями браузеров.

Синтаксис:

    $("селектор").load(url,данные,функция)

- селектор выбирает элемент, в котором будет отображен результат AJAX запроса.
- url адрес, на который будет отправлен AJAX запрос.
- данные является необязательным параметром. Данные, которые будут переданы вместе с запросом.
- функция является необязательным параметром. Функция, которая будет вызвана после выполнения запроса.

Пример
        $(document).ready(function(){

           $("#but1").click(function(){
              $("#result").load("/load");
           })
           $("#but2").click(function(){
              $("#result").load("/loadhtml");
           })
           $("#but3").click(function(){
              $("#result").load("/loadimg");
           })
        });
index.js
=====
    router.get('/load', function(req, res, next) {
      var text = fs.readFileSync('./public/files/test.txt');
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(text);
    });
    router.get('/loadhtml', function(req, res, next) {
      var text = fs.readFileSync('./public/files/test.html');
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(text);
    });
    router.get('/loadimg', function(req, res, next) {
        var text = "<img src='images/ajax.jpg'>";
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(text);
    });

Низкоуровневые AJAX запросы
====================
Высокоуровневые методы создания AJAX запросов подходят для создания большей части запросов, но иногда их функциональности становится недостаточно.

Низкоуровневые AJAX запросы предоставляют более широкую функциональность, но более сложны в использовании.

Синтаксис аналогичного низкоуровневого AJAX запроса:

Пример
    $.ajax({
       url:"/add",
       data:"x=4&y=5",
       success:function(result){
          $("#par1").html(result)
       }
    });

В примере мы пересылаем скрипту calc переменную x и переменную y, он в свою очередь принимает эти переменные, производит их сложение и отправляет результат обратно.

Пример
        <p>
            <input id="v1"/>   <input id="v2"/><a class="btn btn-lg btn-primary" id="but4" role="button">Calculate &raquo;</a>
        </p>

        <div id="sum">
        </div>
        <script>
        $(document).ready(function(){

           $("#but4").click(function(){
               var x=document.getElementById('v1').value;
               var y=document.getElementById('v2').value;
               var chunk = "x="+x+"&y="+y;
               $.ajax({
                      type: "POST",
                      url: "/calc",
                      data: chunk,
                      success: function(data) {
                        $("#sum").append(data);
                      },
                      error: function(error, txtStatus) {
                        console.log(txtStatus);
                        console.log('error');
                      }
                    });
           })
        });
        </script>

        router.post('/calc', function(req, res, next) {
            //js functions running only in Node.JS
            var calc = function(a,b){
              return  Number(a)+Number(b);;
          };
            console.log(req.body['x']);
            console.log(req.body['y']);

              var result = calc(req.body['x'],req.body['y']);
              //fill in the result values
              result = result.toString();
              //respond
              res.send(result);
        });

Работа с XML файлами
===============
С помощью AJAX Вы можете удобно извлекать информацию из XML файлов.

        <h4>Парсим XML средствами jQuery</h4>
        <a class="btn btn-lg btn-primary" id="but5" role="button">Парсим XML &raquo;</a>

        <div class="main">
            <div align="center" class="loader"><img src="/images/loader.gif" id="preload" width="16" height="11" align="absmiddle"/></div>
        </div>
        <script>
        $(document).ready(function () {
            $("#but5").click(function(){
                $.ajax({
                    type: "GET",
                    url: "/books",
                    dataType: "xml",
                    success: xmlParser
                });
            });
        });

        function xmlParser(xml) {
            $('#preload').fadeOut();
            $(xml).find("Book").each(function () {
                $(".main").append('<div class="book"><div class="title">' + $(this).find("Title").text() + '</div><div class="description">' + $(this).find("Description").text() + '</div><div class="date">Published ' + $(this).find("Date").text() + '</div></div>');
                $(".book").fadeIn(1000);
            });
        }
        </script>
        </div>


books.xml
=======

        <?xml version="1.0" encoding="utf-8" ?>
        <RecentBooks>
          <Book>
            <Title>My Cool Book Title</Title>
            <Description>The my cool book is possibly the best cool book in that any developer could use to be a great web designer.</Description>
            <Date>12/1/2016</Date>
          </Book>
          <Book>
            <Title>Another PHP book</Title>
            <Description>Learn everything about PHP with 'Another PHP book,' your ultimate guide to the ins and outs of PHP.</Description>
            <Date>4/1/2016</Date>
          </Book>
          <Book>
            <Title>jQuery Techniques</Title>
            <Description>jQuery techniques runs you through real life examples of jQuery from beginner to expert</Description>
            <Date>6/2/2016</Date>
          </Book>
          <Book>
            <Title>MySQL Database Book</Title>
            <Description>Brush up your knowledge with the best MySQL database book on the market.</Description>
            <Date>14/2/2016</Date>
          </Book>
        </RecentBooks>


        router.get('/books', function(req, res, next) {
            var text = fs.readFileSync('./public/files/books.xml');
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(text);
        });

Работа с JSON файлами
================
Пример позволяет просматривать книги имеющиеся в каталоге книжного магазина.

        <p>
            <a class="btn btn-lg btn-primary" id="but6" role="button">книги в каталоге книжного магазина &raquo;</a>
        </p>

        <div id="books">
        </div>
        <script>
        $(document).ready(function(){
           $("#but6").click(function(){
               $.ajax({
                      url: "/catalog",
                      method: 'GET',

                      dataType: "json",
                      success: function(data) {
                          data = JSON.parse(data);
                           $.each( data, function( i, item ) {
                           $("#books").append('<div class="books"><div class="title">' + item.title + '</div><div class="description">Author ' + item.author + '</div><div class="date">Cost ' + item.cost+ '</div><div class="date">Quantity '+ item.quantity + '</div></div>').fadeIn(1000);
                        });
                      },
                      error: function(error, txtStatus) {
                        console.log(txtStatus);
                        console.log('error');
                      }
                    });
           })
        });
        </script>

        router.get('/catalog', function(req, res, next) {
            var text = JSON.stringify(fs.readFileSync('./public/files/bookbase.json',  'utf8'));
            res.send(text);
        });

        [{"title":"Гарри Поттер и философский камень","author":"Джоан Ролинг","cost":500,"quantity":15},{"title":"Дракула ","author":"Брэм Стокер","cost":430,"quantity":5},{"title":"Преступление и наказание","author":"Федор Достоевский", "cost":400, "quantity":10}, {"title":"Страх и отвращение в Лас-Вегасе ", "author":"Хантер Томпсон", "cost":340,"quantity":12},{"title":"Кафка на пляже ","author":"Харуки Мураками","cost":340,"quantity":16},{"title":"Охота на овец ","author":"Харуки Мураками","cost":345,"quantity":14},{"title":"Ромео и Джульета ","author":"Уильям Шекспир","cost":330,"quantity":5},{"title":"Война и мир. В двух томах. ","author":"Лев Толстой","cost":480,"quantity":3},{"title":"Властелин колец. Трилогия","author":"Джон Толкин","cost":500,"quantity":8},{"title":"Хоббит","author":"Джон Толкин","cost":460,"quantity":6},{"title":"Мастер и Маргарита ","author":"Михаил Булгаков","cost":300,"quantity":5},{"title":"Русские народные сказки ", "author":"Неизвестен","cost":600,"quantity":7},{"title":"Руслан и Людмила ", "author":"Александр Пушкин","cost":320,"quantity":6}]

File Uploader
========
        <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="panel panel-default">
                  <div class="panel-body">
                    <span class="glyphicon glyphicon-cloud-upload"></span>
                    <h2>File Uploader</h2>
                    <h4><%= title %></h4>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar"></div>
                    </div>
                    <button class="btn btn-lg upload-btn" type="button">Upload File</button>
                  </div>
                </div>
              </div>
            </div>

        </div> <!-- /container -->
        <input id="upload-input" type="file" name="uploads[]" multiple="multiple"></br>
        <script src="javascripts/upload.js"></script>

javascripts/upload.js
=============
        $('.upload-btn').on('click', function (){
            $('#upload-input').click();
            $('.progress-bar').text('0%');
            $('.progress-bar').width('0%');
        });

        $('#upload-input').on('change', function(){

          var files = $(this).get(0).files;

          if (files.length > 0){
            // create a FormData object which will be sent as the data payload in the
            // AJAX request
            var formData = new FormData();

            // loop through all the selected files and add them to the formData object
            for (var i = 0; i < files.length; i++) {
              var file = files[i];

              // add the files to formData object for the data payload
              formData.append('uploads[]', file, file.name);
            }

            $.ajax({
              url: '/upload',
              type: 'POST',
              data: formData,
              processData: false,
              contentType: false,
              success: function(data){
                  console.log('upload successful!\n' + data);
              },
              xhr: function() {
                // create an XMLHttpRequest
                var xhr = new XMLHttpRequest();

                // listen to the 'progress' event
                xhr.upload.addEventListener('progress', function(evt) {

                  if (evt.lengthComputable) {
                    // calculate the percentage of upload completed
                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100);

                    // update the Bootstrap progress bar with the new percentage
                    $('.progress-bar').text(percentComplete + '%');
                    $('.progress-bar').width(percentComplete + '%');

                    // once the upload reaches 100%, set the progress bar text to done
                    if (percentComplete === 100) {
                      $('.progress-bar').html('Done');
                    }
                  }
                }, false);
                return xhr;
              }
            });
          }
        });

        npm install formidable
        app4@0.0.0 /home/janus/github/danco-js/app
        └── formidable@1.0.17

routes/index.js
==========
        var formidable = require('formidable');

        router.get('/upload', function(req, res, next) {
          // console.log(path.join(__dirname, '/../uploads'));
          res.render('upload', { title: 'Отправка файла с помощью Ajax', project: 'Janus Site' });
        });
        router.post('/upload', function(req, res){

          // create an incoming form object
          var form = new formidable.IncomingForm();

          // specify that we want to allow the user to upload multiple files in a single request
          form.multiples = true;

          // store all uploads in the /uploads directory
          form.uploadDir = path.join(__dirname, '/../public/uploads');

          // every time a file has been uploaded successfully,
          // rename it to it's orignal name
          form.on('file', function(field, file) {
            fs.rename(file.path, path.join(form.uploadDir, file.name));
          });

          // log any errors that occur
          form.on('error', function(err) {
            console.log('An error has occured: \n' + err);
          });

          // once all the files have been uploaded, send a response to the client
          form.on('end', function() {
            res.end('success');
          });

          // parse the incoming request containing the form data
          form.parse(req);

        });

gallery
=====

        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-body">
                  <div id="photos">
                  </div>
              </div>
            </div>
          </div>
                    <script>
                    $(document).ready(function(){
                           $.ajax({
                                  url: "/gallery",
                                  method: 'GET',
                                  dataType: "json",
                                  success: function(data) {
                                      //data = JSON.parse(data);
                                      console.log(data);
                                       $.each( data, function( i, item ) {
                                       $("#photos").append('<div class="books"><div class="title"><img src=/uploads/' + item.name + ' /></div></div>').fadeIn(1000);
                                    });
                                  },
                                  error: function(error, txtStatus) {
                                    console.log(txtStatus);
                                    console.log('error');
                                  }
                                });
                    });
                    </script>
                </div>
        </div> <!-- /container -->

routes/index.js
==========
        https://www.npmjs.com/package/directory-tree

        var diretoryTreeToObj = function(dir, done) {
            var results = [];

            fs.readdir(dir, function(err, list) {
                if (err)
                    return done(err);

                var pending = list.length;

                if (!pending)
                    return done(null, {name: path.basename(dir), type: 'folder', children: results});

                list.forEach(function(file) {
                    file = path.resolve(dir, file);
                    fs.stat(file, function(err, stat) {
                        if (stat && stat.isDirectory()) {
                            diretoryTreeToObj(file, function(err, res) {
                                results.push({
                                    name: path.basename(file),
                                    type: 'folder',
                                    children: res
                                });
                                if (!--pending)
                                    done(null, results);
                            });
                        }
                        else {
                            results.push({
                                type: 'file',
                                name: path.basename(file)
                            });
                            if (!--pending)
                                done(null, results);
                        }
                    });
                });
            });
        };

        router.get('/photogallery', function(req, res, next) {

        res.render('gallery', { title: 'Photo Gallery Express Ajax', project: 'Janus Site' });
        });

        router.get('/gallery', function(req, res, next) {

        var dirTree = path.join(__dirname, '/../public/uploads');

        diretoryTreeToObj(dirTree, function(err, result){
            if(err)
                console.error(err);

            //console.log(JSON.stringify(result));
            res.send(JSON.stringify(result));
        });

        });
