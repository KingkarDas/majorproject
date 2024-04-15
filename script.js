document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault(); // Prevent default button behavior
    
    // Display confirm dialog
    var confirmation = confirm("Are you sure you want to submit the form?");
    
    // If user confirms
    if (confirmation) {
        // Submit the form
        document.getElementById("application-form").submit();
        alert("Form submitted successfully!");
    }
});
