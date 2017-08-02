<?php
session_start();

if (isset($_SESSION['logged_in_user'])) {
	header("Location: http://codeup.dev/authorized.php");
	die();
}

function pageController(){


	$login = "";

	$username = isset($_POST['username']) ? $_POST['username'] : "";

	$password = isset($_POST['password']) ? $_POST['password'] : "";

	if (!empty($username) && !empty($password)){
		if (($username == 'guest' && $password == 'password')||($username == 'eric' && $password == 'password')){
			$_SESSION['logged_in_user'] = true;
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
