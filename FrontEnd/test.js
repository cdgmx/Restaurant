// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = ".5rem";
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("navbar-right").style.marginTop ="0px";
    document.getElementById("logo").getElementsByTagName("img")[0].style.display ="none";

  } else {
      
    document.getElementById("navbar").style.padding = "1.5rem";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("navbar-right").style.marginTop ="50px";
    document.getElementById("logo").getElementsByTagName("img")[0].style.display ="inline";
  }
}