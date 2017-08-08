var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    // create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it into the varible
    request.onreadystatechange = function(){
        if(reques.onreadystatechange == XMLHttpReques.DONE) {
            //Take some action
            if(request.status ==200){
                var counter =request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //Make the request
    request.open('GET','http://ubendren96.imad.hasura-app.io/counter',true);
    request.send(null);
};
