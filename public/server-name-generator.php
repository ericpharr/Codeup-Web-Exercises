<?php
    function pageController()

    {
        $adjectives = ["funny", "cold", "hot", "dead", "magic", "terrific", "wild", "impeccable", "fine", "super"];

        $nouns = ["concept", "mixture", "studio", "device", "nature", "owner", "department", "reality", "platform", "media"];

        return [
            "adjectives" => $adjectives,
            "nouns" => $nouns
        ];
    }


    function randomElement($array)
    {
        return $array[rand(0, count($array)-1)];
    }

    function serverName ($adjectives, $nouns)
    {
        return randomElement($adjectives) . " " . randomElement($nouns);
    }

    extract(pageController());

?>

<!DOCTYPE html>

<head>
    <title>
        Random Server Name Generator
    </title>
</head>
<body>
    <h1> <?= serverName($adjectives, $nouns) ?>
</body>
