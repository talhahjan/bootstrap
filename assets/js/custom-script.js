const dropDowns = document.querySelectorAll(".dropdown-item");
const searchInput = document.querySelector("#search-query");
const visibilityBtn = document.querySelector("#eye");
const categories = document.querySelector("#categories");
for (let i = 0; i < dropDowns.length; i++) {
  dropDowns[i].addEventListener("click", function (event) {
    searchInput.setAttribute(
      "placeholder",
      `Search in ${this.innerText} Department`
    );
  });
}

searchInput.addEventListener("focus", function () {
  categories.classList.add("search-cate");
});

searchInput.addEventListener("blur", function () {
  categories.classList.remove("search-cate");
});

for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", function (event) {
    searchInput.setAttribute(
      "placeholder",
      `Search in ${this.innerText} Department`
    );
  });
}

searchInput.addEventListener("focus", function () {
  categories.classList.add("search-cate");
});

searchInput.addEventListener("blur", function () {
  categories.classList.remove("search-cate");
});

visibilityBtn.addEventListener("click", function () {
  currentClass=visibilityBtn.classList.contains('fa-eye');
 
visibilityBtn.classList.toggle('fa-eye');
 visibilityBtn.classList.toggle('fa-eye-slash');
document.getElementById("password").setAttribute("type", currentClass ? "password": "text");
  
});
