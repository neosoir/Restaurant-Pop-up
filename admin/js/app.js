/**
 * Admin js archive.
 */

// No conflict with dolar simbol ("$");
$ = jQuery.noConflict();

// Global varibles.
var modalNombre;
var modalId;
var popupNombre;
var popupId;

// jQuery fuction.
$(document).ready(function() {

    $('#btn_crear').on('click', function() {
        var Modalpopup = new bootstrap.Modal(document.getElementById('Modalpopup'), {
            keyboard: false
        });
        Modalpopup.show();
    })

});

// Button save pop-up.
$(document).ready(function() {

    $('.modalData #btnGuardar').on('click', function() {
        modalNombre = $('.modalData #btnGuardar').val();
        modalId = Match.floor(Match.ramdom() * 100 );

        $.ajax({
            url: dataPopup.url,
            type: 'post',
            dataType: 'json',
            data:   {
                action: 'res_data_popup',
                nonce: dataPopup.seguridad,
                nombre: modalNombre,
                id: modalId,
                tipo: 'add',
                datos_u: dataPopup.objeto
            },
            success: function( res ) {

            }
        })
    });

});










/* jQuery(function($){

}); */