$(document).ready(function () {
    $("#registerForm").submit(function (e) {
        e.preventDefault(); // Prevent form from submitting normally

        var formData = $(this).serialize(); // Collect form data

        $.ajax({
            type: "POST",
            url: "register.php",
            data: formData,
            success: function (response) {
                if (response.includes("success")) {
                    showPopup("Your details were submitted successfully, a representative from Zikar Flow will reach out to you soon", "#165B33", 7000);
                    $("#registerForm")[0].reset(); // Clear the form on success
                    grecaptcha.reset(); // Reset reCAPTCHA
                } else if (response.includes("recaptcha failed")) {
                    showPopup("You failed to verify your reCAPTCHA", "#c94141", 4000);
                } else {
                    showPopup("Your details could not be sent due to a network error", "#c94141", 4000);
                }
            },
            error: function () {
                showPopup("Your details could not be sent due to a network error", "#c94141", 4000);
            }
        });
    });

    function showPopup(message, bgColor, duration) {
        $("#statusPopup").text(message).css({
            "background-color": bgColor,
            "color": "#FFFFFF",
            "padding": "15px 25px",
            "position": "fixed",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "border-radius": "8px",
            "box-shadow": "0px 4px 10px rgba(0, 0, 0, 0.2)",
            "font-size": "16px",
            "z-index": "1000",
            "opacity": "0",
            "display": "block"
        }).animate({ opacity: 1 }, 500);

        setTimeout(function () {
            $("#statusPopup").animate({ opacity: 0 }, 500, function () {
                $(this).hide();
            });
        }, duration);
    }
});
