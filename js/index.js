/*document.querySelector("#restaurant_box").addEventListener("click", function() {
    this.className = "extended_menu";
  });
*/
// Get the div element where you want to insert the HTML code
var div = document.getElementById("restaurant_box");

// Create a new XMLHttpRequest to load the HTML file
var xhr = new XMLHttpRequest();
xhr.open("GET", "restaurant_contents/restaurant_closed.html", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // Set the div's innerHTML to the HTML code from the file
        div.innerHTML = xhr.responseText;
    }
};
xhr.send();

// Store the original HTML code in a variable
var originalHTML = div.innerHTML;

// Attach the click event listener
div.addEventListener("click", function() {
    // Check if the element's innerHTML is the original HTML code
    if (div.innerHTML == originalHTML) {
        this.className = "extended_menu";
        // Create a new XMLHttpRequest to load the HTML file
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "restaurant_contents/restaurant_expanded.html", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Set the element's innerHTML to the HTML code from the file
                div.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    } else {
        this.className = "closed_menu";
        // Set the element's innerHTML back to the original HTML code
        div.innerHTML = originalHTML;
    }
});
