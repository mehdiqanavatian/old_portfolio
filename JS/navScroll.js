const myP = document.getElementById("navbar");
let myBodyScrollTop = document.body.scrollTop;
let myDocumentScrollTop = document.documentElement.scrollTop;

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop < myBodyScrollTop || document.documentElement.scrollTop < myDocumentScrollTop) {
    
    myP.classList.add("navActive");    
  	setTimeout(hideBar, 4000);
    
    } else {
  	setTimeout(hideBar(), 3000);
  }
}

function hideBar()
{
	myDocumentScrollTop=document.documentElement.scrollTop;
  myBodyScrollTop=document.body.scrollTop;
  myP.classList.remove("navActive");
}
