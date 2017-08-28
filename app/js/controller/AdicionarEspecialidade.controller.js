'use strict';
(function() {
	var app = angular.module('vs');

	app.controller("AdicionarEspecialidadeController", function AdicionarEspecialidadeController(toastr, EspecialidadeService) {

		var adicionarEspecialidadeCtrl = this;

	    adicionarEspecialidadeCtrl.adicionar = function adicionar(nomeEspecialidade, descricaoEspecialidade) {
	    	var especialidade = {
	    		nome: nomeEspecialidade,
	    		descricao: descricaoEspecialidade
	    	}
	    	console.log(especialidade)
	        EspecialidadeService.adicionar(especialidade).then(function success(response) {
	        	toastr.success("Especialidade adicionada com sucesso.");
	        }, function error() {
	            toastr.error("Erro ao adicionar especialidade. Nome possivelmente já existe.");
	        });
	    }
	});
})();