let contador = 1;


setInterval( date, 2500)

function date(){
    document.getElementById('foto' + contador).checked =true;
    contador++;
    if(contador > 5){
        contador =1
    }
}