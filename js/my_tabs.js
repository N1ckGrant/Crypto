$(document).ready(function(){
  console.log('hereeeee')
  
  $('div.tabs span').click(function(){

    var tab_id = $(this).attr('data-tab');
    console.log('click')

    $('div.tabs span').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})
$(document).ready(function(){
  console.log('three')
  
  $('div.tabs_sell label').click(function(){

    var tab_id = $(this).attr('data-tab');
    console.log('click_two2')

    $('div.tabs_sell label').removeClass('current2');
    $('.tab-content_sell_buy').removeClass('current2');

    $(this).addClass('current2');
    $("#"+tab_id).addClass('current2');
  })

})

$(document).ready(function(){
  console.log('two')
  
  $('div.subtabs label').click(function(){

    var tab_id = $(this).attr('data-tab');
    console.log('click_two')

    $('div.subtabs label').removeClass('current');
    $('.tab-content_right').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})



