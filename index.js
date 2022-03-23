class Noticia {
    constructor(titulo,dataPubli,resumo,texto){
    this.titulo = titulo;
    this.dataPubli = dataPubli;
    this.resumo = resumo;
    this.texto = texto;
    }

    mostrarNoticia(){
        return this.titulo + "\n" +  this.dataPubli + "\n" + this.resumo + "\n" + "\n" +  this.texto 
    }
}

let mos = new Noticia("Em dois dias de greve no metrô em Belo Horizonte, cerca de 70 mil usuários foram prejudicados, afirma CBTU", "23/03/2022", "Nesta quarta, categoria faz uma assembleia geral na Praça da Estação para definir rumos do movimento.", "De acordo com a companhia, o funcionamento das estações entre 10h até as 17h, no cumprimento da escala mínima, não atende a população.");
console.log(mos.mostrarNoticia())