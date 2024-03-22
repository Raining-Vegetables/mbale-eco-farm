
document.addEventListener("DOMContentLoaded", function () {
  // Get all the "Read More" links and paragraphs
  var readMoreLinks = document.querySelectorAll(".read_more");
  var paragraphs = document.querySelectorAll(".services_box p");

  // Iterate over each "Read More" link
  readMoreLinks.forEach(function (readMoreLink, index) {
    // Add click event listener to each "Read More" link
    readMoreLink.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the corresponding paragraph
      var paragraph = paragraphs[index];

      // Toggle the visibility of the paragraph
      if (paragraph.classList.contains("hidden")) {
        paragraph.classList.remove("hidden");
        readMoreLink.textContent = "Read Less";
      } else {
        paragraph.classList.add("hidden");
        readMoreLink.textContent = "Read More";
      }
    });
  });
});