let contador = 1;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('adicionarProduto').addEventListener('click', function() {
    const novaDiv = document.createElement('div');
    novaDiv.className = 'produtoDiv';
    novaDiv.id = 'produtoDiv' + contador;
    contador++;
     
    if (nomeProduto && precoProduto && linkImagem) {

    const divImagem = document.createElement('div');
    divImagem.className = 'divImagem';
    novaDiv.appendChild(divImagem);

    const novaImagem = document.createElement('img');
    novaImagem.src = document.getElementById('linkImagem').value
    divImagem.appendChild(novaImagem);

    const novoNome = document.createElement('p');
    novoNome.textContent = document.getElementById("nomeProduto").value
    novaDiv.appendChild(novoNome);

    const precoLixo = document.createElement('div');
    precoLixo.className = 'precoLixo';
    novaDiv.appendChild(precoLixo);

    let novoPreco = document.createElement('p');
    novoPreco.textContent = document.getElementById("precoProduto").value;
    precoLixo.appendChild(novoPreco);

    const lixoIcon = document.createElement('button');
    lixoIcon.innerHTML = '<img id="lixoID" src="assents/lixoIcon.png" alt="Excluir">';
    lixoIcon.class = 'lixoID'
    lixoIcon.id = 'lixoID2'
    lixoIcon.addEventListener('click', function() {
        novaDiv.remove();
        if (document.getElementById('conteudo').children.length === 1) {
            document.getElementById('nenhumProd').style.visibility = 'visible';
        }
    });
    precoLixo.appendChild(lixoIcon);
    

    document.getElementById('conteudo').appendChild(novaDiv);

   document.getElementById('nenhumProd').style.visibility = 'hidden';
    } else {
        alert("Por favor, preencha todos os campos.");
    }
    });


});

