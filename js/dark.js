{
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const darkModeOn = darkModeMediaQuery.matches;
  $("*").attr("data-dark","")
  if (darkModeOn) { // Dark
    document.getElementById("btn_mode").checked = true;
    $("[data-dark").attr("data-dark","dark")
    console.log('初期設定:ダークモード');
  } else { // Light
    document.getElementById("btn_mode").checked = false;
    $("[data-dark]").attr("data-dark","light")
    console.log('初期設定:ライトモード');
  }
}

$(function () {

  $("#btn_mode").change(function () {
    console.log($("#btn_mode").prop("checked"));
    console.log($("#btn_mode").attr("checked") == "checked")
    if ($("#btn_mode").prop("checked") == true) {
      $("[data-dark]").attr("data-dark","dark")
      console.log("ダークモード")
    } else {
      console.log("ライトモード")
      $("[data-dark]").attr("data-dark","light")
    }
  })

})
