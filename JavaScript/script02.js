// Método "simples" para adicionar um título
document.body.innerHTML += '<h1 id="titulo">Título do Site</h1>';

// Método "complexo" para adicionar um produto
var produtoContainer = document.createElement('div');
produtoContainer.id = 'produto';

var nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto à Venda';

var descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Descrição do produto à venda. Este é um produto incrível que você vai adorar!';

var precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 99,99';

// Adicionando elementos filhos ao contêiner do produto
produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);

// Adicionando o contêiner do produto ao body do documento
document.body.appendChild(produtoContainer);
