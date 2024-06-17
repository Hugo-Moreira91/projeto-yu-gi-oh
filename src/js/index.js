const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

const cartoes = document.querySelectorAll('.cartao');
const qtdCartoes = cartoes.length;
let cartaoAtual = 0;

btnAvancar.addEventListener('click', function (){
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();
});

btnVoltar.addEventListener('click', function (){
    esconderCartaoSelecionado();

    if(cartaoAtual == 0){
        cartaoAtual = cartoes.length - 1;
    }else{
        cartaoAtual--;
    }
    mostrarCartao();
});

function mostrarCartao(){
    cartoes[cartaoAtual % qtdCartoes].classList.add('selecionado');
}

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}