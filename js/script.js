
// Set Navbar Underline base on page
const navLinks = document.querySelectorAll('nav ul li')
const currentPage = window.location.href.split('/').pop()
navLinks.forEach( navLink => {
    let navLinkHref = navLink.innerHTML.split(`"`)[1]
    if(navLinkHref !== currentPage) return
    navLink.setAttribute('class','currentPage')
})


// Changes index.htmls background color based on the buttons pressed by the user
let colourButtons = document.querySelectorAll('.colPicker')

colourButtons.forEach( button => {
    button.addEventListener( 'click', (ev) => {
        document.body.setAttribute('class', `${(ev.target.textContent.toLowerCase())}Back`)
    })
})

// Rotate Images Function
const imagesArray =  [ 'view1.jpg', 'view2.jpg', 'view3.jpg', 'view4.jpg', 'view5.jpg','view6.jpg' ]
if(currentPage == "index.html") {
    document.getElementById('myImages').addEventListener('click', nextImage) 
    // Rotate Images on a timer of 2000 miliseconds
    setInterval(nextImage, 2000)
}
function nextImage(){
    const img = document.getElementById('myImages')
    let imgSrc = img.getAttribute('src')
    let imgIndex = imagesArray.findIndex( element => element == imgSrc.split('images/')[1])
    imgIndex += 1
    if(imgIndex >= imagesArray.length) imgIndex = 0
    img.setAttribute('src', `images/${imagesArray[imgIndex]}`)
}