setInterval(changeInfo, 1000)
function changeInfo(){
    let rotatorCase = document.getElementsByClassName('rotator')[0].getElementsByClassName('rotator__case')
    for (let item = 0; item<rotatorCase.length;item++){
        if (rotatorCase[item].className.includes('rotator__case_active')){
            rotatorCase[item].classList.remove('rotator__case_active')
            if(item==rotatorCase.length-1){
                rotatorCase[0].classList.add('rotator__case_active')
                return;
            }else{
                rotatorCase[item+1].classList.add('rotator__case_active')
                return;
            }
        }
    }
}