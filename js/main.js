document.getElementById('portfolioAll').onclick=function () {
    portfolioBar.className='bar state-1'
}
document.getElementById('portfolioFramework').onclick=function () {
    portfolioBar.className='bar state-2'
}
document.getElementById('portfolioVallina').onclick=function () {
    portfolioBar.className='bar state-3'
}

window.onscroll=function(e){
    if(window.scrollY > 30){
        document.getElementById('topNavBar').classList.add('sticky')
    }else{
        document.getElementById('topNavBar').classList.remove('sticky')
    }
}

let liTags = document.querySelectorAll('nav.menu > ul > li')
for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function(e){
        e.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (e) {
        e.currentTarget.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for(let i=0; i<aTags.length; i++){
    aTags[i].onclick = function(e){
        e.preventDefault()
        let a = e.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        window.scrollTo(0, top - 75)
    }
}