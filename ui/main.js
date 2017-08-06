console.log('Loaded!');
var pic = document.getElementById('pic');
var marginLeft = 0;
function moveLeft(){
    marginLeft = marginLeft + 10;
    pic.style.marginLeft = marginLeft + 'px';
}
pic.onclick = function(){
    var interval = setInterval(moveLeft,100);
};