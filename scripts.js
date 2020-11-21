$(function () {
  $('#open-all-lunch-menus').on('click', function () {
    $('.lunch-menu-link').each(function(index) {
      let link = $(this).attr('href');
      setTimeout(function(){
        window.open(link)
      },index*200);
    });
  });
})
