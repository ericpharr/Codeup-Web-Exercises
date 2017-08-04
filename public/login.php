<?php
session_start();

require_once "../Auth.php";
require_once "../Log.php";
require_once "../Input.php";

if (Auth::check()) {
	header("Location: http://codeup.dev/authorized.php");
	die();
}

function pageController(){


	$login = "";

	$username = Input::get('username');

	$password = Input::get('password');

	if (!empty($username) && !empty($password)){
		if (Auth::attempt($username, $password)){
			header("Location: http://codeup.dev/authorized.php");
			die();
		} else {
			$login .= "Sorry, wrong username or password :(";
		}
	}

	return[
		'login' => $login
	];
}

extract(pageController());

 ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Login Page</title>
	</head>
	<body>

		<h1>Login</h1>
		<form method="post">
			<input type="text" name="username" placeholder="Enter username" value="">
			<input type="password" name="password" placeholder="" value="">
			<button type="submit">Submit</button>
		</form>

		<h4><?= $login ?></h4>

	</body>
</html>
