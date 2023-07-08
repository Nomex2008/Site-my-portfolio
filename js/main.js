const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-button-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = 'img/btn/2.png'
    } else {
        navBtnImg.src = 'img/btn/1.png'
    }
}

AOS.init({
    //once:true
});