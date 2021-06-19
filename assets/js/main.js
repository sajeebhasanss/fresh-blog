const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const navList = document.getElementById('nav-list')

/*Navbar js*/
function openn(){
    openBtn.style.display = "none";
    closeBtn.style.display = "inherit";
    navList.style.marginLeft = "0px";
}

function closee(){
    openBtn.style.display = "inherit";
    closeBtn.style.display = "none";
    navList.style.marginLeft = "-991px";
}

function navClose() {
    if (window.innerWidth<992) {
        navList.style.marginLeft = "-991px"
        console.log(window.innerWidth)
    }
}
/*Navbar scroll js*/
window.addEventListener('scroll',function(){
    let navbar = this.document.getElementById('navbar');
    navbar.classList.toggle('scroll-nav', window.scrollY > 300);
})

