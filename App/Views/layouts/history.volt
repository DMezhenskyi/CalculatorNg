{% extends "base.volt" %}

{% block title %}History list{% endblock %}

{% block content %}
    <h1>History</h1>
    <section class="history_list">
        {% for h in history %}
            <div class="history_item">Calculate reguest #<strong>{{ h.id }}: </strong> <span class="expression">{{ h.history_string }}</span></div>
        {% endfor  %}
    </section>


{% endblock %}