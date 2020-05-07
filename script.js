const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');



burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
});
//Burger animation
burger.classList.toggle('toggle');

});

}
navSlide();



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function appsFunction() {
  document.getElementById("apps-dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
function appsFunction(event) {
  document.getElementById("apps-dropdown").classList.toggle("apps-show");
  event.stopPropagation();
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.querySelectorAll(".dropdown-content.apps-show");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      openDropdown.classList.remove('apps-show');
    }
  }
}




var vHeight = $(window).height(),
    vWidth = $(window).width(),
    cover = $('#cover');

cover.css({"height":vHeight,"width":vWidth});


//Get the button
var upbutton = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upbutton.style.display = "block";
  } else {
    upbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}








function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("overlay-input");
  filter = input.value.toUpperCase();
  div = document.getElementById("myOverlay");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}







function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
