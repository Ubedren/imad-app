console.log('Loaded!');
var pic = document.getElementById('pic');
var marginLeft = 0;
function moveLeft(){
    marginLeft = marginLeft - 5;
    pic.style.marginLeft = marginLeft + 'px';
}
pic.onclick = function(){
    //var interval = setInterval(moveLeft,50);
    marginLeft = marginLeft + 5;
    pic.style.marginLeft = marginLeft + 'px';
};