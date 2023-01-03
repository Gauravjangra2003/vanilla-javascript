const inputs = document.querySelectorAll('.container input');   

function Update() {
const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);   // That style the spacing blur & base color
}

inputs.forEach(input => input.addEventListener('change', Update));  // We listner to the change event and then it update
inputs.forEach(input => input.addEventListener('mousemove', Update));  // when we move mouse every single time that's be update
