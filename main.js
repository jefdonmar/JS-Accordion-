(function(){
  $('h1').click(function(){
    $(this).parents().siblings().addClass('hidden');
    $(this).parents('section').removeClass('hidden');
  })
}());