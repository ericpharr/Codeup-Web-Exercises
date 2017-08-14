<?php
require_once("park_logins.php");

$dbc = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);

$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// $query =

$dbc->exec("truncate parks;");

$file = fopen("national_parks.csv", "r");

$header = true;

while (($line = fgetcsv($file)) !== FALSE) {
  if ($header) {
	  $header = false;
	  continue;
  };

  $query = "INSERT into parks(name, location, date_established, area_in_acres)
  			values (:name, :location, :date_established, :area_in_acres);";

  $stmt = $dbc->prepare($query);
  $stmt->bindValue(':name', $line[0], PDO::PARAM_STR);
  $stmt->bindValue(':location', $line[1], PDO::PARAM_STR);
  $stmt->bindValue(':date_established', $line[2], PDO::PARAM_STR);
  $stmt->bindValue(':area_in_acres', $line[3], PDO::PARAM_STR);

  $stmt->execute();
}

fclose($file);

 ?>
