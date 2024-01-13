let totalGeral ;
limpar();


function adicionar (){
 // recuperar valor nome do produto, quatidade e valor
 let produto = document.getElementById('produto').value;
 let nomeProtudo = produto.split('-')[0];
 let valorUnitario = produto.split('R$')[1];
 let quantidade = document.getElementById('quantidade').value;
 
 //calcular o preço, o nosso protudo
 let preco = quantidade * valorUnitario;
 let carrinho = document.getElementById('lista-produtos');
 //adicionar no carrinho 
 carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
 <span class="texto-azul">${quantidade}x</span> ${nomeProtudo} <span class="texto-azul">R$${preco}</span>
</section>`;
 // atualizar o valor total 
totalGeral = totalGeral + preco; 
let campoTotal = document.getElementById('valor-total'); campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 0;
 

}

function limpar (){
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent  = 'R$ 0'; 
}
