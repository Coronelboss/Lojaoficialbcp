let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
        atualizarCarrinho();
        }

        function atualizarCarrinho() {
            let lista = document.getElementById("carrinho");
                lista.innerHTML = "";
                    
                        carrinho.forEach(item => {
                                let li = document.createElement("li");
                                        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
                                                lista.appendChild(li);
                                                    });
                                                    }
                                                    