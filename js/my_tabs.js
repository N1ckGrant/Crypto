$(document).ready(function(){
  console.log('hereeeee')
  
  $('div.tabs a').click(function(){

    var tab_id = $(this).attr('data-tab');
    console.log('click')

    $('div.tabs a').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})
$(document).ready(function(){
  console.log('two')
  
  $('div.tabs label').click(function(){

    var tab_id = $(this).attr('data-tab');
    console.log('click_two')

    $('div.tabs label').removeClass('current');
    $('.tab-content_right').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})