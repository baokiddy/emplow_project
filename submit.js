$(function() {
    
    // When button is clicked store values from form fields into variables
    $('#send-btn').click(function()  {
        var text = $('#text-2').val();
        var email = $("#email-2").val();

        // Check if fields are empty 
        if (text=="" || email==""){
            alert("Please fill in all the fields");
        }
        // AJAX code to submit form
        else {
            $.ajax ({
                data: $(this).serialize(), 
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                cache: false,
                success: function() {
                    alert("Thank you for reaching out. You'll hear from us soon!");
                }
            });
        }
    })

    // Enlarge and add box-shadow to registration form on hover and click
    $('#enlarge').hover(function() {
        $("#enlarge").addClass('transition')
            .addClass('glow');
    
    }, function() {
        $("#enlarge").removeClass('transition')
            .removeClass('glow');
    });

    // Add box-shadow to registration form on hover and click
    $('#mod-btn').hover(function() {
        $("#mod-btn").addClass('glow');
    
    }, function() {
        $("#mod-btn").removeClass('glow');
    });

    // When button is clicked store values from form field
    $('#sub-btn').click(function()  {
        console.log('clicked');
        var email = $("#email").val();

        // Check if fields are empty 
        if (email=="") {
            alert("Please type in your email.");
        }
        // AJAX code to submit form
        else {
            $.ajax ({
                data: $(this).serialize(), 
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                cache: false,
                success: function() {
                    alert("Thank you for reaching out. You'll hear from us soon!");
                }
            });
        }
    });

    // When button is clicked store values from form field
    $('#msub-btn').click(function()  {
        console.log('clicked');
        var email = $("#email-2").val();

        // Check if fields are empty 
        if (email=="") {
            alert("Please type in your email.");
        }
        // AJAX code to submit form
        else {
            $.ajax ({
                data: $(this).serialize(), 
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                cache: false,
                success: function() {
                    alert("Thank you for reaching out. You'll hear from us soon!");
                }
            });
        }
    });

    

});



