var checkbox       = document.querySelector('input[name=theme]');
var derechaUno     = document.querySelector('.derecha1');
var izquierdaUno   = document.querySelector('.izquierda1');
var derechaDos     = document.querySelector('.derecha2');
var izquierdaDos   = document.querySelector('.izquierda2');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
        derechaUno.setAttribute('src', './assets/images/chevron-right.svg');
        derechaDos.setAttribute('src', './assets/images/chevron-right.svg');
        izquierdaUno.setAttribute('src', './assets/images/chevron-left.svg');
        izquierdaDos.setAttribute('src', './assets/images/chevron-left.svg');

    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
        derechaUno.setAttribute('src', './assets/images/chevron-right2.svg');
        derechaDos.setAttribute('src', './assets/images/chevron-right2.svg');
        izquierdaUno.setAttribute('src', './assets/images/chevron-left2.svg');
        izquierdaDos.setAttribute('src', './assets/images/chevron-left2.svg');
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
            window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}