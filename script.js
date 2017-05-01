$(function(){

  // FUNKCJE POMOCNICZE
  function initSortable() {
    $('.card-list').sortable({
      connectWith: '.card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }
});
