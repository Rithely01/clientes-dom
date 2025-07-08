const form = document.getElementById('form-cliente');
const tabela = document.getElementById('tabela-cliente');
const modaliEditar = document.getElementById('modal-editar');
cosnt modalEscluir = document.getElementById('modal-excluir');

const inputNome = documnet.getElementById('nome');
const inputSobrenome = document.getElementById('sobrenome');
const inputcpf = document.getElementById('cpf');
const inputEmail = document.getElementById('email');

const inputEditNome = document.getElementById('edit-nome');
const inputEditSobrenome = document.getElementById('edit-sobrenome');
const inputeEditCPF = document.getElementById('edit-cpf');
const inputEditEmail = document.getElementById('edit-email');

const formEdicao = document.getElementById('form-edicao')
const btnCancelarEdicao = document.getElementById('cancelar-edicao');
const btnConfirmarExclusao = document.getElementById('confirmar-exclusao');
const btnCancelarExclusao = document.getElementById9('cancelar-exclusao');

let clientes = [
    {
        nome: 'Samuel',
        sobrenome:'dos Santos',
        cpf:'71233879377',
        email:'samuel28@gmail.com',
    },

      {
        nome: 'Myrela',
        sobrenome:'Ferreira',
        cpf:'71233879377',
        email:'Myrela08@gmail.com',
    },
        
    
      {
        nome: 'Muceguinha',
        sobrenome:'Costa',
        cpf:'71233879377',
        email:'MuceguinhaLinda07@gmail.com',
    },
        
];

let indexEditando = null;
let indexExcluindo = null;

function renderizarTabela() {
    clientes.forEach((cliente) => {
        const tr = document.createElement('tr');

        tr.innerHTML = ´
        <td>${cliente.nome}</td>
        <td>${cliente.sobrenome}</td>
        <td>${cliente.cpf}</td>
        <td>${cliente.email}</td>
        ´;

        const tdAcoes = document.createElement('td');
        tdAcoes.classList.add('acoes');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('editar');

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.classList.add('excluir');

        tdAcoes.appendChild()


    })