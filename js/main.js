const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-button-img');
const body = document.querySelector('#body');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = 'img/btn/2.png'
        body.classList.add("block");
    } else {
        navBtnImg.src = 'img/btn/1.png'
        body.classList.remove("block");
    }
}

AOS.init({
    //once:true
});