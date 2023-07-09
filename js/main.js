const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-button-img');
const body = document.querySelector('#body');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.classList.add("active")
        body.classList.add("block");
    } else {
        navBtnImg.classList.remove("active")
        body.classList.remove("block");
    }
    
}

AOS.init({
    //once:true
});