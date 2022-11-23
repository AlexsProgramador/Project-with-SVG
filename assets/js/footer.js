class footer {
    constructor(){
        this.filtroTurbulencia = document.getElementById("filtro-turbulencia");
    }
    effectOnda () {
        TweenMax.to(this.filtroTurbulencia, 20, {
            attr: {baseFrequency: 0.03,}, repeat: -1, yoyo: true})
    }
}
export {footer};