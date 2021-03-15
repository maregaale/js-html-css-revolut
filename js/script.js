// variabili
var mainNavLinks = $(".main-nav > ul > li");
var linksMenu = $(".links-menu")
// all'hover sui link della main-nav faccio sparire o comparire il menu

mainNavLinks.mouseenter(
  function () {
    $(".main-nav > ul > li").children(".links-menu").hide();
    $(this).children(".links-menu").show();
  }
);
