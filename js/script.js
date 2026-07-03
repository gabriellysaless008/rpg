let item;

function gerenciarMochila(){
    item = document.getElementById("item").value;

    console.log(item);
    //alert("item adicionado na mochila!");
    document.getElementById( "tabela" ).innerHTML = item;


}

function cadastrar(){
    item = document.getElementById("item").value;
    document.getElementById( "tabela" ).innerHTML = item;

}

function consultar(){

}

function alterar(){

}

function deletar(){
    document.getElementById("item").value = "";
    alert("Item deletado!");

}