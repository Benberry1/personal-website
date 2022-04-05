// Function for opening and closing landing page contact form.

const openForm = () => {
  document.querySelector(".form-popup").style.display = "block";
  document.querySelector(".container").style.visibility = "hidden";
};

const closeForm = () => {
  document.querySelector(".form-popup").style.display = "none";
  document.querySelector(".container").style.visibility = "visible";
};
