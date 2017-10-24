$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      var name    = document.getElementById('name')
      var email   = document.getElementById('email')
      var phone   = document.getElementById("phone")
      var message = document.getElementById('message')
  
      if (!name.value || !email.value || !message.value) {
        // alertify.error("Please check your entries");
        alertify.error("Please check your entries")
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/onetonfoot@gmail.com',
          data: $("#contact-form").serialize(),
          dataType: 'json',
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success("Message sent");
        // alert("Message sent")
      }
    });
  });