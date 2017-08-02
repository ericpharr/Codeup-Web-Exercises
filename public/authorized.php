<?php
session_start();
if (!isset($_SESSION['logged_in_user'])){
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
