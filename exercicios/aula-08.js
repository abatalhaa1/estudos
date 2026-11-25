//Crie uma função chamada podeParticipar que receba idade e temIngresso.

// Ela deve devolver true quando a pessoa tiver 18 anos ou mais e ingresso. Caso contrário, deve devolver false.

// Teste a função com dois casos diferentes e mostre os resultados no console. Escreva sua tentativa e me mande; vou revisar sem entregar a solução pronta.


function podeParticipar(idade, temIngresso){
if (idade >= 18 && temIngresso ){
    return true;
}
else{
    return false;
}
}
console.log(podeParticipar(18,true));