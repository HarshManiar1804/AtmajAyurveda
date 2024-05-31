let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
// Function to show popup
function showPopup(num) {
  document.getElementById("popup" + num).style.display = "block";
  document.getElementById("overlay" + num).style.display = "block";
}

// Function to close popup
function closePopup(num) {
  document.getElementById("popup" + num).style.display = "none";
  document.getElementById("overlay" + num).style.display = "none";
}
function toggleData(option) {
  // Hide all data elements
  const allData = document.querySelectorAll(".data");
  allData.forEach((data) => {
    data.style.display = "none";
  });

  // Show the selected data element
  const selectedData = document.getElementById(option + "-data");
  if (selectedData) {
    selectedData.style.display = "block";
  }
}


