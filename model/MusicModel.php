<?php
class MusicModel{
    protected $db;

    public function __construct($database)
    {
        $this->db = $database;
    }

    public function getAllMusic()
    {
        $link = $this->db->openDbConnection();

        $result = $link->query('SELECT * FROM music ORDER BY id');
        $result->setFetchMode(PDO::FETCH_ASSOC);

        $music = array();
        while ($row = $result->fetch()) {
            $music[] = $row;
        }
        $this->db->closeDbConnection($link);
        
		return $music;
    }

    public function getMusicById($id)
    {
        $link = $this->db->openDbConnection();

        $query = 'SELECT * FROM music WHERE  id=:id';
        $statement = $link->prepare($query);
        $statement->bindValue(':id', $id, PDO::PARAM_INT);
        $statement->execute();

        $row = $statement->fetch(PDO::FETCH_ASSOC);

        $this->db->closeDbConnection($link);

        return $row;
    }
	
    public function insert()
    {
        $link = $this->db->openDbConnection();

        $query = 'INSERT INTO music (name, singer, category, album, year) VALUES (:name, :singer, :category, :album, :year)';
        $statement = $link->prepare($query);
        $statement->bindValue(':name', $_POST['name'], PDO::PARAM_STR);
        $statement->bindValue(':singer', $_POST['singer'], PDO::PARAM_STR);
        $statement->bindValue(':category', $_POST['category'], PDO::PARAM_STR);
        $statement->bindValue(':album', $_POST['album'], PDO::PARAM_STR);
        $statement->bindValue(':year', $_POST['year'], PDO::PARAM_STR);
        $statement->execute();

        $this->db->closeDbConnection($link);
    }

    public function update($id)
    {
        $link = $this->db->openDbConnection();

        $query = "UPDATE music SET name = :name, singer = :singer, category = :category, album = :album, year = :year WHERE id = :id";
        $statement = $link->prepare($query);
        $statement->bindValue(':name', $_POST['name'], PDO::PARAM_STR);
        $statement->bindValue(':singer', $_POST['singer'], PDO::PARAM_STR);
        $statement->bindValue(':category', $_POST['category'], PDO::PARAM_STR);
        $statement->bindValue(':album', $_POST['album'], PDO::PARAM_STR);
        $statement->bindValue(':year', $_POST['year'], PDO::PARAM_STR);
        $statement->bindValue(':id', $id, PDO::PARAM_INT);
        $statement->execute();

        $this->db->closeDbConnection($link);
    }

    public function delete($id)
    {
        $link = $this->db->openDbConnection();

        $query = "DELETE FROM music WHERE id = :id";
        $statement = $link->prepare($query);
        $statement->bindValue(':id', $id, PDO::PARAM_INT);
        $statement->execute();

        $this->db->closeDbConnection($link);
    }
}