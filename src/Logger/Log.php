<?php
namespace App\Logger;

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use Monolog\Logger;
use Monolog\Formatter\LineFormatter;
use Monolog\Handler\HandlerInterface;
use Monolog\Handler\StreamHandler;
use Psr\Log\LoggerInterface;

class Log extends Logger
{
	/**
	 * @var string
	 */
	protected $name;

	/**
	 * The handler stack
	 *
	 * @var HandlerInterface[]
	 */
	protected $handlers;

	/**
	 * Processors that will process all log records
	 *
	 * To process records of a single handler instead, add the processor on that specific handler
	 *
	 * @var callable[]
	 */
	protected $processors;

	/**
	 * @var string
	 */
	protected $fileName;

	/**
	 * Set the timezone to be used for the timestamp of log records.
	 *
	 * This is stored globally for all Logger instances
	 *
	 * @param \DateTimeZone $tz Timezone object
	 */

	protected $defaultTimezone;

	/**
	 * @param string		$name       The logging channel
	 * @param string		$handlers   Optional stack of handlers, the first one in the array is called first, etc.
	 * @param callable[]    $processors Optional array of processors
	 */

	public function __construct
	(
		$name = 'DEBUG',
		string $fileName = 'debug.log', 
		string $defaultTimezone = 'Asia/Taipei',
		array $handlers = array(),
		array $processors = array()
	)
	{
		parent::__construct($name, $handlers, $processors);

		$this->name = $name;
		$this->fileName = $fileName;
		$this->defaultTimezone = new \DateTimeZone($defaultTimezone);
		$this->setHandlers($handlers);
		$this->processors = $processors;

		$this->_construct();
	}

	protected function _construct()
	{
		$this->initLog();
	}

	/**
	 * Pushes a handler on to the stack.
	 *
	 * @param string $fileName
	 * @return $this
	 */
	public function initLog()
	{
		$fileName = $_SERVER['DOCUMENT_ROOT'] . '/var/log/' . $this->fileName;

		$output = "[%datetime%] %channel%.%level_name%: %message% %context%\n";
		$formatter = new LineFormatter($output, null, true, true);

		$streamHandler = new StreamHandler($fileName);
		$streamHandler->setFormatter($formatter);

		$this->setTimezone($this->defaultTimezone);
		$this->pushHandler($streamHandler);

		return $this;
	}

}
