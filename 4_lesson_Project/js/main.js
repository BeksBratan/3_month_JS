const tabs = document.querySelectorAll(".tabheader__item")
const tabParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")

// console.log(tabs, "tabs")
// console.log(tabParent, "tabParent");
// console.log(tabContent, "tabContent");


const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active")
}
hideTabContent()
showTabContent()

tabParent.addEventListener("click", (event) => {
    const target = event.target;
    // console.log(target);

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                console.log(i);
                hideTabContent();
                showTabContent(i);
            };
        });
    };
});



//Slider

let slideIndex = 0;
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > tabs.length && n > tabContent.length) {
        slideIndex += 1;
    };
    if (n < 0) {
        slideIndex = tabs.length && slideIndex == tabContent.length;
    };
    for (let slide of tabs) {
        slide.classList.remove("tabheader__item_active");
    };
    tabs[n].classList.add("tabheader__item_active");

    for (let slide of tabContent) {
        slide.style.display = "none";
    };
    tabContent[slideIndex].style.display = "block";
};

let timer = setInterval(function () {
    {
        slideIndex++;
        if (slideIndex > 3) {
            slideIndex = 0;
        };
    };
    showSlides(slideIndex);
}, 2000);


//Скролл













