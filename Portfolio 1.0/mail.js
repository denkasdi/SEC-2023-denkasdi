// Initialize EmailJS with your user ID and the email service ID
emailjs.init("uzF4wwV_ZHgozaVei");

// Add an event listener to the form's submit button
document.getElementById("contact-form").addEventListener("submit", function(event) {
	event.preventDefault(); // prevent the default form submission

	// Get the sender's name, email address, subject, and message from the form
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	// Use the EmailJS API to send the email
	emailjs.send("service_hcudhin", "template_j7f2uzy", {
		"from_name": name,
		"from_email": email,
		"subject": subject,
		"message_html": message
	}).then(function(response) {
		console.log("SUCCESS", response);
	}, function(error) {
		console.log("FAILED", error);
	});
});
