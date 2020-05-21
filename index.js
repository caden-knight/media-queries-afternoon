let menuChecker = false
const mobileNav = document.getElementById('mobile-nav')
const mobileList = document.getElementById('mobile-nav-bar-items') 
toggle = () => {
        menuChecker = !menuChecker

    if (menuChecker === true) {
        mobileNav.style.display = 'flex'
        mobileList.style.display = 'block'
    }
    else {
        mobileNav.style.display = "none"
        mobileList.style.display = 'none'
    }
    console.log(menuChecker)
    console.log(mobileList)
    
} 


