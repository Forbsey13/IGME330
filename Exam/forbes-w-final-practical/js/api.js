// Fetches data from the Adoptable Creatures API
// - type: The type of creature to fetch (e.g., "cats", "dogs", "dragons")
// - callback: Function to run with the fetched data if successful
// - errorCallback: Function to run with an error message if the request fails

export const getData = (type, callback, errorCallback) => {
    fetch('https://people.rit.edu/anwigm/330/practical/api.php')
        .then(response => {
            if (response.ok) {
                return response.json(type)
            }
            return response.text().then(text => {
                throw text;
            })
        })
        .then(json => {     //The second promise is resolved
            callback(json);
        })
        .catch(error => {
            //error
            // console.log(error);
            errorCallback(error);
        })
};

// export function getData(type, callback, errorCallback) {
//     const API_URL = "https://people.rit.edu/anwigm/330/practical/api.php";
//     const xhr = new XMLHttpRequest();
  
//     // Open a GET request to the API
//     xhr.open("GET", `${API_URL}?type=${type}`, true);
  
//     // Handle the API response
//     xhr.onload = function () {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         try {
//           // Parse the response and call the success callback
          
//             // YOU FILL IN THE CODE HERE TO PARSE THE RESPONSE AND
//             // STORE IT IN THE VARIABLE data.

//             // let json = xhr.target.responseText;
//             // data = JSON.parse(json);

//             data = JSON.parse(xhr.responseText);

//           callback(data);
//         } catch (err) {
//           // Handle JSON parsing errors
//           errorCallback("Error parsing data from the server.");
//         }
//       } else {
//         // Handle HTTP errors
//         errorCallback("Error fetching data from the server.");
//       }
//     };
  
//     // Handle network errors
//     xhr.onerror = function () {
//       errorCallback("Network error occurred while fetching data.");
//     };
  
//     // Send the request
//     xhr.send();
//   }
  