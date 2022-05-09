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


// Global varibles multimedia

var marco;
var imgDataEdit = $('.block-02 #imgFondo');
var img = $('.campo-imagen #imagen img');

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
        modalNombre = $('.modalData #dataNom').val();
        modalId = Math.floor(Math.random() * 100 );

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
                console.log( res.objeto );
                console.log( res.datos_u );

                setTimeout( function () {
                    Modalpopup = new bootstrap.Modal(document.getElementById('Modalpopup'), {
                        keyboard: false
                    });

                    Modalpopup.hide();

                }, 1500);

                location.href = "?page=res_popup&edit=" + modalNombre + "&id=" + modalId;
            }
        })
    });

});


// button to edit pop-up.

$(document).ready(function() {
    $('#tableId tr #btn_editar').on('click', function() {
        var item = $(this);
        var tr = item.parent().parent();

        popupNombre = tr.attr('data-nombre');
        popupId = tr.attr('id');

        location.href = "?page=res_popup&edit=" + popupNombre + "&id=" + popupId;
    });
});

// Button back to principal page

$(document).ready(function() {
    $('.block-01 #volverAtras').on('click', function() {
        location.href = "?page=res_popup";
    });
});

// Button swich

$(document).ready(function() {

    $('#camposSwitch').hide();

    $('.switch').on('click', function() {
        var check = $('#switch input[type=checkbox]');

        if ( check.is(':checked')) {
            $('#camposSwitch').show(1000);
        }
        else {
            $('#camposSwitch').hide(1000);
        }
    });
});

// 

$(document).ready(function() {

    $('#imgFondo').on('click', function(e) {
        e.preventDefault();

        if ( marco ) {
            marco.open();
            return;
        }

        //multimedia gestor of wordpress.
        marco = wp.media({
            frame: 'select',
            title: 'Seleccionar la imagen del pop-up',
            button: {
                text: 'usar imagen'
            },
            multiple: false,
            library: {
                type: 'image'
            }
        });

        marco.on('select', function() {
            var imgPopup = marco.state().get('selection').first().toJSON();
            var ulrLimpia = limpiar_ruta( imgPopup.url );

            // set url clean.
            imgDataEdit.val(ulrLimpia);
            img.attr('src', ulrLimpia)
        });

        marco.open();
    })

});

// Clean url to get img

function limpiar_ruta( url ) {

    var local = /localhost/;

    if( local.test(local) ) {

        var url_pathname = location.pathname;
        var indexPost = url_pathname.indexOf('wp-admin');
        var url_pos = url_pathname.substr(0, indexPost);
        var url_delete = location.protocol + '//' + location.host + url_pos;

        //console.log( url_delete );
        return url_pos + url.replace(url_delete, '');
    }

    else {

        // remote server.
        var ulr_real = location.protocol + '//' + location.hostname;

    }
}






/* jQuery(function($){

}); */