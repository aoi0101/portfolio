$(function() {

//topに戻るボタン
  $(function(){
    var pagetop = $('.c-button__toTop');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
  });

//タイトル下線
  $(window).on('scroll',function(){
    $(".p-title--border").each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight){
        $(this).addClass('isActive');
      }
    });
  });

//hoverしたら色変更
  $(".p-work__title").hover(function() {
    $(this).css(
      "background-color", "#bbb3be"
    )
  }, function() {
    $(this).css(
      "background-color", "#cdc3d1"
    );
  });

});
