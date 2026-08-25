let item = [];
let proximoId = 1;

function gerenciarMochila(){
    capturaValor();
    mochilaCheia();
    atualizarTabela();
}

function adicionarItem() {
    capturaValor();
    //const posicaoVazia = posicaoLivreVetor();
    let itemData = {
        item: valor_item,
        id: proximoId
    };
    proximoId++;
    item.push(itemData);
    //item[posicaoVazia] = itemData;
    console.log(item);
    atualizarTabela(); 
}

function posicaoLivreVetor(){
    for (let x = 0; x <= item.length; x++){
        console.log(item[x]);
        if (item[x] == null){ 
            console.log("oi" + x);
            return x;
        }
    }

    const posicaoVazia = posicaoLivreVetor();
    console.log("posicao vazia" + posicaoVazia);
    itemData.item = valor_item;
    itemData.id = posicaoVazia + 1;
    item.push(itemData);
}

function capturaValor(){
    valor_item = document.getElementById("itemInput").value;
    //console.log("o item digitado foi: ", valor_item);
}

function atualizarTabela(){
    let tbody = document.getElementById("tabela");

    tbody.innerHTML = "";

    for (let i = 0; i < item.length; i++) {
        tbody.innerHTML += `
            <tr>
                <td>${item[i].id}</td>
                <td>${item[i].item}</td>
            </tr>
        `;
    }

    document.getElementById("itemInput").value = "";
}

function mochilaCheia(){
    let tbody = document.getElementById("tabela");
    if (item.length >= 3) {
        let itemRemovido = item.shift();
        alert("Mochila cheia! " + itemRemovido.item + " foi descartado para dar lugar a " + valor_item + ".");
        let itemData = {
            item: valor_item,
            id: proximoId
        };
        proximoId++;
        item.push(itemData);
        }else{
        let itemData = {
            item: valor_item,
            id: proximoId
        };
        proximoId++;
        item.push(itemData);
    }

    console.log(item);
}

function consultar(){
    let id = Number(document.getElementById("idInput").value);
    let tbody = document.getElementById("tabela");

    if (id === 0 || isNaN(id)) {
        tbody.innerHTML += '<tr class="erro"><td colspan="2">Digite um ID para consultar!</td></tr>';

        setTimeout(function() {
            removerMensagens();
        }, 3000);

        return;
    }
    let encontrado = item.find(function(objeto) {
        return objeto.id === id;
    });

    if (!encontrado) {
        tbody.innerHTML += '<tr class="erro"><td colspan="2">ID "' + id + '" não encontrado!</td></tr>';

        setTimeout(function() {
            removerMensagens();
        }, 3000);
        return;
    }
    atualizarTabela();
    let linhas = tbody.getElementsByTagName("tr");
    for (let i = 0; i < linhas.length; i++) {
        let celulas = linhas[i].getElementsByTagName("td");

        if (celulas.length > 0 && celulas[0].innerHTML == encontrado.id) {
            linhas[i].className = "destaque";
            break;
        }
    }

    tbody.innerHTML += '<tr class="mensagem"><td colspan="2">Item "' + encontrado.item + '" encontrado e destacado na mochila!</td></tr>';

    setTimeout(function() {
        removerMensagens();
    }, 3000);
    document.getElementById("idInput").value = "";
    document.getElementById("itemInput").value = "";
}
function alterar() {
    let id = Number(document.getElementById("idInput").value);
    let novoNome = document.getElementById("itemInput").value;
    let tbody = document.getElementById("tabela");
    if (id === 0 || isNaN(id)) {
        tbody.innerHTML += '<tr class="erro"><td colspan="2">Digite um ID para alterar!</td></tr>';
        setTimeout(function() {
            removerMensagens();
        }, 3000);
        return;
    }
    if (novoNome == "") {
        tbody.innerHTML += '<tr class="erro"><td colspan="2">Digite o novo nome do item!</td></tr>';
        setTimeout(function() {
            removerMensagens();
        }, 3000);
        return;
    }
    let encontrado = item.find(function(objeto) {
        return objeto.id === id;
    });
    if (!encontrado) {
        tbody.innerHTML += '<tr class="erro"><td colspan="2">ID "' + id + '" não encontrado!</td></tr>';
        setTimeout(function() {
            removerMensagens();
        }, 3000);
    return;
    }

    let nomeAntigo = encontrado.item;
    encontrado.item = novoNome;
    atualizarTabela();
    tbody.innerHTML += '<tr class="mensagem"><td colspan="2">Item "' + nomeAntigo + '" alterado para "' + novoNome + '" com sucesso!</td></tr>';
    setTimeout(function() {
        removerMensagens();
    }, 3000);
    document.getElementById("idInput").value = "";
    document.getElementById("itemInput").value = "";
}

function deletar() {
    let id = Number(document.getElementById("idInput").value);
    let tbody = document.getElementById("tabela");
    if (id === 0 || isNaN(id)) {
        tbody.innerHTML += '<tr class="erro"><td colspan="2">Digite um ID para deletar!</td></tr>';
        setTimeout(function() {
            removerMensagens();
        }, 3000);
        return;
    }
    let indice = item.findIndex(function(objeto) {
        return objeto.id === id;
    });
    if (indice === -1) {
        tbody.innerHTML += '<tr class="erro"><td colspan="2">ID "' + id + '" não encontrado!</td></tr>';
        setTimeout(function() {
            removerMensagens();
        }, 3000);
        return;
    }
    let itemRemovido = item[indice].item;
    item.splice(indice, 1);
    atualizarTabela();
    tbody.innerHTML += '<tr class="mensagem"><td colspan="2">Item "' + itemRemovido + '" foi deletado com sucesso!</td></tr>';
    setTimeout(function() {
    removerMensagens();
    }, 3000);

    document.getElementById("idInput").value = "";
    document.getElementById("itemInput").value = "";
}

function removerMensagens(){
    let mensagens = document.querySelectorAll(".mensagem, .erro");

   for (let i = 0; i < mensagens.length; i++) {
        mensagens[i].remove();
    }
}