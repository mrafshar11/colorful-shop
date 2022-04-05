$(document).ready(function () {
    $('#product-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      rtl: true,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });

    $('#testi-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        rtl: true,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 2
          }
        }
      });

      $('body').scrollspy({ target: '.navbar-nav' })
  });


