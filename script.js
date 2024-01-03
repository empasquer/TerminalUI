function create_new_line() {
  $("#MainTerm").append(`

    `);
}

function focusInput() {
  //$('#core_input').focus();
}

$(".Term_Parent_Window").on("click", function () {
  $("#core_input").focus();
});

$("#MaxButton").on("click", function () {
  if ($("#Term_Parent_Window").hasClass("Term_Maximized")) {
    $("#Term_Parent_Window").removeClass("Term_Maximized");
    $("#MaxButton").removeClass("mi mi-ChromeRestore").addClass("mi mi-ChromeMaximize");
    $("#Term_Parent_Window").css("right", "calc(50% - 380px)");
    $("#Term_Parent_Window").css("top", "calc(50% - 220px)");
    $("#Term_Parent_Window").css("left", "calc(50% - 380px)");
  } else {
    $("#Term_Parent_Window").addClass("Term_Maximized");
    $("#Term_Parent_Window").css("top", "0px");
    $("#Term_Parent_Window").css("left", "0px");
    $("#MaxButton").removeClass("mi mi-ChromeMaximize").addClass("mi mi-ChromeRestore");
  }
});

$("#MinButton").on("click", function () {
  if ($("#MainTerm").hasClass("Shrink")) {
    $("#MainTerm").removeClass("Shrink");
    $("#Term_Parent_Window").removeClass("TermHid");

    $("#MinButton").removeClass("Reddish");
  } else {
    $("#MainTerm").addClass("Shrink");
    $("#MinButton").addClass("Reddish");
    $("#Term_Parent_Window").addClass("TermHid");
  }
});

function MaximizeTerm() {
  $("#Term_Parent_Window").addClass("Term_Maximized");
}

function RestoreTerm() {}

$(function () {
  $("#Term_Parent_Window").draggable({ containment: "parent", cancel: ".text" });
});

$("#Drop_Spawn").on("click", function () {
  $("#dropdown_parent").toggleClass("drop_collapsed drop_expanded");
});

function kill_drop() {
  $("#dropdown_parent").removeClass("drop_expanded");
}

function font_tog() {
  if ($("#alt_font_tick").css("opacity") == 1) {
    $("#font_switch").attr("href", "altfont.css");
    $("#alt_font_tick").css("opacity", "0");
  } else {
    $("#font_switch").attr("href", "def.css");
    $("#alt_font_tick").css("opacity", "1");
  }
  kill_drop();
}

function punk_tog() {
  if ($("#alt_theme_tick").css("opacity") == 0) {
    $("#theme_switch").attr("href", "punk.css");
    $("#alt_theme_tick").css("opacity", "1");
    bias = 12;
  } else {
    $("#theme_switch").attr("href", "empty.css");
    $("#alt_theme_tick").css("opacity", "0");
    bias = 8;
  }
  kill_drop();
}

if (window.location.href.includes("#punk")) {
  punk_tog();
} else {
}

async function ABOUT_GO() {
  kill_drop();
  chk = $("#profile").hasClass("MYHIDE");
  if (chk == true) {
    $("#profile").removeClass("MYHIDE").addClass("MYSHOW");
  } else {
    $("#profile").removeClass("MYSHOW").addClass("MYHIDE");
  }
}
