$(document).ready(function(){
    $("#contact-form").submit(function(event){
        event.preventDefault(); // Prevent form submission reload

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var message = $("#message").val().trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            showContactPopup("All fields are required.", "#c94141", 4000);
            return;
        }

        $.ajax({
            type: "POST",
            url: "send_contact.php", // Ensure this PHP file exists
            data: { name: name, email: email, phone: phone, message: message },
            success: function(response){
                if(response.trim() === "success"){
                    showContactPopup("Thank you for reaching out to us. A member from our team will get back to you shortly.", "#1e7a3a", 7000);
                    $("#contact-form")[0].reset(); // Clear form fields
                } else {
                    showContactPopup("An error occurred. Please try again later.", "#c94141", 4000);
                }
            },
            error: function(){
                showContactPopup("Network error. Please check your connection.", "#c94141", 4000);
            }
        });
    });

    function showContactPopup(message, bgColor, duration) {
        $("#contact-popup-message").text(message).css({
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
            $("#contact-popup-message").fadeOut(500);
        }, duration);
    }
});
