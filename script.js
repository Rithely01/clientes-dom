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

let clientes = [];

let indexEditando = null;
let indexExcluindo = null;