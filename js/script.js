/**
 * Created by saroj on 8/11/16.
 */

"use strict"

var listImages = document.querySelector(".list-images");
var images = listImages.querySelectorAll("img")
var lg = document.querySelector(".lightbox");
var lgCont = document.querySelector(".lg-container");
var lgImg = lgCont.querySelector("img");
var close = document.querySelector(".close");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var that = this;


close.onclick = function () {
    lg.style.display = "none";
    lgCont.style.display = "none";
}

next.onclick = function () {
    if (position < that.images.length - 1) {
        var nextImageLocation = (that.images[position + 1]).src;
    }
}

for(var i = 0; i < images.length; i++) {
    var image = images[i];
    images[i].onmouseover = function () {
        this.style.cursor= "hand";
    }
    images[i].onmouseout = function () {
        this.style.cursor= "pointer";
    }
}

function changeImage(event) {
    lg.style.display = "block";
    lgCont.style.display = "block";
    var targetElement = event.target;
    lgImg.src = targetElement.getAttribute("src");
}