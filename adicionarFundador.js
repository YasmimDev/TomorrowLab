function adicionarFundador() {
    const classe = document.getElementById('c-cad-startup__id-abaixo');
    const novoFundador = document.createElement('textarea');
    novoFundador.rows = 5;
    novoFundador.placeholder = 'Nome do fundador:\nSobrenome do fundador:\nResponsabilidades:\nExperiência profissional anterior:'
    classe.appendChild(novoFundador);
 }