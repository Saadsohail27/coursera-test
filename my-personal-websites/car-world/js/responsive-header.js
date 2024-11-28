$(document).ready(function() {
  // When the hamburger is clicked, toggle the menu visibility
  $('.hamburger').click(function() {
    $('.navbar-mobile').toggleClass('open'); // Toggle the mobile menu
    $('.hamburger').toggleClass('active'); // Animate the hamburger into an "X"
  });

  // Close the menu if the user clicks outside the menu
  $(document).click(function(e) {
    if (!$(e.target).closest('.navbar, .hamburger').length) {
      $('.navbar-mobile').removeClass('open');
      $('.hamburger').removeClass('active');
    }
  });
});