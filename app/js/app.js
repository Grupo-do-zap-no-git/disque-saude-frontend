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
                controller: "MainController as mainCtrl"

            })
            .state("admin", {
                abstract: true,
                url: "/admin",
                templateUrl: "view/dashboard.html",
                controller: "AdminController as adminCtrl",
                resolve: {
                    security: ['$q', function ($q) {
                        if (localStorage.getItem("ADMIN_LOGGED") === null) {
                            return $q.reject("Not Authorized");
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
            .state("vs.situacaoQueixas", {
                url: "/situacaoQueixas",
                views: {
                    content: {
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

            .state("nao-autorizado", {
                url: '/unauthorized',
                templateUrl: 'view/naoAutorizado.html'


            });

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