let totalGeral = 0;
limpar();

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';

}

function adicionar() {
    //Extraindo dados do input
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //Validando quantidade de itens
    if (quantidade == 0) {
        alert('Insira uma quantidade valida de produtos');
        return;
    }

    //Calculando valor dos produtos
    let preco = valorProduto * quantidade;

    //Adicionando ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;

    //Calculando valor total
    let total = document.getElementById('valor-total');
    totalGeral = preco + totalGeral;
    total.textContent = `R$${totalGeral}`; 

    //Resetando valor de 'quantidade'
    document.getElementById('quantidade').value = ''; 

    
        
       
        }


