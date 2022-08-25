function longPrintable(){
  document.getElementById("email-adress").style.display = "ruby";
  document.querySelector(".topnav").style.display = "none";
  document.querySelector("#contact").style.display = "none";
  document.querySelector("#open-source").style.display = "none";
  document.querySelector("#xp-help").style.display = "none";
  document.querySelector("#content").style.margin = "0%";
  document.querySelector("#name").style.margin = "0%";
  for (elem of document.querySelectorAll(".vertical-sep")) {
    elem.style.display = "none";
  }
  for (elem of document.querySelectorAll(".container")) {
    elem.style['margin-bottom'] = "0px";
  }
  for (elem of document.getElementsByTagName("xp-row")) {
    elem.hideExternalLink();
    elem.hideModalButton();
  }
}

function keepFirstTag(tagname){
  for (elem of document.getElementsByTagName(tagname)) {
    elem.style.display = "none";
  }
  document.getElementsByTagName(tagname)[0].style.display = "block";
}

function shortPrintable(){
  longPrintable()
  for (elem of document.getElementsByClassName("benevolat")) {
    elem.style.display = "none";
  }
  for (elem of document.getElementsByClassName("articles")) {
    elem.style.display = "none";
  }
  keepFirstTag("xp-row");
  keepFirstTag("row-school");
}

/*for (elem of document.getElementsByTagName("row-school")) {
  elem.style.display = "none";
}
document.getElementsByTagName("row-school")[0].style.display = "block";*/

window.addEventListener('beforeprint', longPrintable);
