{% extends "base.volt" %}

{% block title %}Main page{% endblock %}

{% block content %}
    <h1>My iCalculator</h1>
    <section class="calculator" ng-app="calculator" ng-controller="CalculatorCtrl">
        <div class="calculator__display">{[{ items.firstValue }]} {[{ items.action }]} {[{ items.secondValue }]}</div>
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
            <div class="operations-button button button-orange" ng-click="devideAction()">/</div>
            <div class="operations-button button button-orange button-big-orange" ng-click="procentAction()">%</div>

            <div class="operations-button button button-orange" ng-click="setDot()">.</div>

        </div>
        <div class="clear"></div>
    </section>
{% endblock %}