<!DOCTYPE html>
<html>
<head>
    {% block head %}
        <link rel="stylesheet" href="/public/production/styles/main-theme.min.css" />
    {% endblock %}
    <title>{% block title %}{% endblock %} - Biddi Calculator</title>
</head>
<body>
<header>
    <a href="/">Home</a>
    <a href="/history/show">History</a>
</header>
<div class="wrapper">{% block content %}{% endblock %}</div>

<footer class="footer">
   &copy; Copyright 2015, All rights reserved. <br/>
    <p>Designed with AngularJS, Volt and Phalcon 2.</p>
</footer>
<script type="text/javascript" src="/public/production/libs/angular/angular.concat.js"></script>
<script type="text/javascript" src="/public/production/js/app.js"></script>
</body>
</html>