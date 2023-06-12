<?php
namespace App\DataAccess;

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use App\DataAccess\Config;
use App\Logger\Log;

class Mysql {
	private static $instance;

	private $connection, $logger, $dbConfig;
	private $dbhost, $dbuser, $dbpass, $dbname;

	private function __construct() {
		$this->_construct();
	}

	private function _construct()
	{
		$logger = new Log('DATABASE','Database.log');

		$dbConfig = (new Config())->getDatabaseConfig();
		list($dbhost, $dbuser, $dbpass, $dbname) = array_values($dbConfig);

		try {
			$this->connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
		
			if (!$this->connection) {
				throw new \Exception("Failed to access the database: " . mysqli_connect_error());
			} elseif (!mysqli_select_db($this->connection, $dbname)) {
				throw new \Exception("Can not select MySQL: " . mysqli_error($this->connection));
			}
		} catch (\Throwable $e) {
			$logger->error($e->getMessage());
			die("Failed to access the database, please ref to the log file");
		}
		
		mysqli_query($this->connection, "SET NAMES 'utf8'");
	}

	public static function getInstance() {
		if (self::$instance === null) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function getConnection() {
		return $this->connection;
	}
	
	private function __clone() {

	}
}
