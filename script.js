window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("cid").style.top = "-70%";
    document.getElementById('slider').style.height='15%';
    document.getElementsByclassName('navbar a').style.color='black';
    

  } else {
    document.getElementById("cid").style.top='0px';
   document.getElementById('slider').style.height='30%';


  }
} 



