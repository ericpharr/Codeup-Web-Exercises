<?php
function pageController()
{
	$hits = isset($_GET['hits']) ? $_GET['hits'] : 0;

	$turn = isset($_GET['turn']) ? $_GET['turn'] : "";

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
