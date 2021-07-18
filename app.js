const slider = document.querySelector("#slider-price-range");
const switchSlider = document.querySelector(".switch-slider");
const pricePerYear = document.querySelector(".pricePerYear");

const trialBtn = document.querySelector(".trial-btn");
const modal = document.querySelector(".modal-overlay");
const modalMsg = document.querySelector(".modal-msg");
const closeIcon = document.querySelector(".close-icon");

const package = { "10k": 8, "50k": 12, "100k": 16, "500k": 24, "1m": 36 };

function packageSelector() {
  viewNumber = Object.keys(package)[slider.value];
  monthlyPrice = Object.values(package)[slider.value];

  switchSlider.checked ? (monthlyPrice = monthlyPrice * 0.75) : (monthlyPrice = monthlyPrice);
  
  document.querySelector(".view-number").textContent = viewNumber;
  document.querySelector(".monthly-price").textContent = `$${monthlyPrice.toFixed(2)}`;
  document.querySelector(".yearly-price").textContent = `$${(monthlyPrice * 12).toFixed(2)}`;
}

slider.addEventListener("input", function () {
  packageSelector();
  slider.style.backgroundSize = `${((slider.value - slider.min) * 100) / (slider.max - slider.min)}% 100%`;
});

switchSlider.addEventListener("change", function () {
  packageSelector();
  pricePerYear.classList.toggle("toggle-pricePerYear");
});

trialBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
 });

closeIcon.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

