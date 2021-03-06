<?php

/**
 * A Class for interacting with the national_parks database table
 *
 * contains static methods for retrieving records from the database
 * contains an instance method for persisting a record to the database
 *
 * Usage Examples
 *
 * Retrieve a list of parks and display some values for each record
 *
 *      $parks = Park::all();
 *      foreach($parks as $park) {
 *          echo $park->id . PHP_EOL;
 *          echo $park->name . PHP_EOL;
 *          echo $park->description . PHP_EOL;
 *          echo $park->areaInAcres . PHP_EOL;
 *      }
 *
 * Inserting a new record into the database
 *
 *      $park = new Park();
 *      $park->name = 'Acadia';
 *      $park->location = 'Maine';
 *      $park->areaInAcres = 48995.91;
 *      $park->dateEstablished = '1919-02-26';
 *
 *      $park->insert();
 *
 */
class Park
{

    ///////////////////////////////////
    // Static Methods and Properties //
    ///////////////////////////////////

    /**
     * our connection to the database
     */
    public static $dbc = null;

    /**
     * establish a database connection if we do not have one
     */
    public static function dbConnect() {

        require 'db_connect.php';

        if (! is_null(self::$dbc)) {
            return;
        }
        self::$dbc = $dbc;
    }

    /**
     * returns the number of records in the database
     */
    public static function count() {
        // TODO: call dbConnect to ensure we have a database connection

        self::dbConnect();

        // TODO: use the $dbc static property to query the database for the
        //       number of existing park records

        $query = "SELECT count(*) FROM parks;";

        $stmt = self::$dbc->query($query, PDO::FETCH_NUM);

        return $stmt->fetch()[0];

    }

    /**
     * returns all the records
     */
    public static function all() {
        // TODO: call dbConnect to ensure we have a database connection

        self::dbConnect();

        // TODO: use the $dbc static property to query the database for all the
        //       records in the parks table

        $stmt = self::$dbc->query("SELECT * FROM parks;");

        // TODO: iterate over the results array and transform each associative
        //       array into a Park object

        $parks = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // print_r($parks);

        // TODO: return an array of Park objects

        $parkObjArray = [];

        foreach ($parks as $park) {
            $parkObj = new Park();
            $parkObj->id = $park['id'];
            $parkObj->name = $park['name'];
            $parkObj->location = $park['location'];
            $parkObj->dateEstablished = $park['date_established'];
            $parkObj->areaInAcres= $park['area_in_acres'];
            $parkObj->description = $park['description'];
            array_push($parkObjArray, $parkObj);
        }

        return $parkObjArray;
    }

    /**
     * returns $resultsPerPage number of results for the given page number
     */
    public static function paginate($pageNo, $resultsPerPage = 4) {
        // TODO: call dbConnect to ensure we have a database connection

        self::dbConnect();

        // TODO: calculate the limit and offset needed based on the passed
        //       values

        $limit = $resultsPerPage;
        $offset = ($pageNo - 1) * $limit;

        // TODO: use the $dbc static property to query the database with the
        //       calculated limit and offset

        $statement = self::$dbc->prepare("SELECT * from parks order by name limit :limit offset :offset;");
    	$statement->bindValue(':limit', (int) $limit, PDO::PARAM_INT);
    	$statement->bindValue(':offset', (int) $offset, PDO::PARAM_INT);
    	$statement->execute();


        // TODO: return an array of the found Park objects

        $parks = $statement->fetchAll(PDO::FETCH_OBJ); //FETCH_OBJ

        return $parks;

    }

    /////////////////////////////////////
    // Instance Methods and Properties //
    /////////////////////////////////////

    /**
     * properties that represent columns from the database
     */
    public $id;
    public $name;
    public $location;
    public $dateEstablished;
    public $areaInAcres;
    public $description;

    /**
     * inserts a record into the database
     */
    public function insert() {
        // TODO: call dbConnect to ensure we have a database connection

        self::dbConnect();

        // TODO: use the $dbc static property to create a perpared statement for
        //       inserting a record into the parks table

        $statement = self::$dbc->prepare("INSERT into parks(name, location, date_established, area_in_acres, description)
        values (:name, :location, :date_established, :area_in_acres, :description);");

        // TODO: use the $this keyword to bind the values from this object to
        //       the prepared statement

        $statement->bindValue(':name', $this->name, PDO::PARAM_STR);
        $statement->bindValue(':location', $this->location, PDO::PARAM_STR);
        $statement->bindValue(':date_established', $this->dateEstablished, PDO::PARAM_STR);
        $statement->bindValue(':area_in_acres', $this->areaInAcres, PDO::PARAM_STR);
        $statement->bindValue(':description', $this->description, PDO::PARAM_STR);

        // TODO: excute the statement and set the $id property of this object to
        //       the newly created id

        $statement->execute();

        $this->id = self::$dbc->lastInsertId();
    }
}
