const header = document.querySelector("header");


// =============================
// Sticky Header
// =============================

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

}



// =============================
// Scroll Reveal Animation
// =============================

const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);


function revealElements() {

    const windowHeight = window.innerHeight;


    reveals.forEach((element)=>{


        const elementTop =
        element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 120){

            element.classList.add("active");

        }


    });


}


// تشغيل عند السكرول
window.addEventListener(
    "scroll",
    revealElements
);


// تشغيل أول ما الصفحة تحمل
window.addEventListener(
    "load",
    revealElements
);