/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* Preloader
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1500);

  /* Tooltip
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* Mouseover
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });

  /* Toggle sidebar
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

  /* Product slider 
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $("#blogCarousel").carousel({
    interval: 5000,
  });
});

/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/* Animate js*/

(function ($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function (e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);

/* collapse js*/

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});

/* select flag js */

function onChangeCallback(ctr) {
  console.log("The country was changed: " + ctr);
  //$("#selectionSpan").text(ctr);
}

$(document).ready(function () {
  $(".niceCountryInputSelector").each(function (i, e) {
    new NiceCountryInput(e).init();
  });
});

var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-36251023-1"]);
_gaq.push(["_setDomainName", "jqueryscript.net"]);
_gaq.push(["_trackPageview"]);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
    ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();

// owl-carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});


/* date_picker js */

$(function () {
  $("#my_date_picker").datepicker({
    defaultDate: "09/22/2022 ",
  });
});

/* readmore js */

document.addEventListener("DOMContentLoaded", function () {
  // Get all the "Read More" links and paragraphs
  var readMoreLinks = document.querySelectorAll(".read_more");
  var paragraphs = document.querySelectorAll(".services_box p");

  // Iterate over each "Read More" link
  readMoreLinks.forEach(function (readMoreLink, index) {
    // Add click event listener to each "Read More" link
    readMoreLink.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the corresponding paragraph
      var paragraph = paragraphs[index];

      // Toggle the visibility of the paragraph
      if (paragraph.classList.contains("hidden")) {
        paragraph.classList.remove("hidden");
        readMoreLink.textContent = "Read Less";
      } else {
        paragraph.classList.add("hidden");
        readMoreLink.textContent = "Read More";
      }
    });
  });
});

// Dropdown on mouse hover
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 992px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

// video optimizer
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("video");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.load();
          observer.unobserve(video);
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(video);
});
