<?php

session_start();
clearSession();


function clearSession()
{
    session_unset();

    session_destroy();

    session_regenerate_id();

    session_start();

	header("Location: http://codeup.dev/login.php");
	die;
}

 ?>
