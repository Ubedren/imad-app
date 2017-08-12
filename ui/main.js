var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    // create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it into the varible
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE) {
            //Take some action
            if(request.status ==200 ){
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
/*
var nameInput = document.getElementById('name');
var name= nameInput.value;
var list='';
var submit = document.getElementById('submit_btn');
submit.onclick=function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE) {
            if(request.status ==200 ){
                var names = request.responseText;
                for(var i =0;i< names.length;i++){
                    list += '<li>' + names[i] + '</li>';
                }
            var ul = document.getElementById('namelist');
            ul.innerHTML=list;
            }
        }
    };
    
};
*/

//submit name
var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick=function(){
    
    var request = new XMLHttpRequest();
    
    //capture the response and store it into the varible
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE) {
            //Take some action
            if(request.status ==200 ){
                var names = request.responseText;
                var list='';
                for(var i =0;i< names.length;i++){
                list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }
    };
    
    //Make the request
    request.open('GET','http://ubendren96.imad.hasura-app.io/submit-name',true);
    request.send(null);
    
    
};