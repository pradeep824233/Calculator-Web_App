// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Select the input box
    const inputBox = document.getElementById("inputBox");
    
    // Select all the buttons
    const buttons = document.querySelectorAll(".button");

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Get the value of the clicked button
            const value = this.textContent;

            // If it's the AC button, clear the input box
            if (value === "AC") {
                inputBox.value = "";
            }
            // If it's the DEL button, remove the last character
            else if (value === "DEL") {
                inputBox.value = inputBox.value.slice(0, -1);
            }
            // If it's the = button, evaluate the expression in the input box
            else if (value === "=") {
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (error) {
                    inputBox.value = "Error";
                }
            }
            // For other buttons, simply append their value to the input box
            else {
                inputBox.value += value;
            }
        });
    });
});
