function encrypt() {
    //verifica se o radio button está ativo
    var verifyCifra = document.getElementById("cifra").selected;
    //verifica se o radio button está ativo
    var verifyBase64 = document.getElementById("base64").selected;
    var deco = document.getElementById("deco").checked;
    var codec = document.getElementById("codec").checked;
    //recebe a frase/string passada pelo usuário
    var str = document.getElementById("textform").value;    
    //trata a String recebida pelo como como Number.
    var increase = parseInt(document.getElementById("inputnumber").value);
    var arr = [];
    //bloco de código bizarro que faz mágica e criptografa nossa frase
    if (verifyCifra == true) {
        for (var i = 0; i < str.length; i++) {
            alt = str[i].charCodeAt();
            if ((alt <= 64) || (alt >= 130)) {
                arr.push(String.fromCharCode(alt));
                continue;
            }
            else {
                if(codec == true){                
                    crypt = alt + increase;
                    arr.push(String.fromCharCode(crypt));
                }
                if(deco == true){
                    crypt = alt - increase;
                    arr.push(String.fromCharCode(crypt));
                }
            }
        }
        //altera o dom, inserindo no form html um array tratado pelo join, sem os commas padrões de um array.
        document.getElementById("outputform").value = arr.join("");
    }
    if (verifyBase64 == true) {
        // altera o dom, inserindo no form html o valor criptografado
        if(codec == true){
            document.getElementById("outputform").value = btoa(str);
            return;
        }
        if(deco == true){
            document.getElementById("outputform").value = atob(str);
            return;
        }
    }
}
