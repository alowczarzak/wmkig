document.addEventListener("DOMContentLoaded", function() {
    const navPlaceholder = document.getElementById("annav-placeholder");
    fetch("navan.html")
        .then(response => response.text())
        .then(data => navPlaceholder.innerHTML = data)
        .catch(error => console.error("Error loading navigation:", error));
});
