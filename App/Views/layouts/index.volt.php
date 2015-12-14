<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/public/production/styles/main-theme.min.css" />
    <title>Main page - Biddi Calculator</title>
</head>
<body>
<header>
    <a href="/">Home</a>
    <a href="/history/show">History</a>
</header>
<div class="wrapper">
    <h1>My iCalculator</h1>
    <section class="calculator" ng-app="calculator" ng-controller="CalculatorCtrl">
        <div class="calculator__display" ng-cloak>
            {[{ items.firstValue }]} {[{ items.action }]} {[{ items.secondValue }]}
        </div>
        <div class="calculator__buttons-box">
            <div class="calculator_button button button-gray" ng-click="setValue(7)">7</div>
            <div class="calculator_button button button-gray" ng-click="setValue(8)">8</div>
            <div class="calculator_button button button-gray" ng-click="setValue(9)">9</div>

            <div class="calculator_button button button-gray" ng-click="setValue(4)">4</div>
            <div class="calculator_button button button-gray" ng-click="setValue(5)">5</div>
            <div class="calculator_button button button-gray" ng-click="setValue(6)">6</div>

            <div class="calculator_button button button-gray" ng-click="setValue(1)">1</div>
            <div class="calculator_button button button-gray" ng-click="setValue(2)">2</div>
            <div class="calculator_button button button-gray" ng-click="setValue(3)">3</div>

            <div class="calculator_button button button-gray" ng-click="setValue(0)">0</div>
            <div class="operations-button button button-gray button-big-gray" ng-click="showResult()">=</div>
        </div>
        <div class="calculator__operations-box">
            <div class="operations-button button button-orange" ng-click="reset()">AC</div>
            <div class="operations-button button button-orange" ng-click="plusAction()">+</div>
            <div class="operations-button button button-orange" ng-click="minusAction()">-</div>
            <div class="operations-button button button-orange" ng-click="multiplyAction()">*</div>
        </div>
        <div class="bottom-row">
            <div class="operations-button button button-orange" ng-click="divideAction()">&#247;</div>
            <div class="operations-button button button-orange button-big-orange" ng-click="percentAction()">%</div>

            <div class="operations-button button button-orange" ng-click="setDot()">.</div>

        </div>
        <div class="clear"></div>
    </section>
</div>

<footer class="footer">
   &copy; Copyright 2015, All rights reserved. <br/>
    <p>Designed with AngularJS, Volt and Phalcon 2.</p>
</footer>

<script type="text/javascript" src="/public/production/libs/angular/angular.concat.js"></script>
<script type="text/javascript" src="/public/production/js/app.js"></script>

</body>
</html>