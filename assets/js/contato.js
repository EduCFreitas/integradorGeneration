
// Eduardo - 11/03 12:00

document.getElementById('enviaMensagem').addEventListener('click', function(e){
    // Verificando se o nome digitado foi maior ou igual a 3 caracteres
    // Validação do nome
    var nome = document.getElementById('nome').value;
    // Deve ter mais de 3 caracteres
    if(nome.length<3){
        // Tem erro
        e.preventDefault(); // Cancela a ação de submit. Previne o acontecimento do evento submit
        document.getElementById('nome').style.borderColor = 'red';
        document.getElementById('nome').value = "";
        document.getElementById('nome').placeholder = 'Nome deve conter mais de 3 letras';
    }else{
        document.getElementById('nome').style.borderColor = 'green';
    }

    // Validação de email
    var email = document.getElementById('email').value;
    // Deve possuir "@", "." e não ser vazio
    if(email.indexOf("@")==-1 || email.indexOf(".")==-1 || email.value==""){
        e.preventDefault();
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').value = "";
        document.getElementById('email').placeholder = 'Email deve conter ".", "@" e não deve estar vazio';
    }else{
        document.getElementById('email').style.borderColor = 'green';
    }

    // Validação telefone
    var telefone = document.getElementById('telefone').value;
    var numTel = Number(telefone); // Usado para verificar se o valor digitado pode ser transformado em 
    if(telefone.length<12){
        telefone = '55'+telefone
    }
    if(telefone.length<10 || telefone.length>13|| isNaN(numTel)){
        e.preventDefault();
        document.getElementById('telefone').style.borderColor = 'red';
        document.getElementById('telefone').value = "";
        document.getElementById('telefone').placeholder = 'Digite apenas números, contendo o DDD. ';
    }else{
        document.getElementById('telefone').style.borderColor = 'green';
    }
})
