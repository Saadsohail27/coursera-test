$(document).ready(function(){
    $("#feedback-form").submit(function(event){
        event.preventDefault(); // Prevent default form submission

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var message = $("#message").val().trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            showFeedbackPopup("All fields are required.", "#c94141", 4000);
            return;
        }

        $.ajax({
            type: "POST",
            url: "send_feedback.php", // Ensure this PHP file exists
            data: { name: name, email: email, phone: phone, message: message },
            success: function(response){
                if(response.trim() === "success"){
                    showFeedbackPopup("Thank you for your feedback!", "#1e7a3a", 7000);
                    $("#feedback-form")[0].reset(); // Clear form fields
                } else {
                    showFeedbackPopup("An error occurred. Please try again later.", "#c94141", 4000);
                }
            },
            error: function(){
                showFeedbackPopup("Network error. Please check your connection.", "#c94141", 4000);
            }
        });
    });

    function showFeedbackPopup(message, bgColor, duration) {
        $("#feedback-popup-message").text(message).css({
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
            $("#feedback-popup-message").fadeOut(500);
        }, duration);
    }
});
