'use strict';
(function() {
	var app = angular.module('vs');

	app.controller("AdicionarUnidadeController", function AdicionarUnidadeController(toastr, UnidadeSaudeService) {

        var adicionarUnidadeCtrl = this;
        adicionarUnidadeCtrl.unidade;
        adicionarUnidadeCtrl.especialidades = [{nome: 'aaa', aaa: 'bbb'}, {nome:'bbbb', aaa: 'ccc'}];

        adicionarUnidadeCtrl.adicionarUnidade = function adicionarUnidade(bairro, tipo,especialidades,atendentes,taxa) {
            UnidadeSaudeService.adicionarUnidade(bairro, tipo,especialidades,atendentes,taxa)
            .then(function success(response) {
                adicionarUnidade.unidade = response.data;
            }, function error() {
                adicionarUnidade.unidade = null;
                toastr.error(error);
            });
        }

        function getEspecialidades() {
            EspecialidadeService.todasEspecialidades().then(function success(response) {
                adicionarUnidadeCtrl.especialidades = response.data;
            }, function error() {
                toastr.error('Ocorreu um erro.');
            })
        }

        getEspecialidades();
	});
})();