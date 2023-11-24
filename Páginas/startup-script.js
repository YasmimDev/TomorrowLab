'use strict';

function adicionarAtributos(retornados) {
	retornados[1].rows = 5;
	retornados[1].classList.add("form-control");
    retornados[1].required;

    retornados[0].appendChild(retornados[1]);
}

function adicionarFundador() {
    const div = document.querySelector('#novo-fundador');
    const novoFundador = document.createElement('textarea');
    novoFundador.placeholder = 'Nome do fundador:\nSobrenome do fundador:\nResponsabilidades:\nExperiência profissional anterior:';

    return adicionarAtributos([div, novoFundador]);
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
    novaEquipe.placeholder = 'Nome:\nCargo:\nResponsabilidades:\nExperiência profissional anterior:';

    return adicionarAtributos([div, novaEquipe]);
}
