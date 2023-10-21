'use strict';

function adicionarFundador() {
    const div = document.querySelector('#outro-fundador');
    const novoFundador = document.createElement('textarea');
    novoFundador.rows = 5;
    novoFundador.placeholder = 'Nome do fundador:\nSobrenome do fundador:\nResponsabilidades:\nExperiência profissional anterior:'
    novoFundador.classList.add("form-control");
    div.appendChild(novoFundador);
}
