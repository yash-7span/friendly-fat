
$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > $(".global-styles").height()){
      $(".cart-quantity").css({"background-color":"rgb(253, 245, 229)" , "color": "rgb(55, 44, 35)"});   
      $("body").addClass("scrolled-header");
    }
    else{
      $(".cart-quantity").css({"background-color":"rgb(55, 44, 35)" , "color": "rgb(253, 245, 229)"});
      $("body").removeClass("scrolled-header");
    }
  });
  
  $('.close-wrapper').click(function(){
    $('.nav-bg-svg').addClass('is-fixed-height');
  });
  if($('*').hasClass('announcement-hide')){
    $('.nav-bg-svg').addClass('is-fixed-height');
  }
});


// new popup
$( document ).ready(function() {
  var popup = {
      el: {},
      data: { currentPopup: [] },
      init: function (a) {
          var t = this;
          t.bindUIActions(), a && (t.data.settings = a), window.location.hash && t.open(window.location.hash.replace("#", ""));
      },
      bindUIActions: function () {
          var a = this;
          $(document).on("click", "[data-popup]", function () {
              $(this).data("popup")
                  ? ($(this).data("type") == "image-popup" ? $("#popup_img_id").attr("src", $(this).data("src")) : $("#video_path").attr("src", $(this).data("src")), a.open($(this).data("popup")))
                  : alert("Please provide popup Id.");
          }),
              $(document).on("click", ".popup__close", function (t) {
                  var e = $(t.delegateTarget).find("iframe"),
                      r = e.attr("src");
                  e.attr("src", "/empty.html"), e.attr("src", ""), $("#popup_img_id").attr("src", ""), $("#video_path").attr("src", ""), a.close($(this).parents(".popup").attr("id"));
              }),
              $(document).mouseup(function (t) {
                  if (a.data.currentPopup.length > 0) {
                      var e = $(".popup__wrap");
                      if (!e.is(t.target) && e.has(t.target).length === 0) {
                          var r = $(t.delegateTarget).find("iframe"),
                              i = r.attr("src");
                          r.attr("src", "/empty.html"), r.attr("src", i), a.close();
                      }
                  }
              }),
              $(document).keyup(function (t) {
                  a.data.currentPopup.length > 0 && t.keyCode == 27 && a.close();
              });
      },
      open: function (a) {
          var t = this,
              e = $("#" + a);
          e.length > 0 &&
              (t.data.currentPopup.push(a),
              e.css("z-index", 99 + t.data.currentPopup.length).addClass("open"),
              e.find(".popup_focus").focus(),
              $("body").addClass("popup__is-open"),
              t.data.settings && t.data.settings.afterOpen && t.data.settings.afterOpen(a));
      },
      close: function (a) {
          var t = this;
          a || (a = t.data.currentPopup[t.data.currentPopup.length - 1]);
          var e = $("#" + a);
          if (e.length > 0) {
              var r = t.data.currentPopup.indexOf(a);
              t.data.currentPopup.splice(r, 1), e.removeClass("open"), $("body").removeClass("popup__is-open"), t.data.settings && t.data.settings.afterClose && t.data.settings.afterClose(a);
          } else alert("Popup Not Found!");
      },
  };

  $(document).ready(function () {
      popup.init(), $(".afterpay-paragraph").insertAfter(".product-form");
  });
  function init() {
      for (var a = document.getElementsByTagName("iframe"), t = 0; t < a.length; t++) a[t].getAttribute("data-src") && a[t].setAttribute("src", a[t].getAttribute("data-src"));
  }

  $(document).ready(function() {
    popup.init(),
      $(".img-run").on("click", function() {
      var t = $(this).attr("data-src");
      $("#popup_img_id").hide(), $("#popup_img_id").attr("src", t).on("load", function() {
        $(this).show()
      })
    })
  });

  window.onload = init;
});