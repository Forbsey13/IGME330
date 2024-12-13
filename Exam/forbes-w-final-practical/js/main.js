// Import functions from api.js and ui.js

// ADD TWO LINES OF CODE HERE TO IMPORT THE getData FUNCTION from api.js
// AND THE THREE FUNCTIONS IN ui.js
import * as api from "./api.js";
import * as ui from "./ui.js";

// Get references to the dropdown and button
const creatureTypeSelect = document.querySelector("#creatureType");
const getDataButton = document.querySelector("#getDataButton");

// Set up event listener for the "Get Data" button
getDataButton.addEventListener("click", () => {
    const selectedType = creatureTypeSelect.value; // Get the selected type
    ui.clearError(); // Clear any existing error messages

    // Fetch data for the selected type
    api.getData(
        selectedType,
        (data) => {
            ui.renderResults(data); // Render the results on success
        },
        (errorMessage) => {
            ui.showError(errorMessage); // Show an error message on failure
        }
    );
});
