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

// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-70px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// Slick carousel services (using slick.js)
$(document).ready(() => {
  $('.services-carousel .slick').slick({
      autoplay: true,
      dots: false,
      autoplayspeed: 2500,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: false,
      nextArrow: false,
      centerMode: true,
      responsive: [
          {
              breakpoint: 550,
              settings: {
                  dots: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
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
      dots: false,
      speed: 2000,
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
};
// Gallery above



// Toggle services view more
$(document).ready(function() {
  $('#kc, #as, #ge, #scln, #hl, #bcln, #fl, #sl, #uc').hide();
  $('#kdcbtn').on('click', function() {
    $('#kc').show();
    $('#as, #ge, #scln, #hl, #bcln, #fl, #sl, #uc, #srvc-h').hide();
  });
  $('#asbtn').on('click', function() {
    $('#as').show();
    $('#kc, #ge, #scln, #hl, #bcln, #fl, #sl, #uc, #srvc-h').hide();
  });
  $('#gebtn').on('click', function() {
    $('#ge').show();
    $('#kc, #as, #scln, #hl, #bcln, #fl, #sl, #uc, #srvc-h').hide();
  });
  $('#sbtn').on('click', function() {
    $('#scln').show();
    $('#kc, #as, #ge, #hl, #bcln, #fl, #sl, #uc, #srvc-h').hide();
  });
  $('#hlbtn').on('click', function() {
    $('#hl').show();
    $('#kc, #as, #ge, #scln, #bcln, #fl, #sl, #uc, #srvc-h').hide();
  });
  $('#bbtn').on('click', function() {
    $('#bcln').show();
    $('#kc, #as, #ge, #scln, #hl, #fl, #sl, #uc, #srvc-h').hide();
  });
  $('#flbtn').on('click', function() {
    $('#fl').show();
    $('#kc, #as, #ge, #scln, #hl, #bcln, #sl, #uc, #srvc-h').hide();
  });
  $('#slbtn').on('click', function() {
    $('#sl').show();
    $('#kc, #as, #ge, #scln, #hl, #bcln, #fl, #uc, #srvc-h').hide();
  });
  $('#ucbtn').on('click', function() {
    $('#uc').show();
    $('#kc, #as, #ge, #scln, #hl, #bcln, #fl, #sl, #srvc-h').hide();
  });
  $('#srvcbtn').on('click', function() {
    $('#srvc-h').show();
    $('#kc, #as, #ge, #scln, #hl, #bcln, #fl, #sl, #uc').hide();
  });
  
  
  
  //below is the scroll to top function
  $('#kdcbtn, #asbtn, #srvcbtn, #gebtn, #sbtn, #hlbtn, #bbtn, #flbtn, #slbtn, #ucbtn, #mtbtn').click(function(){
    $('html, body').animate({scrollTop : 0},100);
    return false;
  });
  
});

// on loading contact form hide google confirm page | show bright confirmation page
var loadCounter = 0;
$('.confirmation-message').hide();
    var loaded = function() {
        loadCounter += 1;
        if (loadCounter === 2) {
            $(window).on("load");
            $('.iframewrapper, #iframe-contact, .iframe-acc-wrapper, #iframe-acc-form').hide();
            $('.confirmation-message').show();
        }
    }












// Toggle links & resources view more
$(document).ready(function() {
  $('#aff, #cs, #ge, #qp, #af, #tcs, #pp, #mt').hide();
  $('#affbtn').on('click', function() {
    $('#aff').show();
    $('#cs, #qp, #af, #tcs, #pp, #lr, #mt').hide();
  });
  $('#csbtn').on('click', function() {
    $('#cs').show();
    $('#aff, #qp, #af, #tcs, #pp, #lr, #mt').hide();
  });
  $('#qpbtn').on('click', function() {
    $('#qp').show();
    $('#aff, #cs, #af, #tcs, #pp, #lr, #mt').hide();
  });
  $('#afbtn').on('click', function() {
    $('#af').show();
    $('#aff, #cs, #qp, #tcs, #pp, #lr, #mt').hide();
  });
  $('#tcsbtn').on('click', function() {
    $('#tcs').show();
    $('#aff, #cs, #qp, #af, #pp, #lr, #mt').hide();
  });
  $('#ppbtn').on('click', function() {
    $('#pp').show();
    $('#aff, #cs, #qp, #af, #tcs, #lr, #mt').hide();
  });
  $('#mtbtn').on('click', function() {
    $('#mt').show();
    $('#aff, #cs, #qp, #af, #tcs, #pp, #lr').hide();
  });
  $('#lrbtn').on('click', function() {
    $('#lr').show();
    $('#aff, #cs, #qp, #af, #tcs, #pp, #mt').hide();
  });
  
  //below is the scroll to top function | links & resources page
  $('#affbtn, #csbtn, #qpbtn, #afbtn, #tcsbtn, #ppbtn, #lrbtn').click(function(){
    $('html, body').animate({scrollTop : 0},100);
    return false;
  });
});



//Trigger events when objects scroll into view

$(window).scroll(function () {
  var topOfWindow = $(window).scrollTop(),
      bottomOfWindow = topOfWindow + $(window).height();

  $('.cs_gauge_feedback').each(function () {
      var imagePos = $(this).offset().top;

      if(imagePos <= bottomOfWindow && imagePos >= topOfWindow){
          $(this).addClass('draw-gauge');
      }else{
          $(this).removeClass('draw-gauge');
      }
  });
});