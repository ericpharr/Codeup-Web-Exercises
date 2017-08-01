<?php
function pageController(){

$count = isset($_GET['count']) ? $_GET['count'] : 99;

// $change = isset($_GET['change']) ? $_GET['change'] : "";

// if ($change == 'up') {
// 	$count += 1;
// } elseif ($change == 'down'){
// 	$count -= 1;
// }

return [
	'count' => $count
	// 'change' => $change
];

}

extract(pageController());
 ?>

 <!DOCTYPE html>
 <html>
 	<head>
 		<meta charset="utf-8">
 		<title></title>
 	</head>
 	<body>
		<h1><?= $count ?></h1>

 		<a href="counter.php?count=<?= $count + 1?>">up</a>
		<strong><a href="counter.php?count=<?= $count - 1?>">down</a></strong>
 	</body>
 </html>
