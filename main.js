alert("Bem-vindos,estudantes!")
let nomes_Turmas= "";
let turmas=document.querySelector=("#Estudantes"); 


while(nomes_turmas==""){
nomes_turmas = prompt = "Qual é a sua turma";
}
elemento.textcontent= nomes_Turmas;

// Função para abrir o modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Função para salvar a turma
function saveTurma() {
    var turma = document.getElementById('turmaInput').value;
    alert('Turma salva: ' + turma);
    closeModal();
}
