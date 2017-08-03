<?php

function inputHas($key){
	return isset($_REQUEST[$key]);
}

function inputGet($key) {
	if (isset($_REQUEST[$key])){
		return $_REQUEST[$key];
	}
	return null;
}

function escape($input){

	if (!is_string($input)){
		return false;
	}
	return htmlspecialchars(strip_tags($input));
}

 ?>
