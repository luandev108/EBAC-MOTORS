
$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    })

    $('.menu-hamburgue').click(function() {
        $('nav').slideToggle();
    })
        
    
        $('#telefone').mask('(00) 00000-0000')

        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true
                },
                cpf: {
                    required: true
                }
            },
            messages: {
                nome: 'Por favor, insira o seu nome',
                email: 'Por favor, insira o email corretamente ',
                telefone: 'Por favor, insira o telefone corretamente',
                cpf: 'Por favor, insira o cpf'
            },
            submitHandler: function(e) {
                alert('Seus dados foi enviado com sucesso, aguarde que entraremos em contato')
                e.preventDefault();
            },
            invalidHandler: function(event, validador) {
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos)
                alert(`Existe ${camposIncorretos} campos incorretos`)
            }

            
        })
    })