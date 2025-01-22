let arrTabs = Array.from(document.getElementsByClassName('tab'))
let arrContents = Array.from(document.getElementsByClassName('tab__content'))
arrTabs.forEach((el, el2) => el.addEventListener('click',function (event){
    if(arrTabs.findIndex(el => el.className.includes('tab_active'))==-1){
        return;
    }else{
        const index = arrTabs.findIndex(el => el.className.includes('tab_active'))
        arrContents[index].classList.remove('tab__content_active')
        arrTabs[index].classList.remove('tab_active')
    }
    event.target.classList.add('tab_active')
    arrContents[el2].classList.add('tab__content_active')
    })
)