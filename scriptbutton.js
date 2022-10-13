function teste(){
    var selectCodec = document.getElementById("codec").checked;
    var selectDeco = document.getElementById("deco").checked;
    var botao = document.getElementById("buttonx");
    
    if(selectCodec == true){
        botao.innerText = "Codificar Mensagem";
    }
    if(selectDeco == true){
        botao.innerText = "Decodificar Mensagem";
    }
    
}

