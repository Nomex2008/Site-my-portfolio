const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-button-img');
const body = document.querySelector('#body');
const btn = document.querySelector('#btn')
const projImg = document.querySelector('#projImg')
const projImg2 = document.querySelector('#projImg2')
const projImg3 = document.querySelector('#projImg3')
const projImg4 = document.querySelector('#projImg4')

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.classList.add("active")
        body.classList.add("block");
    } else {
        navBtnImg.classList.remove("active")
        body.classList.remove("block");
    }
    
}
btn.onclick = () => {
    if (btn.classList.toggle('active')) {
        btn.classList.add("active")
        projImg.classList.add("active")
        projImg2.classList.add("active")
        projImg3.classList.add("active")
        projImg4.classList.add("active")
    } else {
        btn.classList.remove("active")
        projImg.classList.remove("active")
        projImg2.classList.remove("active")
        projImg3.classList.remove("active")
        projImg4.classList.remove("active")
    }
    
}

AOS.init({
    disable: function() {
        var maxWidth = 500;
        return window.innerWidth < maxWidth;
      }
});