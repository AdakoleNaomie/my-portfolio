const cont1 = document.querySelectorAll(".cont1")

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
cont1.forEach(cont1 =>{
    observer.observe(cont1)
})

const cont2 = document.querySelectorAll(".cont2")

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
cont2.forEach(cont2 =>{
    observer.observe(cont2)
})

const cont3 = document.querySelectorAll(".cont3")

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
cont3.forEach(cont3 =>{
    observer.observe(cont3)
})

const cont4 = document.querySelectorAll(".cont4")

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
cont4.forEach(cont4 =>{
    observer.observe(cont4)
})

const cont5 = document.querySelectorAll(".cont5")

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
cont5.forEach(cont5 =>{
    observer.observe(cont5)
})

const cont6 = document.querySelectorAll(".cont6")

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
cont6.forEach(cont6 =>{
    observer.observe(cont6)
})

const sk = document.querySelectorAll(".sk")

const observer9 = new IntersectionObserver(entries => {
    
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
sk.forEach(sk =>{
    observer.observe(sk)
})
