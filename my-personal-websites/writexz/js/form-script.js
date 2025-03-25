$(document).ready(function(){
    $("#service-form").submit(function(event){
        event.preventDefault(); // Prevent page reload

        // Collect form data
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var services = $("#services").val();
        var message = $("#message").val().trim();

        // Basic validation check
        if (name === "" || email === "" || phone === "" || services === "" || message === "") {
            showServicePopup("All fields are required.", "#c94141", 4000);
            return;
        }

        $.ajax({
            type: "POST",
            url: "send_service.php", // PHP file to handle submission
            data: { 
                name: name, 
                email: email, 
                phone: phone, 
                services: services, 
                message: message 
            },
            success: function(response){
                if(response.trim() === "success"){
                    showServicePopup("Thank you for reaching out to us. A member from our team will get back to you shortly.", "#1e7a3a", 7000);
                    $("#service-form")[0].reset(); // Clear the form on success
                } else {
                    showServicePopup("An error occurred. Please try again later.", "#c94141", 4000);
                }
            },
            error: function(){
                showServicePopup("Network error. Please check your connection.", "#c94141", 4000);
            }
        });
    });

    function showServicePopup(message, bgColor, duration) {
        $("#service-popup-message").text(message).css({
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
            $("#service-popup-message").fadeOut(500);
        }, duration);
    }
});