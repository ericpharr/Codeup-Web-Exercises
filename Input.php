<?php

class Input
{
    /**
     * Check if a given value was passed in the request
     *
     * @param string $key index to look for in request
     * @return boolean whether value exists in $_POST or $_GET
     */
    public static function has($key)
    {
        // TODO: Fill in this function
        return isset($_REQUEST[$key]);
    }

    /**
     * Get a requested value from either $_POST or $_GET
     *
     * @param string $key index to look for in index
     * @param mixed $default default value to return if key not found
     * @return mixed value passed in request
     */
    public static function get($key, $default = null)
    {
        // TODO: Fill in this function
        if (isset($_REQUEST[$key])){
		return $_REQUEST[$key];
    	}
    	return $default;
    }

    public static function escape($input)
    {
        return htmlspecialchars(strip_tags($input));
    }

    public static function getString($key)
    {
        $input = self::get($key);

        if (empty($input)){
            throw new Exception("cannot be empty");

        } else if (is_numeric($input) || !is_string($input)){
            throw new Excpetion("Must be a string");
        }
        return $input;
    }

    public static function getNumber($key)
    {
        $input = self::get($key);

        if (empty($input)){
            throw new Exception("input can't be empty!");
        } else if (!is_numeric($input)){
            throw new Exception("Error: must be a number");
        }
        return $input;
    }
    ///////////////////////////////////////////////////////////////////////////
    //                      DO NOT EDIT ANYTHING BELOW!!                     //
    // The Input class should not ever be instantiated, so we prevent the    //
    // constructor method from being called. We will be covering private     //
    // later in the curriculum.                                              //
    ///////////////////////////////////////////////////////////////////////////
    private function __construct() {}
}
