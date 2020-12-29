/* We going to make the contact part to disappear */


let mediaQuery = window.matchMedia("(max-width: 673px)"); /* This variable is assign to a matchMedia() function to let us know when the window reaches a maximum of 673px wide */

 function sectionDisappear(mediaQuery) {
	if(mediaQuery.matches) {		/* We use Jquery library to pick an element using $(). Also, we use the .match property to see if window width 673 is true */
	/* viewport 673px or lesser */
	document.getElementById("contact").style.display = "none";
	document.getElementById("flexnav").style.display = "none"
	} else {
	document.getElementById("contact").style.display = ""; /* Use empty string to undo any javascript property*/
	document.getElementById("flexnav").style.display = ""
	}
 }


	sectionDisappear(mediaQuery); /* Before doing the addlistener(), call this function first so the webpage is ready to do it at the get-go.  */
	
	mediaQuery.addEventListener(sectionDisappear); 	

/* We going to add a listener to var mediaQuery to keep track of the width size of the window and run the function sectionDisappear. In other words, regardless the state of width, the addListener() will activate or call the sectionDisappear function.  */


/* The function below is to make disappear the hamburger icon when width is greater than 674px */

let mQ = window.matchMedia("(min-width: 674px)"); 

 function barDisappear(mQ) {
	if(mQ.matches) {		
	document.getElementById("hamburger").style.display = "none";
	document.getElementById("hamburger").style.right = "50px";
	document.getElementById("hamburger").style.top = "6px";
	
	} else {
	document.getElementById("hamburger").style.display = "";
	document.getElementById("hamburger").style.right = "50px";
	document.getElementById("hamburger").style.top = "6px";
	}
 }
	barDisappear(mQ);
	
	mQ.addEventListener(barDisappear); 

/* The code below is to make the hamburger icon clickable */

/* We are creating a function to add the CSS rule that belongs to class 'show' on to the element with the id = myDropdownContent. Then use the toggle property to show/hide the hamburger content someone clicks it. */

function myClickFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

/* The code below states that whenever the user clicks any part of the window, the dropdown will close.The if statement states that if user click any where but the button, then it matches () will return false and with ! this will turn false into true. */

window.onclick = function(event) {

  if (!event.target.matches('.hambtn')) {
    
	let hamcontent = document.getElementsByClassName("ham-dropdowncontent");
    	for (let i = 0; i < hamcontent.length; i++) {
      		let openHamContent = hamcontent[i];
      		if (openHamContent.classList.contains('show')) {
        	openHamContent.classList.remove('show');
      }
    }
  }
}









