//Crie podeEntrar com os parâmetros temIngresso e estaBloqueado. A pessoa pode entrar se tiver ingresso e não estiver bloqueada. Teste dois casos.

function podeEntrar (temIngresso, estaBloqueado){

    if (temIngresso && !estaBloqueado ){
        return ("pode entrar!");
    }
        else{
            return ("entrada negada, alguma das opções nao esta correta");
        }
}

console.log (podeEntrar(true, true));

console.log (podeEntrar(true,false));