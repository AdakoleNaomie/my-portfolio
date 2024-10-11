const txt1 = document.querySelectorAll(".txt1")

const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
txt1.forEach(txt1 =>{
    observer.observe(txt1)
})

const txt2 = document.querySelectorAll(".txt2")

const observer2 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
txt2.forEach(txt2 =>{
    observer.observe(txt2)
})

const txt3 = document.querySelectorAll(".txt3")

const observer3 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
txt3.forEach(txt3 =>{
    observer.observe(txt3)
})

const txts = document.querySelectorAll(".txts")

const observer4 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
txts.forEach(txts =>{
    observer.observe(txts)
})

const txts2 = document.querySelectorAll(".txts2")

const observer5 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
txts2.forEach(txts2 =>{
    observer.observe(txts2)
})

const txts3 = document.querySelectorAll(".txts3")

const observer8 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
txts3.forEach(txts3 =>{
    observer.observe(txts3)
})

const txts4 = document.querySelectorAll(".txts4")

const observer6 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
txts4.forEach(txts4 =>{
    observer.observe(txts4)
})

const txts5 = document.querySelectorAll(".txts5")

const observer7 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
txts5.forEach(txts5 =>{
    observer.observe(txts5)
})

const image1 = document.querySelectorAll(".image1")

const observer9 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

       
        console.log(entries)
    })
}, {
    rootMargin:"-100px",
})
image1.forEach(image1 =>{
    observer.observe(image1)
})

const image2 = document.querySelectorAll(".image2")

const observer10 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

       
        console.log(entries)
    })
}, {
    rootMargin:"-100px",
})
image2.forEach(image2 =>{
    observer.observe(image2)
})

const image3 = document.querySelectorAll(".image3")

const observer11 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

       
        console.log(entries)
    })
}, {
    rootMargin:"-100px",
})
image3.forEach(image3 =>{
    observer.observe(image3)
})

const image6 = document.querySelectorAll(".image6")

const observer12 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

       
        console.log(entries)
    })
}, {
    rootMargin:"-100px",
})
image6.forEach(image6 =>{
    observer.observe(image6)
})

const image7 = document.querySelectorAll(".image7")

const observer13 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

       
        console.log(entries)
    })
}, {
    rootMargin:"-100px",
})
image7.forEach(image7 =>{
    observer.observe(image7)
})

const text1 = document.querySelectorAll(".text1")

const observer14 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

       
        console.log(entries)
    })
}, {
    rootMargin:"-100px",
})
text1.forEach(text1=>{
    observer.observe(text1)
})
