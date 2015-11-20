/**
 * Created by Tianjie Dong on 2015/11/9.
 */
var speed = 0;
var maxLength = 1024;

function x(){
    speed += 10;
    var cube = document.getElementById('test');
    var param = cube.offsetTop + speed
    if(param <= 1024) {
        param = param.toString() + 'px'
        cube.style.top = param;
    }
    else{
        clearInterval(interval);
        cube.style.top = '1024px';

        $("<div> the speed is " + speed.toString() + "</div>").insertAfter(cube);
    }
}

var interval = setInterval(x, 1000);
