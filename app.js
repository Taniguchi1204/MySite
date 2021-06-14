$(function(){
  $('#active').on('click',function(event){
    $('#list').fadeToggle();
    event.preventDefault();
  });
});

$(function(){
  $('#list a').on('click',function(){
    $('#list').fadeToggle(2000);
  });
});