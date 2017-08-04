<?php
session_start();
require_once 'functions.php';

function pageController() {
    clearSession();
    redirect("login.php");
}
pageController();
