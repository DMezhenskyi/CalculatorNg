(function() {
    'use strict';

    angular
        .module('calculator', [])
        .config(['$interpolateProvider', function ($interpolateProvider) {
            $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        }])
        .constant('API_URL', window.location)
        .controller('CalculatorCtrl', [
                            '$scope',
                            'MathService',
                            'ServerRequest',

            function($scope, MathService, ServerRequest) {

            $scope.items = {
                firstValue: '0',
                secondValue: '',
                action: null,
                isFirstValue: true,
                result: ''
            };

            $scope.setValue = function (val) {
                var val = String(val);

                if($scope.items.result !== '' && $scope.items.action === null) {
                    $scope.reset();
                }
                if($scope.items.isFirstValue === true) {
                    $scope.items.firstValue === '0'
                        ? $scope.items.firstValue = val
                        : $scope.items.firstValue += val;
                } else {
                    $scope.items.secondValue === '0'
                        ? $scope.items.secondValue = val
                        : $scope.items.secondValue += val;
                }
            }

            $scope.reset = function () {
                $scope.items = {
                    firstValue: '0',
                    secondValue: '',
                    action: null,
                    isFirstValue: true,
                    result: ''
                };

            }

            $scope.percentAction = function () {

                if ($scope.items.isFirstValue === false) {
                    if($scope.items.secondValue !== '') {
                        $scope.showResult()
                    } else {
                        $scope.items.action = null;
                        $scope.items.isFirstValue = false;
                    }
                }
                var oldValue = $scope.items.firstValue;
                $scope.items.firstValue = String(parseFloat($scope.items.firstValue) * 0.01);

                ServerRequest.saveInHistory(
                    oldValue + ' * ' + '0.01' +
                    ' '+ $scope.items.secondValue + ' = ' + $scope.items.firstValue
                );
                var oldValue = null;
            }

            $scope.plusAction = function() {
                $scope.items.isFirstValue = false;
                $scope.items.action = '+';
            }

            $scope.minusAction = function() {
                $scope.items.isFirstValue = false;
                $scope.items.action = '-';
            }

            $scope.multiplyAction = function() {
                $scope.items.isFirstValue = false;
                $scope.items.action = '*';
            }


            $scope.divideAction = function() {
                $scope.items.isFirstValue = false;
                $scope.items.action = '/';
            }

            $scope.setDot = function() {
                if ($scope.items.isFirstValue === true) {
                    if ($scope.items.firstValue.indexOf('.') === -1 && $scope.items.firstValue !== '')
                        $scope.items.firstValue += '.';
                } else {
                    if ($scope.items.secondValue.indexOf('.') === -1 && $scope.items.secondValue !== '')
                        $scope.items.secondValue += '.';
                }
            }

            $scope.showResult = function() {
                var result = MathService.calculate(
                    $scope.items.firstValue, $scope.items.secondValue, $scope.items.action
                )

                if (result !== false) {
                    ServerRequest.saveInHistory(
                        $scope.items.firstValue + ' ' + $scope.items.action +
                        ' '+ $scope.items.secondValue + ' = ' + result
                    );
                    $scope.items.secondValue = '';
                    $scope.items.isFirstValue = false;
                    $scope.items.result = result;
                    $scope.items.firstValue = result;
                    $scope.items.action = null;
                }

            }

        }])
        .service('MathService', [function () {

            function division (a, b) {
                if (b === 0) {
                    throw Error('You can not divide by zero!');
                }
                return a / b;
            }

            this.calculate = function (a, b, action) {

                try {
                    if (action === null)
                        throw Error('You have to chose an action!');

                    if (b === '')
                        throw Error('You have to chose second value!');

                    var a = parseFloat(a);
                    var b = parseFloat(b);

                    switch (action) {
                        case '+':
                            return a + b;
                            break;
                        case '-':
                            return a - b;
                            break;
                        case '*':
                            return a * b;
                            break;
                        case '/':
                            return  division(a, b);
                            break;
                    }

                } catch (e) {
                    alert(e.message);
                    return false;
                }
            };
        }])
        .service('ServerRequest', ['$http','API_URL', function ($http, API_URL) {

            this.saveInHistory = function (str) {
                return $http({
                    method: 'POST',
                    url: API_URL + 'history/save',
                    data: {'string': str }
                }).then(function() { return true; }, function () {
                    alert("Server error. Coudn't save into the history");
                    return false;
                });
            }

        }]);
})();