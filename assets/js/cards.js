class cards {
    constructor() {
        this.posicaoDicas = document.querySelector(".section-dicas")
        this.cardEsq = document.querySelector(".card-esq")
        this.cardDir = document.querySelector(".card-dir")
    }

    scrollCards(){
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }
    
    calculoScroll() {
        const posicao = this.posicaoDicas.getBoundingClientRect()['y'];
        if(posicao >= 25) {
            this.cardEsq.style.transform = 'translate(-'+(posicao + 25)/10+'%)';
            this.cardDir.style.transform = 'translate('+(posicao - 25)/10+'%)';
        }
    }
}

export{ cards }

