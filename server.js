var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articalOne ={
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
};

var htmltemplate = `'
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one', function (req, res){
    res.send("This is artical-one");
});

app.get('/artical-two',function(req, res){
    res.send("This is artical-two");
});

app.get('/artical-three',function(req, res){
    res.send("This is artical-three");
});

app.get('/artical-ones',function(req, res){
    res.sendFile(path.join(__dirname , 'ui', 'artical-one.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
