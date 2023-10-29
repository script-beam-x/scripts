// JavaScript to handle dropdown functionality
const dropdownButtons = document.querySelectorAll(".dropbtn");
dropdownButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const currentDropdown = this.parentElement.querySelector(
      ".dropdown-content"
    );

    // Close all dropdowns
    document.querySelectorAll(".dropdown-content").forEach((content) => {
      if (content !== currentDropdown) {
        content.style.display = "none";
      }
    });

    // Toggle the current dropdown
    currentDropdown.style.display =
      currentDropdown.style.display === "block" ? "none" : "block";
  });
});
