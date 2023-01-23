let section_container = document.querySelector("section .container");

function class_change (e){
    if (e.matches){
        section_container.classList.add("f-column-reverse")
    }
    else {
        section_container.classList.remove("f-column-reverse")
    }
}

let mediaQuery = window.matchMedia("(max-width:767px)");
mediaQuery.addListener(class_change)
class_change(mediaQuery)

// change the class inside container in section 2
let section_container2 = document.querySelector(".two .container");

function class_change2 (w){
    if (w.matches){
        section_container2.classList.add("f-column")
    }
    else {
        section_container2.classList.remove("f-column")
    }
}

let mediaQuery2 = window.matchMedia("(max-width:767px)");
mediaQuery2.addListener(class_change2)
class_change2(mediaQuery2)

// change the class inside container in section 3
let section_container3 = document.querySelector(".three .container");

function class_change3 (w){
    if (w.matches){
        section_container3.classList.add("f-column-reverse")
    }
    else {
        section_container3.classList.remove("f-column-reverse")
    }
}

let mediaQuery3 = window.matchMedia("(max-width:767px)");
mediaQuery3.addListener(class_change3)
class_change3(mediaQuery3)

// make the photo appear when scrolling
let containers_image = document.querySelectorAll("section .section-image");

window.onscroll = function (){
  for (let i of containers_image){
        if (window.scrollY +120 >= i.offsetTop){
            i.className = "section-image show"
        }
  }
}
