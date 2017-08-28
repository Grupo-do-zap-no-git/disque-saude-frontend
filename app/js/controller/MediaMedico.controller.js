'use strict';
(function() {
	var app = angular.module('vs');

	app.controller("PesquisaMediaMedicoCtrl", function PesquisaMediaMedicoCtrl(toastr, GeralService) {

		var pesquisaMediaMedicoCtrl = this;
	    pesquisaMediaMedicoCtrl.media = null;

	    pesquisaMediaMedicoCtrl.pesquisaMediaMedicoPorPaciente = function pesquisaMediaMedicoPorPaciente(unidadeSaudeId) {
	        GeralService.getMediaMedico(unidadeSaudeId).then(function success(response) {
	            pesquisaMediaMedicoCtrl.media = Math.round(response.data.obj);
	        }, function error() {
	            toastr.error("Unidade Não Encontrada");
	        });
	    }
	});
})();