var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articals = {
    'articleOne' :{
    title : 'Artical One | Ubendren',
    heading :'Artical One',
    date : 'Aug 6, 2017',
    content :`
     <p>
            This is the content for my first artical.This is the content for my first artical.This is the content for my first artical.
            This is the content for my first artical.This is the content for my first artical.This is the content for my first artical.
            This is the content for my first artical.
    </p>     
    `
},
    'articleTwo' :{
        title : 'Artical Two | Ubendren',
    heading :'Artical Two',
    date : 'Aug 6, 2017',
    content :`
     <p>
            This is the content for my second artical.This is the content for my second artical.This is the content for my second artical.
            This is the content for my second artical.This is the content for my second artical.This is the content for my second artical.
            This is the content for my second artical.
    </p>     
    `
    },
    'articleThree' : {title : 'Artical Three | Ubendren',
    heading :'Artical Three',
    date : 'Aug 6, 2017',
    content :`
     <p>
            This is the content for my Third artical.This is the content for my Third artical.This is the content for my Third artical.
            This is the content for my Third artical.This is the content for my Third artical.This is the content for my Third artical.
            This is the content for my Third artical.
    </p>     
    `}
};
function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `'
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content ="width=device-width , initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
            <a href="/" >Home</a>
            <hr/>
            <div>
                ${date}
            </div>
            <h1>Personal</h1>
            <p>
                This is my personal information about me.
            </p>
            <h1>Professional</h1>
            <p>
                This is my list of experiences :
            </p>
            <ol>
                <li>Company A: Worked as someone seriously.</li>
                <li>Company B: Worked without seriousnous.</li>
            </ol>
                ${content}
        </div>
    </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/artical-one', function (req, res){
    res.send("This is artical-one");
});

var counter=0;
app.get('/counter',function (req, res){
    counter=counter+1;
    res.send(counter.toString())
});

app.get('/artical-two',function(req, res){
    res.send("This is artical-two");
});

app.get('/artical-three',function(req, res){
    res.send("This is artical-three");
});

app.get('/:articleName',function(req, res){
    var articleName =req.params.articleName;
    res.send(createTemplate(articals[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
