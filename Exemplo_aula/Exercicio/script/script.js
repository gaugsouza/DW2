$(function() {
    let resultado = 0;
    let produtos = [];
    $.getJSON('./script/dadosExemplo.json', function(p) {
        $('#stage').append('<tr class="tableHeader"><td class="flexItem"> Produto </td><td class="flexItem"> Valor </td></tr>');             
        p.produtos.forEach(produto => {
            $('#stage').append('<tr class="tableBody"><td class="flexItem">' + produto.nome + '</td><td class="flexItem"> R$' + produto.valor + '</td></tr>');    
            resultado += parseFloat(produto.valor);
        });
        $('#stage > tr').toArray().forEach(produto => {
            produtos.push(produto);
        });
        $('#stage').append('<tr class="tableFooter"><td class="flexItem"> Total: </td><td class="flexItem"> R$' + resultado + '</td></tr>');    
    });
    $("form").submit(function(e){
        e.preventDefault();
        let nome = $('form').serializeArray()[0].value;
        let valor = parseFloat($('form').serializeArray()[1].value).toFixed(2);
        if(isNaN(valor)){
            alert("Valor do produto inválido");
        } else {
            $('#stage').html("");
            produtos.forEach(produto => {
                $('#stage').append(produto);
            })
            $('#stage').append('<tr class="tableBody"><td class="flexItem">'+ nome +'</td><td class="flexItem"> R$' + valor + '</td></tr>');
            produtos.push($('#stage > tr').last());
            resultado += parseFloat(valor);
            $('#stage').append('<tr class="tableFooter"><td class="flexItem"> Total: </td><td class="flexItem"> R$' + resultado + '</td></tr>'); 
        }        
    })
});