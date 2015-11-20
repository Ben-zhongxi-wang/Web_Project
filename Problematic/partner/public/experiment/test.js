/**
 * Created by Tianjie Dong on 2015/10/30.
 */

for (var i = 0; i < 5; i++) {
    setTimeout((function() { console.log(i); })(i), i * 1000 );
}