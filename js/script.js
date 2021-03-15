// variabili
var mainNavLinks = $(".main-nav > ul > li");
var linksMenu = $(".links-menu");

// all'hover sui link della main-nav faccio sparire o comparire il menu
mainNavLinks.mouseenter(
  function () {
    $(".main-nav > ul > li").children(".links-menu").hide();
    $(this).children(".links-menu").show();
  }
);

// al click sui link della main-nav faccio sparire o comparire il menu
mainNavLinks.click(
  function () {
    $(this).children(".links-menu").toggle();
  }
);

// al click sul documento si chiudono i menu
$(document).click(
  function (clickEvent) {
    if(mainNavLinks != clickEvent.target && mainNavLinks.has(clickEvent.target).length === 0){
      linksMenu.hide();
    }
  }
);
