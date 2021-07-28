<?php
namespace App\Controllers;

use App\Models\MusicModel;
use Core\View;
use Core\Controller;

class MusicController extends Controller {

    /**
     * Retrieve all records
     * */
    public function index() {
        View::renderTemplate('Music/list.html', [
            'music' => MusicModel::getAll()
        ]);
    }

    /**
     * Get the record data by its ID
     * */
    public function detail()
    {
        $id = $this->route_params['id'];
        View::renderTemplate('Music/detail.html', [
            'music' => (new \App\Models\MusicModel)->getSingle($id)
        ]);
    }

    /**
     * Create new record
     * */
    public function create()
    {
        if ($_POST) {
            (new \App\Models\MusicModel)->insert();
            header("Location: /music");
        } else {
            View::renderTemplate('Music/form.html', [
                'status' => 'create',
                'form' => $_POST
            ]);
        }
    }

    /**
     * Update the record data by its ID
     * */
    public function edit()
    {
        $id = $this->route_params['id'];
        if ($_POST) {
            (new \App\Models\MusicModel)->update($id);
            header("Location: /music");
        } else {
            View::renderTemplate('Music/form.html', [
                'status' => 'edit',
                'form' => (new \App\Models\MusicModel)->getSingle($id)
            ]);
        }
    }

    /**
     * Delete the record data by its ID
     * */
    public function delete()
    {
        $id = $this->route_params['id'];
        if ($id) {
            (new \App\Models\MusicModel)->delete($id);
            header("Location: /music");
        }
    }
}