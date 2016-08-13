<?php

use Phalcon\Mvc\Model;

class History extends Model
{
    public function getSource()
    {
        return "history";
    }
}