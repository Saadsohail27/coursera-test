$(document).ready(function(){
    $("#quote-form").submit(function(event){
        event.preventDefault(); // Prevent default form submission

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var message = $("#message").val().trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            showQuotePopup("All fields are required.", "#c94141", 4000);
            return;
        }

        $.ajax({
            type: "POST",
            url: "send_quote.php", // Ensure this PHP file exists
            data: { name: name, email: email, phone: phone, message: message },
            success: function(response){
                if(response.trim() === "success"){
                    showQuotePopup("Thank you for reaching out to us. A member from our team will get back to you shortly.", "#1e7a3a", 7000);
                    $("#quote-form")[0].reset(); // Clear form fields
                } else {
                    showQuotePopup("An error occurred. Please try again later.", "#c94141", 4000);
                }
            },
            error: function(){
                showQuotePopup("Network error. Please check your connection.", "#c94141", 4000);
            }
        });
    });

    function showQuotePopup(message, bgColor, duration) {
        $("#quote-popup-message").text(message).css({
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
            $("#quote-popup-message").fadeOut(500);
        }, duration);
    }
});
