const myname = document.querySelectorAll(".myname")

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
myname.forEach(myname =>{
    observer.observe(myname)
})

const myname1 = document.querySelectorAll(".myname1")

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
myname1.forEach(myname1 =>{
    observer.observe(myname1)
})

const image = document.querySelectorAll(".image")

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
image.forEach(image =>{
    observer.observe(image)
})

