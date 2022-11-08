$(document).ready(()=>{
    $('#tel').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00');
    $('form').validate({
        rules:{
            nome:{
                required:true,
            },
            email:{
                required:true,
                email:true,
            },
            cpf:{
                required:true,
            },
           
        },
        messages:{
            nome:"Por favor, insira o nome completo",
            email:"Digite um email válido"
        }
    })
})