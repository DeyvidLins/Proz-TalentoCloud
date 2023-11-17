// Capturando os elementos pelo ID
const titulo = document.getElementById('titulo');
const minhaLista = document.getElementById('minhaLista');
const meuLink = document.getElementById('meuLink');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos usando innerText e innerHTML
titulo.innerText = 'Título da Página';
meuLink.innerText = 'Link para Proz Educação';

// Adicionando itens à lista não ordenada usando innerHTML
minhaLista.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

// Adicionando itens com links à lista ordenada usando innerHTML
listaOrdenada.innerHTML = '<li><a href="https://www.youtube.com/">Link 1</a></li><li><a href="https://www.deezer.com/br/">Link 2</a></li><li><a href="https://www.instagram.com/prozeducacaobr/">Link 3</a></li>';
