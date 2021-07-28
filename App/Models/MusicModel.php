<?php
namespace App\Models;

use Core\Model;
use PDO;

class MusicModel extends Model {

    /**
     * Get all the data as an associative array
     *
     * @return array
     */
    public static function getAll()
    {
        $db = static::getDB();
        $stmt = $db->query('SELECT * FROM music ORDER BY id DESC');

        $music = array();
        while ($row = $stmt->fetch()) {
            $music[] = $row;
        }

        return $music;
    }

    /**
     * Get single data by its ID as an associative array
     *
     * @return array
     */
    public static function getSingle($id)
    {
        $db = static::getDB();
        $stmt = $db->prepare('SELECT * FROM music WHERE  id=:id');
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        return $row;
    }
	
    /**
     * Insert new data into database
     * */
    public function insert()
    {
        $db = static::getDB();
        $stmt = $db->prepare('INSERT INTO music (name, singer, category, album, year) VALUES (:name, :singer, :category, :album, :year)');
        $stmt->bindValue(':name', $_POST['name'], PDO::PARAM_STR);
        $stmt->bindValue(':singer', $_POST['singer'], PDO::PARAM_STR);
        $stmt->bindValue(':category', $_POST['category'], PDO::PARAM_STR);
        $stmt->bindValue(':album', $_POST['album'], PDO::PARAM_STR);
        $stmt->bindValue(':year', $_POST['year'], PDO::PARAM_STR);
        $stmt->execute();
    }

    /**
     * Update the data by its ID
     *
     * @param $id
     * */
    public function update($id)
    {
        $db = static::getDB();
        $stmt = $db->prepare('UPDATE music SET name = :name, singer = :singer, category = :category, album = :album, year = :year WHERE id = :id');
        $stmt->bindValue(':name', $_POST['name'], PDO::PARAM_STR);
        $stmt->bindValue(':singer', $_POST['singer'], PDO::PARAM_STR);
        $stmt->bindValue(':category', $_POST['category'], PDO::PARAM_STR);
        $stmt->bindValue(':album', $_POST['album'], PDO::PARAM_STR);
        $stmt->bindValue(':year', $_POST['year'], PDO::PARAM_STR);
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
    }

    /**
     * Delete the data by its ID
     *
     * @param $id
     * */
    public function delete($id)
    {
        $db = static::getDB();
        $stmt = $db->prepare('DELETE FROM music WHERE id = :id');
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
    }
}