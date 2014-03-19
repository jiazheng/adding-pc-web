(function(w, d){

var phoneStatus = false;
var circleStatus = false;
var blueStatus = false;
var aboutStatus = false;

w.onload = function(){
    var introImages = document.querySelectorAll('.intro-image');
    for (var i = 0; i < introImages.length; i ++) {
        addClass(introImages[i], 'show');
    }
    var subTitle = document.querySelector('.sub-title');
    addClass(subTitle, 'show');
}

w.onscroll = function(e){
    var bodyScrollTop = getPageScrollTop();
    console.log(bodyScrollTop);
    if (bodyScrollTop > 180) {
        d.querySelector('.title01').style.opacity = 1;
    } else {
        d.querySelector('.title01').style.opacity = 0;
    }
    
    if (bodyScrollTop > 300 && phoneStatus == false) {
        var phones = d.querySelectorAll('.phone');
        for (var i = 0; i < phones.length; i++) {
            addClass(phones[i], 'show');
        }
        phoneStatus = true;
    }
    if (bodyScrollTop <= 300 && phoneStatus == true) {
        var phones = d.querySelectorAll('.phone');
        for (var i = 0; i < phones.length; i++) {
            removeClass(phones[i], 'show');
        }
        phoneStatus = false;
    }
    var sec02 = document.querySelector('.sec02');
    var initY = 0;
    if (bodyScrollTop > 170 && bodyScrollTop < 1400) {
        var diff = bodyScrollTop - 170;
        sec02.style.backgroundPosition = '50% ' + (initY + diff / 5) + 'px';
    }
    
    if (bodyScrollTop > 780 && circleStatus == false) {
        var img = d.querySelectorAll('.item-image-container img');
        for (var i = 0; i < img.length; i++) {
            addClass(img[i], 'show');
        }
        var text = d.querySelectorAll('.item-text-container');
        for (var i = 0; i < text.length; i++) {
            addClass(text[i], 'show');
        }
        circleStatus = true;
    }
    if (bodyScrollTop <= 780 && circleStatus == true) {
        var img = d.querySelectorAll('.item-image-container img');
        for (var i = 0; i < img.length; i++) {
            removeClass(img[i], 'show');
        }
        var text = d.querySelectorAll('.item-text-container');
        for (var i = 0; i < text.length; i++) {
            removeClass(text[i], 'show');
        }
        circleStatus = false;
    }
    var blueY = 0;
    var blueCloud = d.querySelector('.cloud-blue');
    var balloon = d.querySelector('.balloon');
    var earth = d.querySelector('.earth');
    var building = d.querySelectorAll('.building');
    if (bodyScrollTop > 1200) {
        var diff = bodyScrollTop - 1200;
        blueCloud.style.top =  (blueY + diff / 10) + 'px';
        balloon.style.top =  (blueY + diff / 7) + 'px';
        earth.style.bottom = -900 + diff / 10 + 'px';
        building[0].style.bottom = -120 + diff / 9 + 'px';
        building[1].style.bottom = -135 + diff / 9 + 'px';
    }
    var sec4Title = document.querySelector('.sec04 h2');
    if (bodyScrollTop > 1400 && blueStatus == false) {
        addClass(sec4Title, 'show');
        blueStatus = true;
    }
    if (bodyScrollTop <= 1400 && blueStatus == true) {
        removeClass(sec4Title, 'show');
        blueStatus = false;
    }
    
    var aboutTitle = d.querySelector('.sec05 h2');
    var avatarLeft = d.querySelector('.avatar-left');
    var avatarCenter = d.querySelector('.avatar-center');
    var avatarRight = d.querySelector('.avatar-right');
    if (bodyScrollTop > 1760 && aboutStatus == false) {
        addClass(aboutTitle, 'show');
        addClass(avatarLeft, 'show');
        addClass(avatarCenter, 'show');
        addClass(avatarRight, 'show');
        aboutStatus = true;
    }
    if (bodyScrollTop <= 1760 && aboutStatus == true) {
        removeClass(aboutTitle, 'show');
        removeClass(avatarLeft, 'show');
        removeClass(avatarCenter, 'show');
        removeClass(avatarRight, 'show');
        aboutStatus = false;
    }
}

function $(id) {
    return d.getElementById(id);
}

function getPageScrollTop() {
    return w.pageYOffset || d.documentElement.scrollTop || d.body.scrollTop;
}

function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
}

function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

function hasClass(el, className) {
    if (el.classList) {
        el.classList.contains(className);
    } else {
        new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
}

})(window, document);