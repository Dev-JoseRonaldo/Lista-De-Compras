//Adicionando com a tecla Enter tambem
document.addEventListener("keypress",
    function (e) {
        if (e.key === 'Enter') {
            add();
        }
    });
function add() {
    //pegando a string digitada
    var name = document.getElementById('text').value;

    //criando o novo element
    const li = document.createElement('li');
    li.innerHTML = `<input class="xBtn" type="button" value="x"> <h2>${name}</h2> <input class="check" type="checkbox" onclick ="check(this)">`

    //pegando o ul
    const lu = document.getElementById('lista');

    //adicionando li ao ul caso o campo não seja vazio
    if (name !== '') {
        lu.append(li);
    }
    //adicionando evento click em todos lis's para remover todo elemento
    var btns = document.querySelectorAll('.xBtn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', removerPai);
    }
    //reseta caixa de texto quando adicionar
    document.getElementById('text').value = '';
}

//Adicionando evento ao botao 'add'
var btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', add);

function removerPai() {
    //Removendo o elemento li apartir do seu filho (botão xbtn)
    var li = this.parentNode;
    li.parentNode.removeChild(li);
}

function check(chk) {
    //Mudando o Style pelo CSS adicionando a classe "checked" aqui
    chk.previousElementSibling.classList.add("checked");
    chk.setAttribute('onclick', 'uncheck(this)');

}
function uncheck(chk) {
    //Mudando o Style pelo CSS removendo a classe "checked" que veio do check() e deixando pronto pra colocar denovo
    chk.previousElementSibling.classList.remove("checked");
    chk.setAttribute('onclick', 'check(this)');
}



