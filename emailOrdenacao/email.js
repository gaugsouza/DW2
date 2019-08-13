const emails = [{asssunto: 'Contas a pagar', 
                 mensagem: 'Nenhum poder na Terra é capaz de deter uma pessoa oprimida determinada a conquistar sua liberdade.',
                 remetente: 'Dagkoael', destinatario: 'Ollu', data: '12/08/2019', tipo: 'RE: '},
                {asssunto: 'Contas a pagar',
                 mensagem: 'Não desista de sonhar.',
                 remetente: 'Ollu', destinatario: 'Dagkoael', data: '12/08/2019', tipo: ''},
                {asssunto: 'Registro vencido',
                 mensagem: 'É mais fácil repousar um corpo dolorido do que acalmar uma alma exausta.',
                 remetente: 'Ollu', destinatario: 'Amzexi', data: '12/08/2019', tipo: 'RE: '},
                {asssunto: 'Atrasos em entrega',
                 mensagem: 'Não haverá borboletas se a vida não passar por longas e silenciosas metamorfoses.',
                 remetente: 'Ollu', destinatario: 'Ovcueus', data: '12/08/2019', tipo: 'RE: '},
                {asssunto: 'Solicitação de feedback',
                 mensagem: 'A distância não significa nada quando alguém significa tudo.',
                 remetente: 'Garoesgarn', destinatario: 'Ollu', data: '12/08/2019', tipo: 'RE: '},
                {asssunto: 'Registro vencido',
                 mensagem: 'Comece onde você está, use o que você tem e faça o que você pode.',
                 remetente: 'Amzexi', destinatario: 'Ollu', data: '12/08/2019', tipo: 'FW: '},
                {asssunto: 'Registro vencido',
                 mensagem: 'O segredo para ser feliz é aceitar onde você está hoje na vida e dar o melhor de si todos os dias.',
                 remetente: 'Ollu', destinatario: 'Amzexi', data: '12/08/2019', tipo: ''},
                {asssunto: 'Solicitação de feedback',
                 mensagem: 'Viva como se você fosse morrer... porque você vai.',
                 remetente: 'Ollu', destinatario: 'Garoesgarn', data: '12/08/2019', tipo: ''},
                {asssunto: 'Atrasos em entrega',
                 mensagem: 'Ser luz não é sobre brilhar e sim sobre iluminar caminhos.',
                 remetente: 'Ovcueus', destinatario: 'Ollu', data: '12/08/2019', tipo: 'FW: '},
                {asssunto: 'Atrasos em entrega',
                 mensagem: 'Nenhuma pessoa é a mesma depois de tantos (d)anos.',
                 remetente: 'Ollu', destinatario: 'Ovcueus', data: '12/08/2019', tipo: ''}];

const assuntos = ['Contas a pagar', 'Registro vencido', 'Atrasos em entrega', 'Solicitação de feedback'];

var order = true;

var rootList = document.getElementById("rootList");
var list;
emails.forEach(email =>{   
    list = document.createElement("li");

    list.innerHTML = "<li class='elemento'>" +
                            "<span class='assunto'>" + email.tipo + email.asssunto + "</span>" +
                            "<span class='data'>" + email.data + "</span>" +
                            "<span class='mensagem'>" + email.mensagem + "</span>" +
                            "<span class='envolvidos'> Remetente: " + email.remetente + " / Destinatário: " + email.destinatario + "</span>" +
                        "</li>"
    rootList.appendChild(list);
})

function ordenar(){
    if(order){
        var cont = document.createElement("ul");
        cont.innerHTML = "Contas a pagar"
        cont.classList.add("elementoul");
        var reg = document.createElement("ul");
        reg.innerHTML = "Registro vencido"
        reg.classList.add("elementoul");
        var late = document.createElement("ul");
        late.innerHTML = "Atrasos em entrega"
        late.classList.add("elementoul");
        var req = document.createElement("ul");
        req.innerHTML = "Solicitação de feedback"
        req.classList.add("elementoul");
    
        rootList.childNodes.forEach(element =>{
            eltext = element.childNodes[0].childNodes[0].textContent;
            assuntos.forEach(assunto =>{
                if(eltext.indexOf(assunto) != -1){
                    let li = document.createElement("li");
                    li.appendChild(element.childNodes[0]);
                    if(assunto === "Contas a pagar"){
                        cont.appendChild(li);
                    } else if(assunto === "Registro vencido"){
                        reg.appendChild(li);
                    } else if(assunto === "Atrasos em entrega"){
                        late.appendChild(li);
                    } else{
                        req.appendChild(li);
                    }
                }
            });
        });
    
        while(rootList.firstChild){
            rootList.removeChild(rootList.firstChild);
        }
    
        rootList.appendChild(cont);
        rootList.appendChild(reg);
        rootList.appendChild(late);
        rootList.appendChild(req);
        order = false;
    } else{
        retornar();
    }
}

function retornar(){
    while(rootList.firstChild){
        rootList.removeChild(rootList.firstChild);
    }
    
    emails.forEach(email =>{   
        list = document.createElement("li");
    
        list.innerHTML = "<li class='elemento'>" +
                                "<span class='assunto'>" + email.tipo + email.asssunto + "</span>" +
                                "<span class='data'>" + email.data + "</span>" +
                                "<span class='mensagem'>" + email.mensagem + "</span>" +
                                "<span class='envolvidos'> Remetente: " + email.remetente + " / Destinatário: " + email.destinatario + "</span>" +
                            "</li>"
        rootList.appendChild(list);
    })
    order = true;
}

