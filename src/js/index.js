/* OB1-> quando clicar no botão do personagem na lista, marcar o botão como selecionado 
passo 1- pegar os botões no JS p/ poder verificar quando user clicar em cima de um deles
passo 2- adicionar a classe "selecionado" no botão que o usuário clicou
passo 3- verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

OB2 - quando clicar no botão do personagem, mostrar as infos do personagem
  passo 1- pegar os personagens no JS p/ poder mostrar ou esconder ele
  passo 2- adicionar a classe "selecionado" no personagem que o usuário clicou
  passo 3- verificar se já existe um personagem, se sim, devemos remover a seleção dele 
  */

const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPers(indice);
        botao.classList.add("selecionado");
    });
});

function desselecionarPers(indice) {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
    personagens[indice].classList.add("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
