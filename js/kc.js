$(document).ready(function () {
    $(document).on("keydown", function (o) {
      27 === o.keyCode && $(".modal,.modal-back-shadow").hide(),
        $(".modal-back-shadow").remove();
    }),
    $(".menu-toggle").click(function () {
      $(".menu-toggle").toggleClass("is-clicked");
      $("nav ul").toggle();
    }),
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (o) {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var e = $(this.hash);
          (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length &&
            (o.preventDefault(),
            $("html, body").animate(
              { scrollTop: e.offset().top },
              1e3,
              function () {
                var o = $(e);
                if ((o.focus(), o.is(":focus"))) return !1;
                o.attr("tabindex", "-1"), o.focus();
              }
            ));
        }
      }),
    $(window).scroll(function () {
      $(this).scrollTop() > 100
        ? $(".gtop:hidden").stop(!0, !0).css("display", "block")
        : $(".gtop").stop(!0, !0).css("display", "none");
    }),
    $(function () {
      $(".gtop").click(function () {
        return $("html,body").animate({ scrollTop: 0 }, 800), !1;
      });
    });
});
