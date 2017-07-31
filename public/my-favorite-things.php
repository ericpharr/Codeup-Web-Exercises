<?php

    $favoriteThings = ["guitar", "travel", "learning", "music", "puzzles"];

?>

<!DOCTYPE html>

<head>
    <title>
        Favorite things
    </title>
    <style media="screen">
        tr:nth-child(even){
            background-color: lightgray;
        }
        table {
            border-collapse: collapse;
            display: flex;
            align-content: center;
        }
        td {
            border: 1px solid black;
            display: flex;
            align-content: center;
        }
    </style>
</head>

<body>
    <h1>My Favorite things</h1>

    <table>
        <?php foreach($favoriteThings as $thing): ?>
        <tr><td><?= $thing ?></td></tr>
        <?php endforeach ?>
    </table>
</body>
