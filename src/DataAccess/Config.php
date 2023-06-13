<?php
namespace App\DataAccess;

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use Dotenv\Dotenv;

class Config {
	private	$dotenv, $config, $env;
	private static $instance;
	public static $ROOT_PATH;

	public function __construct() {
		$dotenv = Dotenv::createImmutable($_SERVER['DOCUMENT_ROOT']);
		$dotenv->load();

		$this->env = $_ENV['APP_ENV'] ?? 'DEV';
	}

	public static function initRootPath() {
		if (!isset(self::$ROOT_PATH)) {
			self::$ROOT_PATH = $_SERVER['DOCUMENT_ROOT'];
		}
		return self::$ROOT_PATH;
	}

	public function getEnv() {
		return $this->env;
	}

	public function getRecaptchaConfig() {
		$config = array(
			'GOOGLE_RECAPTCHA_KEY' => $_ENV['GOOGLE_RECAPTCHA_KEY_' . $this->env],
			'GOOGLE_RECAPTCHA_SECRET' => $_ENV['GOOGLE_RECAPTCHA_SECRET_' . $this->env]
		);
		
		return $config;
	}

	public function getMailConfig() {
		$config = array(
			'MAIL_HOST' => $_ENV['MAIL_HOST_' . $this->env],
			'MAIL_USERNAME' => $_ENV['MAIL_USERNAME_' . $this->env],
			'MAIL_PASSWORD' => $_ENV['MAIL_PASSWORD_' . $this->env],
			'MAIL_ENCRYPTION' => $_ENV['MAIL_ENCRYPTION_' . $this->env],
			'MAIL_PORT' => $_ENV['MAIL_PORT_' . $this->env],
			'CF_FROM' => $_ENV['CF_FROM_' . $this->env],
			'CF_GENERAL' => $_ENV['CF_GENERAL_' . $this->env],
			'CF_AUNZ' => $_ENV['CF_AUNZ_' . $this->env],
			'CF_VT' => $_ENV['CF_VT_' . $this->env]
		);
		
		return $config;
	}

	public function getDatabaseConfig() {
		$config = array(
			'DB_HOST' => $_ENV['DB_HOST_' . $this->env],
			'DB_USER' => $_ENV['DB_USER_' . $this->env],
			'DB_PASS' => $_ENV['DB_PASS_' . $this->env],
			'DB_NAME' => $_ENV['DB_NAME_' . $this->env]
		);
		
		return $config;
	}

}
