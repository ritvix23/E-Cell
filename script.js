window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("test").style.top = "0";
  } else {
    document.getElementById("test").style.top = "-100px";
  }
} 