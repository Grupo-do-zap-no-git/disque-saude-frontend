'use strict';
(function() {
	var app = angular.module('vs');

	app.controller("AdicionarUnidadeController", function AdicionarUnidadeController(toastr, UnidadeSaudeService) {

        var adicionarUnidadeCtrl = this;
        adicionarUnidadeCtrl.unidade;

        adicionarUnidadeCtrl.adicionarUnidade = function getQueixa(nome,bairro,tipo) {
            console.log("AAAA");
            UnidadeSaudeService.adicionarUnidade(nome,bairro,tipo)
            .then(function success(response) {
                adicionarUnidade.unidade = response.data;
            }, function error() {
                adicionarUnidade.unidade = null;
                toastr.error(error);
            });
        }
    
	   
	});

})();