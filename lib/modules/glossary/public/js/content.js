$(function() {
  $('body').on('click', '.glossary-widget', function() {
    console.log($(this));
    $(this).find('.glossary-list').toggleClass('closed', false);
  });
});