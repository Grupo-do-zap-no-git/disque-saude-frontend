'use strict';
(function() {
	var app = angular.module('vs');

	app.controller("FechaQueixaController", function FechaQueixaController(toastr, QueixaService) {

        const QUEIXA_NAO_ENCONTRADA = "A queixa não foi encontrada.";

		var fechaQueixaCtrl = this;

        fechaQueixaCtrl.queixa;

	    fechaQueixaCtrl.getQueixa = function getQueixa(id) {
	        QueixaService.getQueixa(id)
	        .then(function success(response) {
	            fechaQueixaCtrl.queixa = response.data;
	        }, function error() {
	            fechaQueixaCtrl.queixa = null;
                console.log(error)
	            toastr.error(QUEIXA_NAO_ENCONTRADA);
	        });
	    }

        fechaQueixaCtrl.fecharQueixa = function fecharQueixa(comentario){

            console.log(fechaQueixaCtrl.queixa.id);
            console.log(comentario); 
            fechaQueixaCtrl.queixa.comentario = comentario;
            QueixaService.fecharQueixa(fechaQueixaCtrl.queixa).then(
                function success(response) {
                    fechaQueixaCtrl.queixa = response.data;
                }, function error(response){
                    toastr.error("DEU AGUIA");  
                }
            )
        }
	   
	});

})();