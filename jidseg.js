let navLinks = document.querySelector(".nav-links");
let navContainer = document.getElementById("nav-container");
let theLinks = document.querySelectorAll(".nav-links ul li a");
let topContainer = document.querySelector(".top-container")
console.log(theLinks, topContainer, navContainer);
function openToggle(){
    navLinks.classList.add("open-navigation");
    navContainer.style.backgroundColor="rgba(0, 0, 0 ,.4)"
}
function closeToggle(){
    navLinks.classList.remove("open-navigation")
}
theLinks.forEach((link)=>{
    console.log(link);
    link.addEventListener("click", closeToggle);
    link.addEventListener("click", ()=>{
        topContainer.classList.add("load")
        setTimeout(()=>{
            topContainer.classList.remove("load")
        },1000)
    })
})

let scrollTop = document.getElementById("scroll-top");
console.log(scrollTop);
window.addEventListener("scroll", ()=>{
    if(window.scrollY>1000){
        scrollTop.classList.add("active")
    }else{
        scrollTop.classList.remove("active")
    }
})

let year = document.getElementById("year");
let date = new Date();
year.innerHTML=date.getFullYear();

let observeScale = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("scale-in")
        }else{
            entry.target.classList.remove("scale-in")
        }
    })
});

let scaleNoneElements = document.querySelectorAll(".no-scale");
scaleNoneElements.forEach((scaleNone)=>{
    observeScale.observe(scaleNone);
});

let observeBlured = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("animate-in")
        }else{
            entry.target.classList.remove("animate-in")
        }
    })
});

let bluredElements = document.querySelectorAll(".filter-blur");
bluredElements.forEach((blurElement)=>{
    observeBlured.observe(blurElement);
});

let leftTransform = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("animate-back")
        }else{
            entry.target.classList.remove("animate-back")
        }
    })
});

let leftElements = document.querySelectorAll(".left-element");
leftElements.forEach((leftElement)=>{
    leftTransform.observe(leftElement);
});
let rightElements = document.querySelectorAll(".right-element");
rightElements.forEach((rightElement)=>{
    leftTransform.observe(rightElement)
})


