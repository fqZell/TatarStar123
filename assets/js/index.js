const init = () => {
    headerModal()
    swiper()
    headerBcc()
}

const headerModal = () => {

    const headerBurger = document.querySelectorAll(".header-modal__icons")

    const headerModalEl = document.querySelector(".header-modal")

    const overlayEl = document.querySelector('.overlay')

    const headerClose = document.querySelector(".header-modal__icons.close")

    const headerOpen = document.querySelector(".header-modal__icons.open")

    const bodyEl = document.querySelector("body")

    if (!headerBurger || !headerModalEl || !overlayEl || !headerClose || !headerOpen || !bodyEl) return false


    headerBurger.forEach(burger => {
        burger.addEventListener("click", () => {
            headerModalEl.classList.toggle("active")
            overlayEl.classList.toggle("active")
            headerClose.classList.toggle("active")
            headerOpen.classList.toggle("active")
            bodyEl.classList.toggle("active")
        })
    });
    

}

const swiper = ()  => {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        //   delay: 2500,
          delay: 250000000000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
    });
}

const headerBcc = () => {

    const headerEl = document.querySelector("header")
    const headerIcons = document.querySelector(".fa-basket-shopping")
    
    if (!headerEl || !headerIcons) return false

    window.addEventListener("scroll", () => {

        if (window.scrollY > window.innerHeight/6) {
            headerEl.style.backgroundColor = "#828282"
            headerEl.style.color = "#333333"
            headerIcons.style.color = "#333333"
        } else {
            headerEl.style.backgroundColor = "transparent"
            headerEl.style.color = "#000000"
            headerIcons.style.color = "#333333"
        }

    })

}

document.addEventListener("DOMContentLoaded", init);