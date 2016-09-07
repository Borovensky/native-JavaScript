var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');
var formidable = require('formidable');

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


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Ajax', project: 'Janus Site' });
});

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

router.get('/books', function(req, res, next) {
    var text = fs.readFileSync('./public/files/books.xml');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(text);
});

router.get('/catalog', function(req, res, next) {
    var text = JSON.stringify(fs.readFileSync('./public/files/bookbase.json',  'utf8'));
    res.send(text);
});

router.post('/calc', function(req, res, next) {
    //js functions running only in Node.JS
    var calc = function(a,b){
      return  Number(a)+Number(b);;
  };

    console.log(req.body['x']);
    console.log(req.body['y']);

      var result = calc(req.body['x'],req.body['y']);
      //fill in the result and form values
      result = result.toString();
      //respond
      res.send(result);

});

module.exports = router;
