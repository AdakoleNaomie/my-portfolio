const cards = document.querySelectorAll(".card")

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
cards.forEach(card =>{
    observer.observe(card)
})

const card2s = document.querySelectorAll(".card2")

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
card2s.forEach(card2 =>{
    observer.observe(card2)
})
const txts = document.querySelectorAll(".txt")

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    // threshold: 1,
    rootMargin:"100px",
})
txts.forEach(txt =>{
    observer.observe(txt)
})
