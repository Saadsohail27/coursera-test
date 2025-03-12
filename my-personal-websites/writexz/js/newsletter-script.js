$(document).ready(function(){
    $("#newsletter-submit").click(function(){
        var email = $("#newsletter-email").val().trim();

        if(email === ""){
            showNewsletterPopup("Please enter a valid email address.", "#c94141", 4000);
            return;
        }

        $.ajax({
            type: "POST",
            url: "subscribe_newsletter.php", // PHP script to handle email sending
            data: { email: email },
            success: function(response){
                showNewsletterPopup("Thank you for subscribing to our newsletter!", "#1e7a3a", 7000);
                $("#newsletter-email").val(""); // Clear input field
            },
            error: function(){
                showNewsletterPopup("An error occurred. Please try again later.", "#c94141", 4000);
            }
        });
    });

    function showNewsletterPopup(message, bgColor, duration) {
        $("#newsletter-popup-message").text(message).css({
            "background": bgColor,
            "color": "#fff",
            "padding": "15px 20px",
            "border-radius": "8px",
            "position": "fixed",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "z-index": "9999",
            "display": "none",
            "font-size": "16px",
            "text-align": "center",
            "min-width": "300px",
            "max-width": "80%",
            "box-shadow": "0px 5px 15px rgba(0, 0, 0, 0.2)"
        }).fadeIn(400);

        setTimeout(function(){
            $("#newsletter-popup-message").fadeOut(500);
        }, duration);
    }
});
