const D20Normal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const Columnas = "ABCDEFGH"
const Eventos = ["Comienzo","Hambre","Peones Recargados","Francotirador","Muerte","Conquista","Magia Negra","Sacrificio Para Los Dioses","Erupcion Volcanica","Zombies","Amnesia","Defensor de la Reina","Muerte a la Reina","Guerra","El Libro Rojo","Linea","Doble Roll","Columna","Intercambio","Resurreccion","Prosperidad"]
$("#Dadubi").on("click",()=>{
        let Evento = D20Normal[Math.floor(Math.random() * D20Normal.length)]
        $("#Eventoimg").attr("src","img/"+Evento+".png")
        switch(Evento){
            case 8: genFila(); genColumna(); break;
            case 15: genFila(); break;
            case 16: DobleRoll(); break;
            case 17: genColumna(); break;
        }
        alert(Eventos[Evento])
})

function genFila(){
    let Fila = Math.floor(Math.random()*9)
    $("#Fila").attr("value",Fila)
}

function genColumna(){
    let Columna = Columnas[Math.floor(Math.random()*Columnas.length)]
        $("#Columna").attr("value",Columna)
}

function DobleRoll(){
    let output = ""
    for(i=0;i<2;i++){
        let Evento = D20Normal[Math.floor(Math.random() * D20Normal.length)]
        if(Evento == 20){
            i--
        }else{
            let texto = ""
        switch(Evento){
            case 8: texto += "("+Math.floor(Math.random()*9)+","; texto += Columnas[Math.floor(Math.random()*Columnas.length)]+")";
            case 15: texto += "("+Math.floor(Math.random()*9)+")";
            case 16: i++;
            case 17: texto += "("+Columnas[Math.floor(Math.random()*Columnas.length)]+")";
            default: texto += Eventos[Evento]+", "
        }
        output += texto
        }
    }
    alert(output)
}