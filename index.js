//swiper js

/*
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  //grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});*/











const header = document.getElementById("header")

const body = document.querySelector("body")

const overlay = document.querySelector(".overlay")

const btnHamburger = document.querySelector("#btnHamburger")

const slideElems = document.querySelectorAll(".has-fade")

btnHamburger.addEventListener("click", ()=>{
    if(btnHamburger.classList.contains("open")){
        btnHamburger.classList.remove("open")
        document.body.style.overflow = 'visible'
        slideElems.forEach(function(element){
          
            element.classList.add("slide-out")
        element.classList.remove("slide-in")
        //hero.classList.remove("no-scroll")

        })
        
    }

    else {
        btnHamburger.classList.add("open")
        document.body.style.overflow = 'hidden'

        slideElems.forEach(function(element){

            element.classList.add("slide-in")
            element.classList.remove("slide-out")
           // hero.classList.add("no-scroll")
        })
        
    }
})



// change header

window.addEventListener("scroll", ()=>{
  if (scroll > 5 ) {
    header.classList.add("header-active")
  }
  else{
    header.classList.remove("header-active")
  }
})


// section link

const sections = document.querySelectorAll("section[id]")

console.log(sections)

sections.forEach(section =>{
  const sectionHeight = section.offSetHeight,
        sectionTop = section.offSetTop - 60;

        let navId = document.querySelector(`.menu-content a[href*= ${section.id}]`)

       // if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight){

        //  navId.classList.add("active")
          
       // }
      //  else {
          //navId.classList.remove("active")
      //  }

      //  console.log(sections)
        
})




