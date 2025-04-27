// accordion faq home page


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      //   panel.style.borderBottom = "1px solid rgba(44, 92, 164, 1)";

    }
  });
}

// accordion faq home page end



//tabs term page end



$(document).ready(function () {
  $('.sidebar-menu a').on('click', function () {

    var scrollAnchor = $(this).attr('data-scroll'),
      scrollPoint = $('.content-right > div[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
      scrollTop: scrollPoint
    }, 500);

    return false;

  });


  $(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    $('.content-right .tabcontent').each(function (i) {
      if ($(this).position().top <= windscroll - 250) {
        $('.sidebar-menu a.active').removeClass('active');
        $('.sidebar-menu a').eq(i).addClass('active');
      }
    });



  }).scroll();

//   $(window).scroll(function () {
//     var windscroll = $(window).scrollTop();
//     $('.content-right .tabcontent').each(function (i) {
//     if($(window).width() < 991 && $(this).position().top <= windscroll - 10)
//     {
//       $('.sidebar-menu a.active').removeClass('active');
//       $('.sidebar-menu a').eq(i).addClass('active');
//     } 
// 	});
// }).scroll(); 
});




jQuery(document).ready(function () {

  var get_btn_text2 = jQuery("ul.sidebar-menu li:first-child a").text();

  console.log(get_btn_text2);

  jQuery('.show_mobile_heading').html(get_btn_text2);

  jQuery('.show_mobile_heading').click(function () {

    jQuery('.mobile-tab-list').toggleClass('new_class');
    jQuery(this).toggleClass('new_active');

  });

  jQuery('.tablink').click(function () {

    jQuery('ul.sidebar-menu').removeClass('new_class');
    jQuery('.show_mobile_heading').removeClass('new_active');

    var get_val = jQuery(this).text();
    jQuery('.show_mobile_heading').html(get_val);

  });

});