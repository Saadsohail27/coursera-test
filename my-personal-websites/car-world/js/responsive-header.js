$(document).ready(function () {
  // When the hamburger is clicked, toggle the menu and overlay visibility
  $('.hamburger').click(function () {
    $('.navbar-mobile').toggleClass('open');
    $('.hamburger').toggleClass('active');
    $('.navbar-overlay').toggleClass('open'); // Toggle the overlay
  });

  // Close the menu and overlay if the user clicks outside the menu
  $(document).click(function (e) {
    if (!$(e.target).closest('.navbar-mobile, .hamburger').length) {
      $('.navbar-mobile').removeClass('open');
      $('.hamburger').removeClass('active');
      $('.navbar-overlay').removeClass('open'); // Close the overlay
    }
  });

  // Close the menu and overlay when the overlay itself is clicked
  $('.navbar-overlay').click(function () {
    $('.navbar-mobile').removeClass('open');
    $('.hamburger').removeClass('active');
    $(this).removeClass('open'); // Close the overlay
  });
});