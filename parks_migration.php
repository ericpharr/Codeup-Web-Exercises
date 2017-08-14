<?php

require_once("park_logins.php");

$dbc = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);

$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



// echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";

$query = "drop table if exists parks;
			CREATE TABLE parks (
			id INT UNSIGNED NOT NULL AUTO_INCREMENT,
			name VARCHAR(128) NOT NULL,
			location VARCHAR(128),
			date_established DATE,
			area_in_acres FIXED(10, 2),
			description TEXT,
			PRIMARY KEY (id)
		);";

$dbc->exec($query);

 ?>
