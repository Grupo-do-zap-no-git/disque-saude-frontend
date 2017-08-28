'use strict';
(function() {
	var app = angular.module('vs');

	app.controller("AdicionarUnidadeController", function AdicionarUnidadeController(toastr, UnidadeSaudeService, EspecialidadeService) {

        var adicionarUnidadeCtrl = this;
        adicionarUnidadeCtrl.unidade;
        adicionarUnidadeCtrl.especialidades;

        adicionarUnidadeCtrl.adicionarUnidade = function adicionarUnidade(bairro, tipo,atendentes,taxa) {
            var unidade = criaUnidade(bairro, tipo, atendentes, taxa);
            UnidadeSaudeService.adicionarUnidade(unidade)
            .then(function success(response) {
                adicionarUnidadeCtrl.unidade = response.data;
                toastr.success('Adicionado com sucesso.');
            }, function error() {
                adicionarUnidade.unidade = null;
                toastr.error(error);
            });
        }

        function criaUnidade(bairro, tipo, atendentes, taxa) {
            var unidade = {
                bairro: bairro,
                especialidades: [],
                type: tipo,
                atendentes: atendentes,
                taxaDiariaAtendimentos: taxa
            };

            if(adicionarUnidadeCtrl.especialidades) {
                for (var i = 0; i < adicionarUnidadeCtrl.especialidades.length; i++) {
                    if(adicionarUnidadeCtrl.especialidades[i].selecionada) {
                        unidade.especialidades.push(adicionarUnidadeCtrl.especialidades[i].nome);
                    }
                }
            }
            return unidade;
        }

        var getEspecialidades = function getEspecialidades() {
            EspecialidadeService.todasEspecialidades().then(function success(response) {
                adicionarUnidadeCtrl.especialidades = response.data;
            }, function error() {
                toastr.error('Ocorreu um erro.');
            })
        }

        getEspecialidades();
	});
})();