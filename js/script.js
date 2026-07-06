let item;

function gerenciarMochila(){
    item = document.getElementById("item").value;
    console.log(item);
    //alert("item adicionado na mochila!");
    document.getElementById( "tabela" ).innerHTML = item;
    document.getElementById("item").value = "";
}

function cadastrar(){
    item = document.getElementById("item").value;
    document.getElementById( "tabela" ).innerHTML = item;
    alert("item cadastrado!");
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
    document.getElementById("item").value = "";
    alert("Item deletado!");
    document.getElementById( "tabela" ).innerHTML = "";
}