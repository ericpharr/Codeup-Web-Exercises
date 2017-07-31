<?php
function pageController(){
	$counter = 0;

	$count = $_GET['count'];

	return [
		'counter' => $counter;
		'count' => $count;
	]
}

function changeCounter(){
	if ($count == 'up') {
		return $counter ++ ;
	} else {
		return $counter -- ;
	}
}

extract(pageController)
 ?>

 <!DOCTYPE html>
 <html>
 	<head>
 		<meta charset="utf-8">
 		<title></title>
 	</head>
 	<body>
 		<a href="counter.php?count=up">up</a>
		<a href="counter.php?count=down">down</a>
 	</body>
 </html>
