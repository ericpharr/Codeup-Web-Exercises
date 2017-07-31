<?php
    function pageController(){
    $contacts = [
      'contact1'=> [
          "name" => "Jack Blank",
          "number"=> "123-123-1234"
      ],
      'contact2'=> [
          "name" => "Sam Smith",
          "number"=> "123-321-5432"
      ],
      'contact3'=> [
          "name" => "Fred Cat",
          "number"=> "333-333-3333"
      ]

    ];

    return ["contacts" => $contacts];
    }

    extract(pageController());
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Contacts</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
    </head>
    <body>
        <h1 class="jumbotron text-center">Contacts</h1>
        <div class="container">
            <table class="table table-striped table-bordered table-condensed table-responsive text-center">
                <thead>
                    <td>Name</td>
                    <td>Number</td>
                </thead>
                <?php foreach($contacts as $contact) : ?>
                <tr>
                    <td><?= $contact['name'] ?></td>
                    <td><?= $contact['number'] ?></td>
                </tr>
                <?php endforeach ?>
            </table>
        </div>
    </body>
</html>
