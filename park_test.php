<?php

require_once "Park.php";

// $parks = Park::all();
$parks = Park::paginate(5, 1);

 // $park = new Park();
 // $park->name = 'Acadia';
 // $park->location = 'Maine';
 // $park->areaInAcres = 48995.91;
 // $park->dateEstablished = '1919-02-26';
 // $park->insert();

var_dump($parks);

 ?>
