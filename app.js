// Navbar slider
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav1 = document.querySelector('.nav-links');
    const nav2 = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        // Toggle Nav Hamburger Slide
        nav1.classList.toggle('nav-active');
        nav2.classList.toggle('nav-active');

        // Animate Links / Delay Each Link Before Displaying  
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1.7s ease forwards ${index / 6 + 0.2}s`;
            }
        });
        //Burger X Animation
        burger.classList.toggle('toggleX');

    });

}

navSlide();

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

// Slick carousel services (using slick.js)
$(document).ready(() => {
  $('.services-carousel .slick').slick({
      autoplay:true,
      dots: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: false,
      nextArrow: false,
      centerMode: true,
      responsive: [
          {
              breakpoint: 650,
              settings: {
                  dots: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});
// Slick carousel services (using slick.js) above
// Slick carousel quotes | why us
$(document).ready(() => {
  $('.quotes-carousel .slick').slick({
      autoplay:true,
      dots: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false,
  });
});
// Slick carousel quotes | why us above

// Gallery below
const root = document.querySelector("body, html");
const container = document.querySelector(".gallery-container");
const images = document.querySelectorAll(".gallery-box > img");
const l = images.length;
for (var i = 0; i < l; i++) {
  images[i].addEventListener("click", function (h) {
    var f = this;
    const c = f.parentElement,
      a = document.createElement("div");
    a.id = "gallery-screen";
    container.prepend(a);
    if (c.hasAttribute("data-theme")) {
      a.setAttribute("data-theme", "dark");
    }
    var p = f.src;
    root.style.overflow = "hidden";
    a.innerHTML =
      '<div class="gallery-image"></div><div class="gallery-close gallery-btn">&times</div><div class="gallery-next gallery-btn">&rarr;</div><div class="gallery-prev gallery-btn">&larr;</div>';
    const k = images[0].src,
      q = images[l - 1].src;
    const o = document.querySelector(".gallery-image"),
      e = document.querySelector(".gallery-prev"),
      b = document.querySelector(".gallery-next"),
      r = document.querySelector(".gallery-close");
    o.innerHTML = '<img src="' + p + '">';
    if (l > 1) {
      if (p == k) {
        e.hidden = true;
        var n = false;
        var g = f.nextElementSibling;
      } else {
        if (p == q) {
          b.hidden = true;
          var g = false;
          var n = f.previousElementSibling;
        } else {
          var n = f.previousElementSibling;
          var g = f.nextElementSibling;
        }
      }
    } else {
      e.hidden = true;
      b.hidden = true;
    }
    a.addEventListener("click", function (s) {
      if (s.target == this || s.target == r) {
        m();
      }
    });
    root.addEventListener("keydown", function (s) {
      if (s.keyCode == 37 || s.keyCode == 38) {
        d();
      }
      if (s.keyCode == 39 || s.keyCode == 40) {
        j();
      }
      if (s.keyCode == 27) {
        m();
      }
    });
    e.addEventListener("click", d);
    b.addEventListener("click", j);
    function d() {
      n = f.previousElementSibling;
      o.innerHTML = '<img src="' + n.src + '">';
      f = f.previousElementSibling;
      var s = document.querySelector(".gallery-image > img").src;
      b.hidden = false;
      e.hidden = s === k;
    }
    function j() {
      g = f.nextElementSibling;
      o.innerHTML = '<img src="' + g.src + '">';
      f = f.nextElementSibling;
      var s = document.querySelector(".gallery-image > img").src;
      e.hidden = false;
      b.hidden = s === q;
    }
    function m() {
      root.style.overflow = "auto";
      a.remove();
    }
  });
}
function gridGallery(a) {
  if (a.selector) {
    selector = document.querySelector(a.selector);
  }
  if (a.darkMode) {
    selector.setAttribute("data-theme", "dark");
  }
  if (a.layout == "horizontal" || a.layout == "square") {
    selector.setAttribute("data-layout", a.layout);
  }
  if (a.gaplength) {
    selector.style.setProperty("--gap-length", a.gaplength + "px");
  }
  if (a.rowHeight) {
    selector.style.setProperty("--row-height", a.rowHeight + "px");
  }
  if (a.columnWidth) {
    selector.style.setProperty("--column-width", a.columnWidth + "px");
  }
}

// Gallery above


