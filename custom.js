$("#projects").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      600: {
        items: 2,
        margin: 15,
      },
      900: {
        items: 3,
        margin: 30,
      },
      1200: {
        items: 3,
        margin: 30,
      },
    },
  });