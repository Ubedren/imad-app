console.log('Loaded!');

var marginLeft = 0;
function moveLeft(){
    marginLeft = marginLeft + 10;
    pic.style.marginLeft = marginLeft + 'px';
}
var pic = document.getElementById('pic');
pic.onClick = function(){
    var interval = setInterval(moveLeft,100);
};