// Updates the DOM to display the fetched data
// - data: An array of objects containing creature details
export const renderResults = (data) => {
    console.log("here")
    console.log(data)
    const resultsContainer = document.querySelector("#results");
    resultsContainer.innerHTML = ""; // Clear existing results

    data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "result-card";

        // Add content to the card
        card.innerHTML = `
        <div class="column is-one-quarter>
        <div class="card">
        <div class="card-image">
        <img src="${item.picture}" alt="${item.name}">
        </div>
        <div class="card-content">
        <div class="media">
        <div class="media-content">
        <p class="title is-4">${item.name}</h2>
        <p class="subtitle is-6"><strong>Breed:</strong> ${item.breed}</p>
        <div class="content">
        <p><strong>Location:</strong> ${item.location}</p>
        </div>
        </div>
        </div>
        </div>
        </div>
      `;

        // ADD THE LINE OF CODE HERE THAT WILL ADD THE CARD 
        // TO END OF THE RESULTS CONTAINER
        document.querySelector("#results").innerHTML = card.innerHTML;
    });
};

// Displays an error message on the page
// - message: The error message to show
export const showError = (message) => {
    const errorMessage = document.querySelector("#errorMessage");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden"); // Make the error visible
    errorMessage.appendClass(clearError()); //Hide original error
};

// Clears any visible error message from the page
export const clearError = () => {
    const errorMessage = document.querySelector("#errorMessage");
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden"); // Hide the error
};
