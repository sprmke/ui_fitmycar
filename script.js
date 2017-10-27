$(document).ready(function () {
  // Init Mats from changing color
  customizeMats();

  // Main Header Resized Width When Focus
  $('#fmc-main-header-search').focus(function () {
    $('.head-mid-tabs').attr('style', 'display: none;');
    $('.head-mid-search').css('width', '70%').css('padding', '25px 10px');
    $('#fmc-main-header-search').attr('placeholder', 'BMW 3 Series');
    $('.fmc-main-header-search-btn').attr('style', 'padding: 19px 30px; background: linear-gradient(to left, #284869, #0f4a6c); border-color: #0c4265; box-shadow: 0px 5px 15px #dde1eb;');
    $('.fa-search').css('color', '#fff');
  });
  $('#fmc-main-header-search').blur(function () {
    $('.head-mid-search').css('width', '22.5%');
    $('#fmc-main-header-search').attr('placeholder', 'Search Make and Model');
    $('#fmc-main-header-search').removeAttr('style');
    $('.fmc-main-header-search-btn').removeAttr('style');
    $('.head-mid-search').removeAttr('style');
    $('.fa-search').css('color', '#555');
    setTimeout(function() {
      $('.head-mid-tabs').removeAttr('style');
    }, 250);
  });

  // Contact Search Input Change Placeholder Text
  $('.contact-input').focus(function () {
    $('.contact-input').attr('placeholder', 'BMW 3 Series');
  });
  $('.contact-input').blur(function () {
    $('.contact-input').attr('placeholder', 'Search Make and Model');
  });

  // Hide thumb when hover over featured product car
  $('.featured-prod-card').each(function () {
    $(this).hover(function () {
      $(this).children('.thumbnail').css('animation', 'fadeOutThumb 0.4s 1 linear');
      $(this).children('.card-up').css('height', '180px').addClass('no-filter');
      $(this).children('.thumbnail').css('height', '70px').css('opacity', '0');
      $(this).css('transform', 'scale(1.04)');
    }, function () {
      $(this).children('.thumbnail').css('animation', 'fadeInThumb 0.4s 1 linear');
      $(this).children('.card-up').css('height', '150px').removeClass('no-filter');
      $(this).children('.thumbnail').css('height', '120px').css('opacity', '1');
      $(this).css('transform', 'scale(1)');
    });
  });

  // Hover on Timeline panels
  $('.timeline-panel').each(function () {
    $(this).hover(function () {
      $(this).siblings('.timeline-image').children('.fa').css('color', '#313948').css('transform', 'translate(-50%, -50%) scale(1.05)');
      $(this).siblings('.timeline-image').css('transform', 'scale(1.05)');
    }, function () {
      $(this).siblings('.timeline-image').children('.fa').css('color', '#3d485a').css('transform', 'translate(-50%, -50%) scale(1)');;
      $(this).siblings('.timeline-image').css('transform', 'scale(1)');
    });
  });
});

// Change Mat Colors Transition
function customizeMats() {
  setTimeout(function () {
    $('.customize-carpet-color').children('g.carpet-svg').attr('style', 'fill: #444;');
    $('.customize-binding-color').children('g.binding-svg').attr('style', 'fill: black');
    $('.customize-thread-color').children('g.thread-svg').attr('style', 'fill: gray');
  }, 500);
  setTimeout(function () {
    $('.customize-carpet-color').children('g.carpet-svg').attr('style', 'fill: #d8c287;');
    $('.customize-binding-color').children('g.binding-svg').attr('style', 'fill: gray');
    $('.customize-thread-color').children('g.thread-svg').attr('style', 'fill: #444');
  }, 2500);
  setTimeout(function () {
    $('.customize-carpet-color').children('g.carpet-svg').attr('style', 'fill: gray;');
    $('.customize-binding-color').children('g.binding-svg').attr('style', 'fill: #d8c287');
    $('.customize-thread-color').children('g.thread-svg').attr('style', 'fill: #fff');
  }, 4500);
  setTimeout(function () {
    $('.customize-carpet-color').children('g.carpet-svg').attr('style', 'fill: #d8c287;');
    $('.customize-binding-color').children('g.binding-svg').attr('style', 'fill: #eddb00');
    $('.customize-thread-color').children('g.thread-svg').attr('style', 'fill: #1256ed');
  }, 6500);
  setTimeout(function () {
    $('.customize-carpet-color').children('g.carpet-svg').attr('style', 'fill: #444;');
    $('.customize-binding-color').children('g.binding-svg').attr('style', 'fill: #1256ed');
    $('.customize-thread-color').children('g.thread-svg').attr('style', 'fill: #d8c287');
  }, 8500);
  setTimeout(function () {
    $('.customize-carpet-color').children('g.carpet-svg').attr('style', 'fill: #d8c287;');
    $('.customize-binding-color').children('g.binding-svg').attr('style', 'fill: red');
    $('.customize-thread-color').children('g.thread-svg').attr('style', 'fill: #fff');
  }, 10500);
  setTimeout(function () {
    customizeMats();
  }, 12000);
}


// Multi item carousel

$(document).ready(function () {
  $('.carousel-control.right').click(function () {
    $('.carousel-inner').removeClass('default');
    $('.item .col-sm-4').removeAttr('style');
    $('.item.active .col-sm-4:first-child').fadeOut(700);
  });
  $('.carousel-control.left').click(function () {
    $('.carousel-inner').removeClass('default');
    $('.item .col-sm-4').removeAttr('style');
    $('.item.active .col-sm-4:last-child').fadeOut(700);
  });

  // Instantiate the Bootstrap carousel
  $('.multi-item-carousel').carousel({
    interval: false
  });
  /*
  $('#theCarousel').on('slide.bs.carousel', function(event){
    $('.multi-item-carousel .item').each(function(){

  });*/

  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item
  $('.multi-item-carousel .item').each(function () {
    // get the next item in the list
    var next = $(this).next();
    // if there is no next, get the first element
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    // get the next-after-next item in the list
    if (next.next().length > 0) {
      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
    } else {
      // if there is no next-next item, grab the first item in the list
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this)).addClass('rightest');
    }
  });

  /*
  $(document).ready(function() {
    $(".multi-item-carousel").swiperight(function() {
      $(this).carousel('prev');
    });
    $(".multi-item-carousel").swipeleft(function() {
      $(this).carousel('next');
    });
  });
  */

  // $.mobile.loading().hide();
});
