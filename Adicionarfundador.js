function adicionarFundador() {
    const id = document.querySelector('#id-cad-startup__id-abaixo');
    const novoFundador = document.createElement('textarea');
    novoFundador.rows = 5;
    novoFundador.placeholder = 'Nome do fundador:\nSobrenome do fundador:\nResponsabilidades:\nExperiência profissional anterior:'
    id.appendChild(novoFundador);
}