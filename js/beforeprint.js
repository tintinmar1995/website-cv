function longPrintable(){
  document.getElementById("email-adress").style.display = "block";
  document.querySelector(".topnav").style.display = "none";
  document.querySelector("#contact").style.display = "none";
  document.querySelector("#xp-help").style.display = "none";
  document.querySelector("#content").style.margin = "0%";
  for (elem of document.querySelectorAll("[slot=btn-i]")) {
    elem.style.display = "none";
  }
  for (elem of document.querySelectorAll(".vertical-sep")) {
    elem.style.display = "none";
  }
  for (elem of document.querySelectorAll(".container")) {
    elem.style['margin-bottom'] = "0px";
  }
  for (elem of document.getElementsByTagName("xp-row")) {
    elem.hideExternalLink();
  }
}

function shortPrintable(){
  longPrintable()
  for (elem of document.getElementsByClassName("school")) {
    elem.style.display = "none";
  }
  for (elem of document.getElementsByClassName("benevolat")) {
    elem.style.display = "none";
  }
  for (elem of document.getElementsByClassName("articles")) {
    elem.style.display = "none";
  }
  for (elem of document.getElementsByTagName("xp-row")) {
    elem.style.display = "none";
  }
  document.getElementsByTagName("xp-row")[0].style.display = "block";
}

window.onbeforeprint = (event) => {
  longPrintable();
};

/*for (elem of document.getElementsByTagName("row-school")) {
  elem.style.display = "none";
}
document.getElementsByTagName("row-school")[0].style.display = "block";*/
