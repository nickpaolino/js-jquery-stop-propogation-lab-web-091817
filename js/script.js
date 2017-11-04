$(document).ready(function() {

  lightActive();
  redLight();
  yellowLight();
  greenLight();


});

function lightActive(){
  $('.light').on('click', function(){
      $(this).toggleClass("active");
      console.log("background purple")
  });
}

function redLight(event){
  $(".redLight").on('click', function(ev){
    $(this).toggleClass("red");
    ev.stopPropagation();
  });
}


function yellowLight(event){
  $(".yellowLight").on('click', function(ev){
    $(this).toggleClass("yellow");
    ev.stopPropagation();
  });
}

function greenLight(event){
  $(".greenLight").on('click', function(ev){
    $(this).toggleClass("green");
    ev.stopPropagation();
  });
}
