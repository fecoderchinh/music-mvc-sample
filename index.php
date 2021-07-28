<?php

    require __DIR__ . '/vendor/autoload.php';

    /**
     * Error and Exception handling
     */
    error_reporting(E_ALL);
    set_error_handler('Core\Error::errorHandler');
    set_exception_handler('Core\Error::exceptionHandler');


    /**
     * Routing
     */
    $r = new \Handling\Routing();

    // Add the routes
    $r->routes('', ['controller' => 'MusicController', 'action' => 'index']);
    $r->routes('music', ['controller' => 'MusicController', 'action' => 'index']);
    $r->routes('music/detail/{id:\d+}', ['controller' => 'MusicController', 'action' => 'detail']);
    $r->routes('music/create', ['controller' => 'MusicController', 'action' => 'create']);
    $r->routes('music/edit/{id:\d+}', ['controller' => 'MusicController', 'action' => 'edit']);
    $r->routes('music/delete/{id:\d+}', ['controller' => 'MusicController', 'action' => 'delete']);

    $r->dispatch($_SERVER['QUERY_STRING']);