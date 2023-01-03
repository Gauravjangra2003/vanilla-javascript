const panels = document.querySelectorAll('.panel');

function Open(){
    this.classList.toggle('open');
}

function Active(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click' , Open));  // When we click the toggle open function
panels.forEach(panel => panel.addEventListener('transitionend' , Active));  // When we click the toggle active function