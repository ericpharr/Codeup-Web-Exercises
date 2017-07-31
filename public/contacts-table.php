<?php

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
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Contacts</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style media="screen">
            td{
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1 class="jumbotron">Contacts</h1>
        <div class="container">
            <table class="table table-striped table-bordered table-condensed table-responsive">
                <thead>
                    <td>Name</td>
                    <td>Number</td>
                </thead>
                <?php foreach($contacts as $contact) { ?>
                <tr>
                    <td><?php echo $contact['name'] ?></td>
                    <td><?php echo $contact['number'] ?></td>
                </tr>
                <?php } ?>
            </table>
        </div>
    </body>
</html>
