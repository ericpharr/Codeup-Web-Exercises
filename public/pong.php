<?php

require_once 'functions.php';

function pageController()
{
	$hits = inputGet('hits');

	$turn = inputGet('turn');

	if ($turn == 'hit'){
		$hits++;
	} elseif ($turn == 'miss') {
		$hits = 0;
	}

	return [
		'hits' => $hits,
		'turn' => $turn
	];

}

extract(pageController());
 ?>
 <!DOCTYPE html>
 <html>
 	<head>
 		<meta charset="utf-8">
 		<title>PONG</title>
 	</head>
 	<body>
		<h1>PONG!</h1>
		<h4><?= escape($hits) ?></h4>
 		<a href="ping.php?turn=hit&hits=<?= escape($hits) ?>">HIT</a>
 		<a href="ping.php?turn=miss$hits=0">MISS</a>
 	</body>
 </html>
