<?php

require_once '../Input.php';

function pageController()
{

	$hits = Input::get('hits');

	$turn = Input::get('turn');

	if ($turn == 'hit'){
		$hits++;
	} elseif ($turn == 'miss'){
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
		<title>PING</title>
	</head>
	<body>
		<h1>PING!</h1>
		<h4><?= $hits ?></h4>
		<a href="pong.php?turn=hit&hits=<?= $hits ?>">HIT</a>
		<a href="pong.php?turn=miss&hits=0">MISS</a>
	</body>
</html>
