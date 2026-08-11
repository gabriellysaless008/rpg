let item = [];

const itemData = {
        item: valor_item,
        id: valor_id
    };

function pegaId(){
    for (let x = 0; x <=10; x++){

    }
}

function gerenciarMochila(){
    valor_item = document.getElementById("itemInput").value;
    console.log(item);
    valor_id = document.getElementById("itemInput").id;
    console.log("id: ", itemData.id);
    
    tbody = document.getElementById( "tabela" );
    console.log(tbody);
    let item_novo = '';
    item_novo = item_novo + '<tr><td>' + valor_item + '</td></tr>';
    
    console.log(item_novo);

    tbody.innerHTML = tbody.innerHTML + item_novo;
    //console.log(tabela);
    document.getElementById("itemInput").value = "";

}

function consultar(){
    // Pega o que foi digitado no input
    busca = document.getElementById("item").value;
    
    // Pega a tabela
    tbody = document.getElementById("tabela");
    
    // Verifica se o input está vazio
    if(busca == ""){
        tbody.innerHTML = tbody.innerHTML + '<tr class="erro"><td colspan="2">Digite um item no campo para consultar!</td></tr>';
        document.getElementById("item").value = "";
        
        setTimeout(function(){
            removerMensagens();
        }, 3000);
        
        return;
    }
    
    // Pega todas as linhas
    linha = tbody.getElementsByTagName("tr");
    
    // Remove destaque antigo de todas as linhas
    for(i = 0; i < linha.length; i++){
        linha[i].className = "";
    }
    
    // Procura o item na tabela
    achei = 0;
    for(i = 0; i < linha.length; i++){
        celula = linha[i].getElementsByTagName("td")[0];
        
        if(celula.innerHTML == busca){
            linha[i].className = "destaque";
            achei = 1;
            tbody.innerHTML = tbody.innerHTML + '<tr class="mensagem"><td colspan="2">Item "' + busca + '" encontrado e destacado na tabela!</td></tr>';
            
            setTimeout(function(){
                removerMensagens();
            }, 3000);
            
            break;
        }
    }
    
    if(achei == 0){
        tbody.innerHTML = tbody.innerHTML + '<tr class="erro"><td colspan="2">Item "' + busca + '" não encontrado</td></tr>';
        
        setTimeout(function(){
            removerMensagens();
        }, 3000);
    }
    
    document.getElementById("item").value = "";
}

function removerMensagens(){
    tbody = document.getElementById("tabela");
    linha = tbody.getElementsByTagName("tr");
    
    for(i = linha.length - 1; i >= 0; i--){
        if(linha[i].className == "mensagem" || linha[i].className == "erro"){
            linha[i].remove();
        }
    }
}

}

function alterar(){
    novo_item = prompt("Digite o novo item a ser alterado");
    document.getElementById( "tabela" ).innerHTML = novo_item;
    document.getElementById("item").value = "";
}

function deletar(){
    let deletar;
    document.getElementById("itemInput").value = "";
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