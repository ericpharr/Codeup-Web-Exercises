<?php

require_once '../Input.php';

function pageController()
{
	$hits = Input::get('hits');

	$turn = Input::get('turn');

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

var_dump(pageController());
 ?>
 <!DOCTYPE html>
 <html>
 	<head>
 		<meta charset="utf-8">
 		<title>PONG</title>
 	</head>
 	<body>
		<h1>PONG!</h1>
		<h4><?= $hits ?></h4>
 		<a href="ping.php?turn=hit&hits=<?= $hits ?>">HIT</a>
 		<a href="ping.php?turn=miss$hits=0">MISS</a>
 	</body>
 </html>
