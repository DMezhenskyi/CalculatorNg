<?php

class IndexController extends Phalcon\Mvc\Controller
{

    public function indexAction()
    {
        return $this->view->render('layouts', 'index');
    }

}