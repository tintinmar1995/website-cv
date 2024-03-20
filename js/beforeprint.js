function longPrintable(){
  // display changes
  document.getElementById("email-adress").style.display = "ruby";
  document.querySelector(".topnav").style.display = "none";
  document.querySelector("#contact").style.display = "none";
  document.querySelector(".secondnav").style.display = "none";
  document.querySelector("#open-source").style.display = "none";
  document.querySelector("#xp-help").style.display = "none";
  document.querySelector("#content").style.margin = "0%";
  document.querySelector("#name").style.margin = "0%";
  document.querySelector("#skills-content").style['overflow-x'] = "hidden";
  for (elem of document.querySelectorAll(".vertical-sep")) {
    elem.style.display = "none";
  }
  for (elem of document.querySelectorAll(".container")) {
    elem.style['margin-bottom'] = "0px";
  }

  // hide info from XP rows
  for (elem of document.getElementsByTagName("xp-row")) {
    elem.hideExternalLink();
    elem.hideModalButton();
  }
}

function keepIthTag(tagname, i){
  for (elem of document.getElementsByTagName(tagname)) {
    elem.style.display = "none";
  }
  if(Array.isArray(i)){
    for(j of i){
      document.getElementsByTagName(tagname)[j].style.display = "block";  
    }
  } else {
    document.getElementsByTagName(tagname)[i].style.display = "block";
  }
}

function shortPrintable(){
  longPrintable()
  //for (elem of document.querySelectorAll('[slot=skills]')){
  //  elem.style.display = "none";
  //}
  for (elem of document.getElementsByClassName("benevolat")) {
    elem.style.display = "none";
  }
  for (elem of document.getElementsByClassName("articles")) {
    elem.style.display = "none";
  }

  for (elem of document.getElementsByTagName("xp-row")) {
    elem.hideJobs();
  }
  
  document.getElementById("photo").style.display = "none";

  keepIthTag("xp-row", [0]);
  keepIthTag("row-school", 1);
  keepIthTag("row-teaching", [0,2]);
}

/*for (elem of document.getElementsByTagName("row-school")) {
  elem.style.display = "none";
}
document.getElementsByTagName("row-school")[0].style.display = "block";*/

window.addEventListener('beforeprint', longPrintable);
