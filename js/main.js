// Software list
var softatlas = [{
  cat: "dev",
  license: "MIT",
  name: "Atom",
  img: "atom.png",
  git: "https://github.com/atom/atom",
  desc: "Atom is a hackable text editor for the 21st century, built on Electron, and based on everything we love about our favorite editors. We designed it to be deeply customizable, but still approachable using the default configuration."
}, {
  cat: "dev",
  license: "MIT",
  name: "VSCodium",
  img: "vscodium.png",
  git: "https://github.com/VSCodium/vscodium",
  desc: "Visual Studio Code combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle. It provides comprehensive code editing, navigation, and understanding support along with lightweight debugging, a rich extensibility model, and lightweight integration with existing tools."
}, {
  cat: "dev",
  license: "GNU",
  name: "Vim",
  img: "vim.svg",
  git: "https://github.com/vim/vim",
  desc: "This editor is very useful for editing programs and other plain text files. All commands are given with normal keyboard characters, so those who can type with ten fingers can work very fast. Additionally, function keys can be mapped to commands by the user, and the mouse can be used."
}, {
  cat: "design",
  license: "GNU",
  name: "GIMP",
  img: "gimp.png",
  git: "https://github.com/GNOME/gimp/",
  desc: "GIMP is a cross-platform image editor available for GNU/Linux, OS X, Windows and more operating systems. It is free software, you can change its source code and distribute your changes."
}, {
  cat: "design",
  license: "GNU",
  name: "krita",
  img: "krita.svg",
  git: "https://github.com/KDE/krita",
  desc: "Krita is a free and open source digital painting application. It is for artists who want to create professional work from start to end. Krita is used by comic book artists, illustrators, concept artists, matte and texture painters and in the digital VFX industry."
}, {
  cat: "design",
  license: "GNU",
  name: "Inkscape",
  img: "inkscape.png",
  git: "https://github.com/inkscape/inkscape",
  desc: "Inkscape is professional quality vector graphics software which runs on Windows, Mac OS X and Linux. It is used by design professionals and hobbyists worldwide, for creating a wide variety of graphics such as illustrations, icons, logos, diagrams, maps and web graphics."
}, {
  cat: "design",
  license: "MIT",
  name: "svg-edit",
  img: "svgedit.png",
  git: "https://github.com/SVG-Edit/svgedit",
  desc: "SVG-edit is a fast, web-based, JavaScript-driven SVG drawing editor that works in any modern browser."
}, {
  cat: "edit",
  license: "GNU",
  name: "Blender",
  img: "blender.png",
  git: "https://github.com/blender/blender",
  desc: "Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline-modeling, rigging, animation, simulation, rendering, compositing, motion tracking and video editing."
}, {
  cat: "edit",
  license: "GNU",
  name: "Natron",
  img: "natron.png",
  git: "https://github.com/NatronGitHub/Natron",
  desc: "Natron is a free open-source (GPLv2 license) video compositing software, similar in functionality to Adobe After Effects, Nuke by The Foundry, or Blackmagic Fusion."
}, {
  cat: "edit",
  license: "GPL-2.0",
  name: "Kdenlive",
  img: "kdenlive.png",
  git: "https://github.com/blender/blender",
  desc: "Kdenlive is a Free and Open Source video editing application, based on MLT Framework and KDE Frameworks 5. It is distributed under the GNU General Public Licence Version 2."
}, {
  cat: "browser",
  license: "MPL-2.0",
  name: "Brave",
  img: "brave.png",
  git: "https://github.com/brave/brave-browser",
  desc: "Next generation Brave browser for macOS, Windows, Linux, and eventually Android."
}, {
  cat: "browser",
  license: "MPL",
  name: "Waterfox",
  img: "waterfox.png",
  git: "https://github.com/MrAlex94/Waterfox",
  desc: "Waterfox focuses on giving users choice. The browser is focused on power users, which lets you make the important decisions. There is no plugin whitelist (meaning you can run Java Applets and Silverlight apps), you can run whichever extensions you like (including bootstrapped add-ons that can completely change functionality of the browser) and absolutely no data or telemetry is sent back to Mozilla or the Waterfox project."
}, {
  cat: "browser",
  license: "BSD-3-Clause",
  name: "Chromium",
  img: "chromium.png",
  git: "https://github.com/chromium/chromium",
  desc: "Chromium is an open-source browser project that aims to build a safer, faster, and more stable way for all users to experience the web."
}];

// Switch category
function switchCat(cat) {
  // Close selection block
  closeSel(true);

  var software = softatlas.filter(soft => soft.cat === cat);
  // Move cursor
  document.getElementById("cur").style.transform = "translateX(" + document.getElementById(cat).offsetLeft + "px)";
  document.getElementById("cur").style.width = document.getElementById(cat).clientWidth + "px";

  document.getElementById("res").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("res").innerHTML = "";
    for (var i = 0; i < software.length; i++) {
      document.getElementById("res").innerHTML += "<div class=\"res-item\" id=\"item-" + software[i].name + "\" onclick=\"openSel('" + software[i].name + "')\"><div class=\"img-icon\" style=\"background-image:url(./img/" + software[i].img + ")\"></div></div>";
    }
    document.getElementById("res").style.opacity = "1";
  }, 200);
}

switchCat("dev");

function closeSel(open) {
  for (var i = 0; i < document.getElementsByClassName("res-item").length; i++) {
    document.getElementsByClassName("res-item")[i].style.marginBottom = "0";
  }
  if (!open) return;
  document.getElementById("selblock").style.display = "none";
  document.getElementById("selblock").style.top = "0";
}

// Open selection block
function openSel(name) {
  // Close selection block
  closeSel(false);

  // Move selection cursor
  document.getElementById("cursor").style.transform = "translate3d(" + (document.getElementById("item-" + name).offsetLeft + (document.getElementById("item-" + name).clientWidth / 2)) + "px,0,0) rotate(45deg)";

  // Assign found details to selection block
  var software = softatlas.find(soft => soft.name === name);
  document.getElementById("title").innerHTML = software.name;
  document.getElementById("body").innerHTML = software.desc;
  document.getElementById("license").innerHTML = software.license;
  document.getElementById("link").href = software.git;
  document.getElementById("icon").style.backgroundImage = "url(./img/" + software.img + ")";
  document.getElementById("selblock").style.display = "block";
  document.getElementById("selblock").style.top = (document.getElementById("item-" + name).clientHeight * 2) - 30 + document.getElementById("categories").clientHeight + "px";
  document.getElementById("item-" + name).style.marginBottom = document.getElementById("selblock").clientHeight + 50 + "px";
}

// Navbar scroll
function scroll() {
  // Define all sections as variables
  var sections = document.getElementsByClassName("screen");
  var navlist = document.getElementsByClassName("nav-item");

  for (var i = 0; i < sections.length; i++) {
    // Check if the section is currently in view
    // Then apply the active class name to the corresponding nav item
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

window.onload = function () {
  document.getElementById("dev").onclick = function () {
    switchCat("dev");
  }
  document.getElementById("design").onclick = function () {
    switchCat("design");
  }
  document.getElementById("edit").onclick = function () {
    switchCat("edit");
  }
  document.getElementById("browser").onclick = function () {
    switchCat("browser");
  }
}

window.onscroll = scroll;

window.onresize = function () {
  closeSel(true)
}