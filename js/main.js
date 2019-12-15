// Navbar scroll
function scroll() {
  // Check if the section is currently in view
  // Then apply the active class name to the corresponding nav item
  if (window.scrollY >= document.getElementById("def").offsetTop && window.scrollY < document.getElementById("def").offsetTop + document.getElementById("def").clientHeight) document.getElementById("defspan").className = "nav-item active";
  else document.getElementById("defspan").className = "nav-item";

  if (window.scrollY >= document.getElementById("priv").offsetTop && window.scrollY < document.getElementById("priv").offsetTop + document.getElementById("priv").clientHeight) document.getElementById("privspan").className = "nav-item active";
  else document.getElementById("privspan").className = "nav-item";

  if (window.scrollY >= document.getElementById("altweb").offsetTop && window.scrollY < document.getElementById("altweb").offsetTop + document.getElementById("altweb").clientHeight) document.getElementById("webspan").className = "nav-item active";
  else document.getElementById("webspan").className = "nav-item";

  if (window.scrollY >= document.getElementById("altsoft").offsetTop && window.scrollY < document.getElementById("altsoft").offsetTop + document.getElementById("altsoft").clientHeight) document.getElementById("softspan").className = "nav-item active";
  else document.getElementById("softspan").className = "nav-item";

  if (window.scrollY >= document.getElementById("ft").offsetTop - window.innerHeight) document.getElementById("nav").className = "col-nav sticky";
  else document.getElementById("nav").className = "col-nav";
}

window.onscroll = scroll;