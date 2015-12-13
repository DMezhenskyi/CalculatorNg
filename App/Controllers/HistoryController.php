<?php

class HistoryController extends Phalcon\Mvc\Controller
{
    public function saveHistoryAction()
    {
        if ($this->request->isPost() == true) {
            $request = json_decode(file_get_contents("php://input"));
            $history = new History();
            $history->history_string = $request->string;
            $history->create() == false
                ? $this->response->setStatusCode(403, 'Server Error')
                : $this->response->setStatusCode(201, 'OK');

        } else {
            $this->response->setStatusCode(403, 'Bad request');
        }
    }

    public function showHistoryAction()
    {
            $history = History::find();
            return $this->view->setVars(
                    array(
                        'history' => $history,
                    )
                )->render('layouts', 'history');
    }
}