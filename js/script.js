// variabili
var mainNavLinks = $(".main-nav > ul > li");
var linksMenu = $(".links-menu")
// all'hover sui link della main-nav faccio sparire o comparire il menu

mainNavLinks.mouseenter(
  function () {
    // linksMenu.fadeOut(50);
    $(".main-nav > ul > li").children(".links-menu").hide();
    $(this).children(".links-menu").show();
  }
);

// mainNavLinks.mouseleave(
//   function () {
//     $(this).children(".links-menu").fadeOut(50);
//   }
// );
