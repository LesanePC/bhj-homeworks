window.addEventListener('scroll', function () {
    let heightWindow = window.innerHeight
    for (a=0; a<document.getElementsByClassName('reveal').length;a++){
        if (document.getElementsByClassName('reveal')[a].getBoundingClientRect().top>0&&document.getElementsByClassName('reveal')[a].getBoundingClientRect().top < heightWindow){
            document.getElementsByClassName('reveal')[a].classList.add('reveal_active')
        }else{
            document.getElementsByClassName('reveal')[a].classList.remove('reveal_active')
        }
    }
});