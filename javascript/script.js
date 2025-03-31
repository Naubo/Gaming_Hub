/* Iniciando o Jquery*/
$(document).ready(function() {
    $('#mobile_btn').on('click', function (){
        $('#mobile_menu').toggleClass('active');

        // trocar icone para x
        $('#mobile_btn').find('i').toggleClass('fa-x');

    })
})