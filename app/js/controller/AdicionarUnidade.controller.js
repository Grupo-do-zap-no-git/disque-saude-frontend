'use strict';
(function() {
	var app = angular.module('vs');

	app.controller("AdicionarUnidadeController", function AdicionarUnidadeController(toastr, UnidadeSaudeService) {

        var adicionarUnidadeCtrl = this;
        adicionarUnidadeCtrl.unidade;

        adicionarUnidadeCtrl.adicionarUnidade = function adicionarUnidade(bairro, tipo,especialidades,atendentes,taxa) {
            UnidadeSaudeService.adicionarUnidade(bairro, tipo,especialidades,atendentes,taxa)
            .then(function success(response) {
                adicionarUnidade.unidade = response.data;
            }, function error() {
                adicionarUnidade.unidade = null;
                toastr.error(error);
            });
        }
	});
})();