(function(w, d){


w.onscroll = function(e){
    var bodyScrollTop = getPageScrollTop();
    console.log(bodyScrollTop);
    if (bodyScrollTop > 180) {
        d.querySelector('.title01').style.opacity = 1;
    } else {
        d.querySelector('.title01').style.opacity = 0;
    }
}

function $(id) {
    return d.getElementById(id);
}

function getPageScrollTop() {
    return w.pageYOffset || d.documentElement.scrollTop || d.body.scrollTop;
}

})(window, document);