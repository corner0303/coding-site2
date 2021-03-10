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



$(function(){
  let $nameInput = false;
  let $emailInput = false;
  let $contentInput = false;
  let $privacyInput = false;

  let $submit = $("#contact_btn");
  function submit() {
    if ($nameInput == true && $emailInput == true && $contentInput == true && $privacyInput == true) {
      $submit.prop("disabled", false);
      console.log("送信準備ができました")
    } else {
      $submit.prop("disabled", true);
      console.log("未入力があります")
    }
  }

  submit();

  $("#name_input").blur(function () {
    checkName($(this))
    submit()
  })

  $("#email_input").blur(function () {
    checkEmail($(this))
    submit()
  })

  $("#content_input").blur(function () {
    checkContent($(this))
    submit()
  })

  $("#checkbox_input").click(function () {
    if ($(this).prop('checked')) {
      $privacyInput = true;
      submit();
      console.log("privacy is true")
      $("#checkbox_error").fadeOut(500);
    } else {
      $privacyInput = false;
      submit();
      console.log("privacy is false")
      $("#checkbox_error").fadeIn(500);
    }
  })

  checkName = function (ele) {
    let val = ele.val();
    if (val == "") {
      ele.parents(".form_item_content").find(".form_item_content__none").fadeIn(500);
      $nameInput = false;
    } else {
      $nameInput = true;
      ele.parents(".form_item_content").find(".form_item_content__none").fadeOut();
      console.log("name is true")
    }
  }

  checkEmail = function (ele) {
    let val = ele.val();
    if (val == "") {
      $emailInput = false;
      console.log("email is false")
      ele.parents(".form_item_content").find(".form_item_content__none").fadeIn(500);
      
    } else if (!val.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
      $emailInput = false;
      console.log("email is false")
      ele.parents(".form_item_content").find(".form_item_content__none").css("width","255px");
      ele.parents(".form_item_content").find(".form_item_content__none").text("半角英数字、@をつけてください").fadeIn(500);
    } else {
      $emailInput = true;
      ele.parents(".form_item_content").find(".form_item_content__none").fadeOut();
      console.log("email is true")
    }
  }

  checkContent = function (ele) {
    let val = ele.val();
    if (val == "") {
      $contentInput = false;
      ele.parents(".form_item_content").find(".form_item_content__none").fadeIn(500);
      console.log("content is false")
    } else {
      $contentInput = true;
      ele.parents(".form_item_content").find(".form_item_content__none").fadeOut();
      console.log("content is true")
    }
  }

})