document.addEventListener("DOMContentLoaded", function() {
    const navPlaceholder = document.getElementById("annav-placeholder");
    fetch("navan.html")
        .then(response => response.text())
        .then(data => navPlaceholder.innerHTML = data)
        .catch(error => console.error("Error loading navigation:", error));
});


window.onerror = function (message, file, line, col, error) {
    alert("Error occurred: " + error.message);
    return false;
 };
 
 window.addEventListener("error", function (e) {
    alert("Error occurred: " + e.error.message);
    return false;
 })