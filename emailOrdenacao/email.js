const emails = [{assunto: 'Contas a pagar', 
                 mensagem: 'Nenhum poder na Terra é capaz de deter uma pessoa oprimida determinada a conquistar sua liberdade.',
                 remetente: 'Dagkoael', destinatario: 'Ollu', data: '02/08/2020', tipo: 'RE: '},
                {assunto: 'Contas a pagar',
                 mensagem: 'Não desista de sonhar.',
                 remetente: 'Ollu', destinatario: 'Dagkoael', data: '03/08/2015', tipo: ''},
                {assunto: 'Registro vencido',
                 mensagem: 'É mais fácil repousar um corpo dolorido do que acalmar uma alma exausta.',
                 remetente: 'Ollu', destinatario: 'Amzexi', data: '05/08/2019', tipo: 'RE: '},
                {assunto: 'Atrasos em entrega',
                 mensagem: 'Não haverá borboletas se a vida não passar por longas e silenciosas metamorfoses.',
                 remetente: 'Ollu', destinatario: 'Ovcueus', data: '05/08/2000', tipo: 'RE: '},
                {assunto: 'Solicitação de feedback',
                 mensagem: 'A distância não significa nada quando alguém significa tudo.',
                 remetente: 'Garoesgarn', destinatario: 'Ollu', data: '06/09/2019', tipo: 'RE: '},
                {assunto: 'Registro vencido',
                 mensagem: 'Comece onde você está, use o que você tem e faça o que você pode.',
                 remetente: 'Amzexi', destinatario: 'Ollu', data: '16/08/2019', tipo: 'FW: '},
                {assunto: 'Registro vencido',
                 mensagem: 'O segredo para ser feliz é aceitar onde você está hoje na vida e dar o melhor de si todos os dias.',
                 remetente: 'Ollu', destinatario: 'Amzexi', data: '11/08/2019', tipo: ''},
                {assunto: 'Solicitação de feedback',
                 mensagem: 'Viva como se você fosse morrer... porque você vai.',
                 remetente: 'Ollu', destinatario: 'Garoesgarn', data: '06/08/2019', tipo: ''},
                {assunto: 'Atrasos em entrega',
                 mensagem: 'Ser luz não é sobre brilhar e sim sobre iluminar caminhos.',
                 remetente: 'Ovcueus', destinatario: 'Ollu', data: '08/08/2019', tipo: 'FW: '},
                {assunto: 'Atrasos em entrega',
                 mensagem: 'Nenhuma pessoa é a mesma depois de tantos (d)anos.',
                 remetente: 'Ollu', destinatario: 'Ovcueus', data: '07/08/2019', tipo: ''}];
const assuntos = coletaAssunto(emails);
let rootList = document.getElementById("rootList");
let order = true;

ordenarData();

function ordenarData(){
    while(rootList.firstChild){
        rootList.removeChild(rootList.firstChild);
    }   
    emails.sort(compare);
    emails.forEach(email =>{   
        list = document.createElement("li");
        list.innerHTML = "<li class='elemento'>" +
                                "<span class='assunto'>" + email.tipo + email.assunto + "</span>" +
                                "<span class='data'>" + email.data + "</span>" +
                                "<span class='mensagem'>" + email.mensagem + "</span>" +
                                "<span class='envolvidos'> Remetente: " + email.remetente + " / Destinatário: " + email.destinatario + "</span>" +
                            "</li>";
        rootList.appendChild(list);
    })
    order = true;
}

function ordenarAssunto(){
    if(order){
        let topicos = [];
        let pos;
        assuntos.forEach(assunto=>{
            topicos.push(document.createElement("ul"));
            pos = topicos.length-1;
            topicos[pos].innerText = assunto;
            topicos[pos].classList.add("elementoul");
        });

        rootList.childNodes.forEach(element =>{
            this.agrupaAssunto(element.childNodes[0], topicos);        
        });
    
        while(rootList.firstChild){
            rootList.removeChild(rootList.firstChild);
        }
        topicos.forEach(topico => {
            rootList.appendChild(topico);
        });
        order = false;
    } else{
        ordenarData();
    }
}



function compare(email1, email2) {
    let a = new Date(toDate(email1.data));
    let b = new Date(toDate(email2.data));
    let result = a < b ? 1 : a > b ? -1 : 0;        
    return result;
}

function toDate(data) {
    let partes = data.split("/");
    return new Date(partes[2], partes[1] - 1, partes[0]);
}

function coletaAssunto(emailList){
    let list = [];
    emailList.forEach(email=>{
        if(list.indexOf(email.assunto) === -1){
            list.push(email.assunto);
        }        
    })
    return list;  
}

function agrupaAssunto(element, topicos){
    let auxElement, auxTopico
    topicos.forEach(topico => {
        auxElement = element.childNodes[0].innerText;
        auxTopico = topico.childNodes[0].data;
        
        if(auxElement.indexOf(auxTopico) != -1){
            topico.appendChild(element)
        }            
    });
}

