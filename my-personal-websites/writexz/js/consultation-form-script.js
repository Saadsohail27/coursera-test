$(document).ready(function(){
    $("#consultation-form").submit(function(e){
        e.preventDefault(); // Prevent page reload

        $.ajax({
            type: "POST",
            url: "send_email.php", // Your email handling PHP script
            data: $(this).serialize(),
            success: function(response){
                showPopup("Your request for a free consultation was submitted successfully, a representative from Writexz will reach out to you soon", "#1e7a3a", 7000);
                $("#consultation-form")[0].reset(); // Clear form fields after submission
            },
            error: function(){
                showPopup("Your details could not be sent due to a network error or another error", "#c94141", 4000);
            }
        });
    });

    function showPopup(message, bgColor, duration) {
        $("#popup-message").text(message).css({
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
            $("#popup-message").fadeOut(500);
        }, duration);
    }
});
