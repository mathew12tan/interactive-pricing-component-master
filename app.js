const slider = document.querySelector("#slider-price-range");
const switchSlider = document.querySelector(".switch-slider");

let viewNumber = document.querySelector(".view-number").textContent;
let monthlyPrice = parseInt(document.querySelector(".monthly-price").textContent.slice(1, 3));

const trialBtn = document.querySelector(".trial-btn");
const modal = document.querySelector(".modal-overlay");
const modalMsg = document.querySelector(".modal-msg");
const closeIcon = document.querySelector(".close-icon");

function checkSlider() {
    switch (slider.value) {
        case "0":
            viewNumber = "10k";
            monthlyPrice = 8;
            break;
        case "25":
            viewNumber = "50k";
            monthlyPrice = 12;
            break;
        case "50":
            viewNumber = "100k";
            monthlyPrice = 16;
            break;
        case "75":
            viewNumber = "500k";
            monthlyPrice = 24;
            break;
        case "100":
            viewNumber = "1m";
            monthlyPrice = 36;
            break;
    }
    switchSlider.checked ? monthlyPrice = monthlyPrice * 0.75 : monthlyPrice = monthlyPrice;
    document.querySelector(".monthly-price").textContent = `$${monthlyPrice}.00`;
    document.querySelector(".view-number").textContent = viewNumber;
}

slider.oninput = function () {
    checkSlider();
    slider.style.backgroundSize = `${(slider.value - slider.min) * 100 / (slider.max - slider.min)}% 100%`;
}

switchSlider.addEventListener("click", function () {
    checkSlider();
})

trialBtn.addEventListener("click", function(){
    modal.classList.add("show-modal");
    modalMsg.innerHTML = `<p class="modal-msg">You have successfully sign up for <span>$${monthlyPrice}.00/month</span> package with <span>${viewNumber}</span> pageviews.</p>`;  
})

closeIcon.addEventListener("click", function(){
    modal.classList.remove("show-modal");
})


