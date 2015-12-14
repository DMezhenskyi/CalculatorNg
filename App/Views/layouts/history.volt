{% extends "base.volt" %}
{% block title %}History list{% endblock %}
{% block content %}

    <h1>History</h1>
    <section class="history_list">
        {% if history|length  === 0 %}
            <p class="empty">History is empty.</p>
        {% else  %}
            {% for h in history %}
                <div class="history_item">Calculate reguest #<strong>{{ h.id }}: </strong>
                    <span class="expression">{{ h.history_string }}</span>
                </div>
            {% endfor  %}
        {% endif  %}
    </section>

{% endblock %}