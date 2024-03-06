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