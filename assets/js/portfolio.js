/*var about = document.getElementById("aboutpage");
var clickabout=document.getElementById("about");

clickabout.addEventListener("click", function() {
  window.scrollTo(0,about.offsetTop);
});
*/

$(document).ready(function(){
    $(window).scrollTop(0);
});




var nav = document.querySelector('nav'); 


$(window).scroll(function(){
    if ($(this).scrollTop()+100 >= $('#aboutpage').position().top && $(this).scrollTop()+65 < $('#contactpage').position().top) {
       $('nav').addClass('nav-active');
       $('nav').removeClass('nav-sleep');
    } else {
       $('nav').removeClass('nav-active');
       $('nav').addClass('nav-sleep');
    }
});

$(function() {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});


$(window).scroll(function(){
    if ($(this).scrollTop()+100 < $('#aboutpage').position().top)  {
       $('#home').addClass('active');
       $('#home').removeClass('newClass');
    } else {
       $('#home').removeClass('active');
       $('#home').addClass('newClass');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop()+100 >= $('#aboutpage').position().top && $(this).scrollTop()+100 < $('#projectpage').position().top) {
       $('#about').addClass('active');
       $('#about').removeClass('newClass');
    } else {
       $('#about').removeClass('active');
       $('#about').addClass('newClass');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop()+100 >= $('#projectpage').position().top && $(this).scrollTop()+100 < $('#skillpage').position().top) {
       $('#project').addClass('active');
       $('#project').removeClass('newClass');
    } else {
       $('#project').removeClass('active');
       $('#project').addClass('newClass');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop()+100 >= $('#skillpage').position().top && $(this).scrollTop()+100 < $('#experiencepage').position().top) {
       $('#skill').addClass('active');
       $('#skill').removeClass('newClass');
    } else {
       $('#skill').removeClass('active');
       $('#skill').addClass('newClass');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop()+100 >= $('#experiencepage').position().top && $(this).scrollTop()+100 < $('#educationpage').position().top) {

       $('#experience').addClass('active');
       $('#experience').removeClass('newClass');
    } else {
       $('#experience').removeClass('active');
       $('#experience').addClass('newClass');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop()+100 >= $('#educationpage').position().top && $(this).scrollTop()+100 < $('#contactpage').position().top) {

       $('#education').addClass('active');
       $('#education').removeClass('newClass');
    } else {
       $('#education').removeClass('active');
       $('#education').addClass('newClass');
    }
});




$(window).scroll(function(){
    if ($(this).scrollTop()+100 >= $('#contactpage').position().top ) {
       $('#contact').addClass('active');
       $('#contact').removeClass('newClass');
    } else {
       $('#contact').removeClass('active');
       $('#contact').addClass('newClass');
    }
});






