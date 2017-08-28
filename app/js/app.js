'use strict';

(function () {
    var app = angular.module("vs", [
        "ui.router",
        "ngMessages",
        "ngAnimate",
        "toastr"
    ]);

    app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('');
        $stateProvider
            .state("vs", {
                abstract: true,
                templateUrl: "view/main.html",
                controller: "MainController as mainCtrl",
                resolve: {
                    login: function () {
                        //sempre torna a obrigatoriedade de logar caso saia da rota do admin
                        //SEGURANÇA ++
                        return localStorage.clear();
                    }
                }

            })

            .state("admin", {
                abstract: true,
                url: "/admin",
                templateUrl: "view/dashboard.html",
                controller: "AdminController as adminCtrl",
                resolve: {
                    security: ['$q', function ($q) {
                        if (localStorage.getItem("ADMIN_LOGGED") === null) {
                            return $q.reject("Administrador precisa está logado.");
                        }
                    }]
                }

            })

            .state("admin.home", {
                url: "/home",
                views: {
                    conteudo: {
                        templateUrl: 'view/testadmin.html'
                    }
                }
            })

            .state("admin.fecharQueixa", {
                url: "/queixa/fechar",
                views: {
                    conteudo: {
                        templateUrl: 'view/fecharQueixa.html',
                        controller: "FechaQueixaController as fechaQueixaCtrl"
                    }
                }
            })

            .state("admin.adicionarUnidade", {
                url: "/unidade/adicionar",
                views: {
                    conteudo: {
                        templateUrl: 'view/adicionarUnidade.html',
                        controller: "AdicionarUnidadeController as adicionarUnidadeCtrl"
                    }
                }
            })

            .state("admin.modificaPrefeitura", {
                url: "/prefeitura/status", 
                views: {
                    conteudo: {
                        templateUrl: 'view/mudaSituacaoPrefeitura.html', 
                        controller: "SituacaoPrefeituraController as situacaoPrefeituraCtrl"
                    }
                }
            })


            .state("vs.home", {
                url: "/",
                views: {
                    content: {
                        templateUrl: 'view/home.html',
                    }
                }
            })
            .state("vs.pesquisaUnidadeSaude", {
                url: "/pesquisaUnidadeSaude",
                views: {
                    content: {
                        templateUrl: 'view/pesquisaUnidadeSaude.html',
                        controller: "PesquisaUnidadeSaudeCtrl as pesquisaUnidadeSaudeCtrl"
                    }
                }
            })
            .state("vs.pesquisaQueixa", {
                url: "/pesquisaQueixa",
                views: {
                    content: {
                        templateUrl: 'view/pesquisaQueixa.html',
                        controller: "PesquisaQueixaCtrl as pesquisaQueixaCtrl"
                    }
                }
            })
            .state("vs.pesquisaMediaMedico", {
                url: "/pesquisaMediaMedico",
                views: {
                    content: {
                        templateUrl: 'view/pesquisaMediaMedico.html',
                        controller: "PesquisaMediaMedicoCtrl as pesquisaMediaMedicoCtrl"
                    }
                }
            })
            .state("admin.situacaoQueixas", {
                url: "/prefeitura/situacaoQueixas",
                views: {
                    conteudo: {
                        templateUrl: 'view/situacaoQueixas.html',
                        controller: "SituacaoQueixasCtrl as situacaoQueixasCtrl"
                    }
                }
            })
            .state("vs.registraQueixa", {
                url: "/registraQueixa",
                views: {
                    content: {
                        templateUrl: 'view/registraQueixa.html',
                        controller: "RegistraQueixaCtrl as registraQueixaCtrl"
                    }
                }
            })


            .state("vs.pesquisaEspecialidade", {
                url: "/pesquisaEspecialidade",
                views: {
                    content: {
                        templateUrl: 'view/pesquisaEspecialidade.html',
                        controller: "PesquisaEspecialidadeCtrl as pesquisaEspecialidadeCtrl"
                    }
                }

            })



            .state("vs.sucesso", {
                url: "/sucesso/:id",
                views: {
                    content: {
                        templateUrl: 'view/sucesso.html',
                        controller: "QueixaMensagemCtrl as queixaMensagemCtrl"
                    }
                }
            })

            .state("login", {
                url: '/login',
                templateUrl: 'view/login.html',
                controller: 'LoginController as loginCtrl'
            })


        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(false);

    })


    app.run(['$rootScope', '$state', function ($rootScope, $state) {

        $state.defaultErrorHandler(function (error) {
            console.log(error);
            $state.go("login");
        })



    }]);

})();