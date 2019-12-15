// Navbar scroll
function scroll() {
  // Define all sections as variables
  var sections = document.getElementsByClassName("screen");
  var navlist = document.getElementsByClassName("nav-item");

  // Check if the section is currently in view
  // Then apply the active class name to the corresponding nav item
  for (var i = 0; i < sections.length; i++) {
    if (!navlist[i].classList.contains("active") && window.scrollY >= sections[i].offsetTop && window.scrollY < sections[i].offsetTop + def.clientHeight / 2) {
      for (var y = 0; y < navlist.length; y++) {
        if (navlist[y] !== navlist[i]) navlist[y].classList.remove("active");
      }
      navlist[i].classList.add("active");
      break;
    }
  }

  // Make the navbar sticky when it reaches the bottom of the page
  if (window.scrollY >= document.getElementById("ft").offsetTop - window.innerHeight) document.getElementById("nav").className = "col-nav sticky";
  else document.getElementById("nav").className = "col-nav";
}

window.onscroll = scroll;