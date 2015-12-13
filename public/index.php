<?php

use Phalcon\Config\Adapter\Ini as ConfigIni,
    Phalcon\Mvc\Router,
    Phalcon\Mvc\Url as UrlProvider,
    Phalcon\Http\Request;

try {
    define('APP_PATH', realpath('..') . '/');
    $config = new ConfigIni(APP_PATH . 'App/Config/config.ini');
    // Регистрация автозагрузчика
    $loader = new Phalcon\Loader();



// We're a registering a set of directories taken from the configuration file
    $loader->registerDirs(
        array(
            APP_PATH . $config->application->controllersDir,
            APP_PATH . $config->application->modelsDir,
        )
    )->register();

    // Создание DI
    $di = new Phalcon\DI\FactoryDefault();

    // Настраиваем компонент View
    $di->set('view', function () use ($config) {

        $view = new Phalcon\Mvc\View();

        $view->setViewsDir($config->application->viewsDir);

        $view->registerEngines(
            array(
                ".volt" => 'Phalcon\Mvc\View\Engine\Volt'
            )
        );
        return $view;
    });

    $di->set('router',function () use ($di) {
        $router = new Router();
        $router->add("/", "Index::index");
        $router->add("/history/save", "History::saveHistory");
        $router->add("/history/show", "History::showHistory");
        $router->handle();
        return $router;
    });

    $di->set('url', function(){
        $url = new UrlProvider();
        $url->setBaseUri('/');
        return $url;
    });


    // Настраиваем сервис для работы с БД
    $di->set('db', function () use ($config) {
        return new Phalcon\Db\Adapter\Pdo\Mysql(array(
            'host' => $config->database->host,
            'username' => $config->database->username,
            'password' => $config->database->password,
            'dbname' => $config->database->dbname
        ));
    });

    $di->set('router',function () use ($di) {
        $router = new Router();
        $router->add("/", "Index::index");
        $router->add("/history/save", "History::saveHistory");
        $router->add("/history/show", "History::showHistory");
        $router->handle();
        return $router;
    });

    // Обработка запроса
    $application = new Phalcon\Mvc\Application($di);



    echo $application->handle()->getContent();

} catch (Phalcon\Exception $e) {
    echo "PhalconException: ", $e->getMessage();
}