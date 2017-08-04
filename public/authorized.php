<?php
session_start();
require_once "../Auth.php";

if (!Auth::check()){
	header("Location: http://codeup.dev/login.php");
}

 ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Authorized</title>
	</head>
	<body>
		<h1>Authorized</h1>
		<a href="logout.php">Logout</a>
	</body>
</html>
