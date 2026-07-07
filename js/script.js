let item;

function gerenciarMochila(){
    item = document.getElementById("item").value;
    console.log(item);
    
    tbody = document.getElementById( "tabela" );
    console.log(tbody);
    let item_novo = '';
    item_novo = item_novo + '<tr><td>' + item + '</td></tr>';

    console.log(item_novo);

    tbody.innerHTML = tbody.innerHTML + item_novo;
    //console.log(tabela);
    document.getElementById("item").value = "";
}

function consultar(){
    item = document.getElementById("item").value;
    busca = prompt("Digite o novo item a ser consultado");
    if (busca == item){
        alert("item encontrado");
        }else{
            alert("item não encontrado");
        }
    document.getElementById( "tabela" ).innerHTML = "";
}

function alterar(){
    novo_item = prompt("Digite o novo item a ser alterado");
    document.getElementById( "tabela" ).innerHTML = novo_item;
    document.getElementById("item").value = "";
}

function deletar(){
    let deletar;
    document.getElementById("item").value = "";
    deletar = prompt("Digite item a ser deletado");
    //alert("Item deletado!");
    document.getElementById( "tabela" ).innerHTML = "";
}

// function cadastrar(){
//     item = document.getElementById("item").value;
//     document.getElementById( "tabela" ).innerHTML = item;
//     alert("item cadastrado!");
//     document.getElementById("item").value = "";
// }