<?php
include 'config.php';
$rockPos = $_GET['stonePos'];
$time = $_GET['time'];
$jumpPos = $_GET['jumpPos'];
$rockSize = $_GET['stoneSize'];
$finish = $_GET['finish'];
$query = "INSERT INTO result(rockPos, time, jumpPos, rockSize, finish) VALUE($rockPos, $time, $jumpPos, $rockSize, $finish)";
mysqli_query($connect, $query);
header("Location: http://donat/");
?>