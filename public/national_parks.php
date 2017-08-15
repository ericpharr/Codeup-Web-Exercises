<?php

require_once __DIR__ . '/../park_logins.php';
require_once __DIR__ . '/../db_connect.php';
require_once __DIR__ . '/../Input.php';
require_once __DIR__ . '/../Park.php';

function pageController($connection)
{
    $data = [];

    $page = Input::escape(Input::get('page', 1));

    $limit = Input::escape(Input::get('show', 4));

    $offset = ($page - 1) * $limit;

    // $query = "SELECT * from parks order by name limit :limit offset :offset";
    //
	// $statement = $connection->prepare($query);
	// $statement->bindValue(':limit', (int) $limit, PDO::PARAM_INT);
	// $statement->bindValue(':offset', (int) $offset, PDO::PARAM_INT);
	// $statement->execute();
    //
    // $parks = $statement->fetchAll(PDO::FETCH_ASSOC);

    $parks = Park::paginate($page, $limit);

    $data['parks'] = $parks;
    $data['page'] = $page;
	$data['limit'] = $limit;

    //------------------------------------------------------


    if (!empty($_POST)) {
        $park = new Park();
        $park->name = Input::escape(Input::get('name'));
        $park->location = Input::escape(Input::get('location'));
        $park->areaInAcres = Input::escape(Input::get('area_in_acres'));
        $park->dateEstablished = date("Y-m-d", strtotime(Input::escape(Input::get('date_established'))));
        $park->description = Input::escape(Input::get('description'));
        $park->insert();
    }
    // if (Input::has('name')){
    //     $newName = Input::escape(Input::get('name'));
    // }
    //
    // if (Input::has('location')){
    //     $newLocation = Input::escape(Input::get('location'));
    // }
    //
    // if (Input::has('date_established')){
    //     $newDate = Input::escape(Input::get('date_established'));
    //
    //     $newDate = date("Y-m-d", strtotime($newDate));
    // }
    //
    // if (Input::has('area_in_acres')){
    //     $newArea = Input::escape(Input::get('area_in_acres'));
    // }
    //
    // if (isset($newName) && isset($newLocation) && isset($newDate) && isset($newArea)){
    //     $insertQuery = "INSERT into parks(name, location, date_established, area_in_acres)
    //     values (:name, :location, :date_established, :area_in_acres);";
    //
    //     $stmt = $connection->prepare($insertQuery);
    //     $stmt->bindValue(':name', $newName, PDO::PARAM_STR);
    //     $stmt->bindValue(':location', $newLocation, PDO::PARAM_STR);
    //     $stmt->bindValue(':date_established', $newDate, PDO::PARAM_STR);
    //     $stmt->bindValue(':area_in_acres', $newArea, PDO::PARAM_STR);
    //
    //     $stmt->execute();
    // }



    return $data;
}

extract(pageController($dbc));

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title></title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

</head>
<body>

<main class="container">
    <h1>Parks</h1>

    <section class="container col-md-8 ">
        <div class="container-fluid">

            <a href="?page=<?php if($page>1){echo $page - 1;}else{echo 1;} ?>&show=<?= $limit ?>"  class="btn btn-primary">Previous</a>

            <a href="?page=<?= $page + 1 ?>&show=<?= $limit ?>" class="btn btn-primary">Next</a>

            <a href="?show=6" class="btn btn-info">Show 6 parks per page</a>
            <a href="?show=12" class="btn btn-info">Show 12 parks per page</a>
        </div>

        <br>

        <?php foreach($parks as $park): ?>
            <div class="well text-center col-md-6">
                <h4><?= $park->name ?></h4>
                <p>Location: <?= $park->location ?></p>
                <p>Date Established: <?= $park->date_established ?></p>
                <p>Area in acres: <?= $park->area_in_acres ?></p>
            </div>
        <?php endforeach; ?>
    </section>

    <section class="container col-md-4">
        <h1>Add a National Park</h1>
		<form class="form-group" action="national_parks.php" method="post">
			<input class='col-md-4 form-control'type="text" name="name" placeholder="Park Name" required>
            <input class='col-md-4 form-control'type="text" name="location" placeholder="Location" required>
            <input class='col-md-4 form-control'type="text" name="date_established" placeholder="Date Established" required>
            <input class='col-md-4 form-control'type="text" name="area_in_acres" placeholder="Area (acres)" required>
            <input class='col-md-4 form-control'type="textarea" name="description" placeholder="description" required>
            <button class='btn btn-primary col-md-3 col-md-offset-1'type="submit" name="button">Submit</button>
		</form>
    </section>


</main>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</body>
</html>
