'use strict';

function adicionarAtributos(retornados) {
	retornados[1].rows = 5;
	retornados[1].classList.add("form-control");
    retornados[1].required;

    retornados[0].appendChild(retornados[1]);
}

function adicionarConcorrentes() {
    const div = document.querySelector('#novo-concorrente');
    const novoConcorrente = document.createElement('textarea');
    novoConcorrente.placeholder = 'Empresa Concorrente:\nPorte:\nProdutos:\nServiços oferecidos:';

    return adicionarAtributos([div, novoConcorrente]);
}
function adicionarInvestidor() {
    const div = document.querySelector('#novo-investidor');
    const novoInvestidor = document.createElement('textarea');
    novoInvestidor.placeholder = 'Nome:\nResponsabilidades:\nValor investido:\nParticipação na empresa:\nEntre outros:';

    return adicionarAtributos([div, novoInvestidor]);
}
function adicionarEquipe() {
    const div = document.querySelector('#nova-equipe');
    const novaEquipe = document.createElement('textarea');
    novaEquipe.placeholder = 'Nome:\nCargo:\nResponsabilidades:\nExperiência profissional anterior:\nHabilidades:\nCompetências:';

    return adicionarAtributos([div, novaEquipe]);
}

function adicionarServiços() {
    const div = document.querySelector('#novo-serviço');
    const novoServiço = document.createElement('textarea');
    novoServiço.placeholder = 'Nome:\nCaracterísticas:\nBenefícios:\nPreço:\nEntre outros:';

    return adicionarAtributos([div, novoServiço]);
}


function adicionarProdutos() {
    const div = document.querySelector('#novo-produto');
    const novoProduto = document.createElement('textarea');
    novoProduto.placeholder = 'Nome:\nCaracterísticas:\nBenefícios:\nPreço:\nEntre outros:';

    return adicionarAtributos([div, novoProduto]);
}