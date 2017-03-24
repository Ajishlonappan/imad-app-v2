var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
                articleone : {
                                title: 'Articleone |Ajish',
                                heading: 'Articleone',
                                date: '5 Sep 2017',
                                content:    `<p>
                                        This is my test aricle.  This is my test aricle.  This is my test aricle.  This is my test aricle  This is my test aricle  This is my test aricle
                                    </p>
                                    
                                    <p>
                                        This is my test aricle.  This is my test aricle.  This is my test aricle.  This is my test aricle  This is my test aricle  This is my test aricle
                                    </p>
                              
                                    <p>
                                        This is my test aricle.  This is my test aricle.  This is my test aricle.  This is my test aricle  This is my test aricle  This is my test aricle
                                    </p>`
                                 }
                                    
                                    
                 articletwo: {
                                title: 'Articletwo |Ajish',
                                heading: 'Articletwo',
                                date: '5 Sep 2017',
                                content:    `<p>
                                        This is my second  aricle.  This is my test aricle.  This is my test aricle.  This is my test aricle  This is my test aricle  This is my test aricle
                                    </p>
                                ; 
                                    
                articlethree : {
                                title: 'Articleone |Ajish',
                                heading: 'Articlethree',
                                date: '5 Sep 2017',
                                content:    `<p>
                                        This is my test aricle.  This is my test aricle.  This is my test aricle.  This is my test aricle  This is my test aricle  This is my test aricle
                                    </p>
                                    
                                    <p>
                                        This is my test aricle.  This is my test aricle.  This is my test aricle.  This is my test aricle  This is my test aricle  This is my test aricle
                                    </p>
                              
                                    <p>
                                        This is my test aricle.  This is my test aricle.  This is my test aricle.  This is my test aricle  This is my test aricle  This is my test aricle
                                    </p>`
                                };
                };
        
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading= data.heading;
    var content= data.content;
   
    var htmlTemplate= `
<html> 
<head>
    <title>
            ${title}
    </title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/ui/style.css" rel="stylesheet" />
    
</head>
<body>
    <div class= "container">
         <div>
         <a href = "/"> Home </a>   
        </div>
        <hr/>
        <h>
            ${heading} 
        </h>
        <div>
             ${date}  
        </div>
        <div>
             ${content}
        </div>
    </div>

</body>
</html>`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req, res) {
 res.send(createTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
