<!DOCTYPE html>
<html>
<head>
    
        <link rel="stylesheet" href="/public/production/styles/main-theme.min.css" />
    
    <title>History list - Biddi Calculator</title>
</head>
<body>
    <header>
        <a href="/">Home</a>
        <a href="/history/show">History</a>
    </header>
    <div class="wrapper">

    <h1>History</h1>
    <section class="history_list">
        <?php if ($this->length($history) === 0) { ?>
            <p class="empty">History is empty.</p>
        <?php } else { ?>
            <?php foreach ($history as $h) { ?>
                <div class="history_item">Calculate reguest #<strong><?php echo $h->id; ?>: </strong>
                    <span class="expression"><?php echo $h->history_string; ?></span>
                </div>
            <?php } ?>
        <?php } ?>
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