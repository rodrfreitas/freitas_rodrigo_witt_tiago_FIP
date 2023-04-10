console.log("JS Running");

let bioLinks = document.querySelectorAll('#product-overview button'),
    theLightBox = document.querySelector('#lightbox');


(function(){
	"use strict";	
	console.log("Hamb menu running");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/

function getTeamData() {
    //change the lightbox content to match the hero data
    //this (the object reference) is coming from the custom data attribute we added to each anchor tag in the html

    theLightBox.querySelector('.lb_heading').textContent = product_data[this.dataset.member].name;
    theLightBox.querySelector('.lb_text').textContent = product_data[this.dataset.member].bio;

    // theLightBox.style.backgroundImage = `url(${product_data[this.dataset.member].img})`;


    // change any other element's content using the same method - select it; add the object's data to it
    // as textContent; src attributes... whatever you need to change.
}

bioLinks.forEach(link => link.addEventListener('click', getTeamData));

// Nav Styling

const currentLocation = location.href;
const navLinks = document.querySelectorAll('nav ul li a');

if (navLinks.length > 0) {
  navLinks.forEach(link => {
    if (link.href && link.href === currentLocation) {
      link.classList.add('active');
    }
  });
} else {
  console.error('Navigation menu links not found.');
}