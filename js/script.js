$("#hamburger_link").click(function () {
  $("#gnav").toggleClass("gnav--open")
  $("#line1").toggleClass("hamburger_icon__part--open1")
  $("#line2").toggleClass("hamburger_icon__part--open2")
  $("#line3").toggleClass("hamburger_icon__part--open3")
  $("#hamburger_bg").toggleClass("hamburger_bg--open")
  $(".wrapper").toggleClass("wrapper_on")
})

$("#hamburger_bg").click(function () {
  $("#gnav").removeClass("gnav--open")
  $("#line1").removeClass("hamburger_icon__part--open1")
  $("#line2").removeClass("hamburger_icon__part--open2")
  $("#line3").removeClass("hamburger_icon__part--open3")
  $("#hamburger_bg").removeClass("hamburger_bg--open")
  $(".wrapper").removeClass("wrapper_on")
})