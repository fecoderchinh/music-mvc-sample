<?php 
class Database{
    protected $host = 'localhost';
    protected $dbname = 'mvc';
    protected $user = 'root';
    protected $password = 'root';

    public function openDbConnection()
    {
        $link = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->password);
        $link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $link;
    }

    public function closeDbConnection(&$link)
    {
        $link = null;
    }
}