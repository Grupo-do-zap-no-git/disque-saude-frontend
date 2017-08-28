'use strict';
(function() {
    var app = angular.module('vs');

    app.controller("PesquisaEspecialidadeCtrl", function PesquisaEspecialidadeCtrl(toastr, UnidadeSaudeService, EspecialidadeService) {

        var pesquisaEspecialidadeCtrl = this;
        pesquisaEspecialidadeCtrl.unidades;
        pesquisaEspecialidadeCtrl.unidadesComEspecialidade = [];
        pesquisaEspecialidadeCtrl.especialidade;
        pesquisaEspecialidadeCtrl.especialidades;

        pesquisaEspecialidadeCtrl.pesquisaEspecialidade = function pesquisaEspecialidade(nome) {
            pesquisaEspecialidadeCtrl.unidadesComEspecialidade = [];
            if(pesquisaEspecialidadeCtrl.especialidades && pesquisaEspecialidadeCtrl.unidades) {
                pesquisaEspecialidadeCtrl.especialidade = _.find(pesquisaEspecialidadeCtrl.especialidades, {'nome': nome})
                for (var i = 0; i < pesquisaEspecialidadeCtrl.unidades.length; i++) {
                    if(_.includes(pesquisaEspecialidadeCtrl.unidades[i].especialidades, nome)) {
                        pesquisaEspecialidadeCtrl.unidadesComEspecialidade.push(pesquisaEspecialidadeCtrl.unidades[i]);
                    }
            }
            }
        }

        var getEspecialidades = function getEspecialidades() {
            EspecialidadeService.todasEspecialidades().then(function success(response) {
                pesquisaEspecialidadeCtrl.especialidades = response.data;
            }, function error() {
                toastr.error('Ocorreu um erro.');
            })
        }

        var getUnidades = function getUnidades() {
            UnidadeSaudeService.todasUnidades().then(function success(response) {
                pesquisaEspecialidadeCtrl.unidades = response.data;
            }, function error() {
                toastr.error('Ocorreu um erro.');
            })
        }

        getUnidades();
        getEspecialidades();
    });
})();