$(function() {
    let resultado = 0;
    $.getJSON('../jQuery/dadosExemplo.json', function(p) {
        $('#stage').append('<tr class="tableHeader"><td> Produto </td><td> Valor </td></tr>');             
        p.produtos.forEach(produto => {
            $('#stage').append('<tr><td>' + produto.nome + '</td><td>' + produto.valor + '</td></tr>');    
            resultado += parseFloat(produto.valor);
        });
        $('#stage').append('<tr><td> Total: </td><td>' + resultado + '</td></tr>');    
    });
    $("form").submit(function(e){
        e.preventDefault();
        let campos = $('form').serializeArray();
        $('#stage').append('<tr><td>'+ campos[0].value +'</td><td>' + parseFloat(campos[1].value).toFixed(2) + '</td></tr>');
        resultado += parseFloat(campos.valor);
    })
});

