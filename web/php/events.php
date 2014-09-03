<?php
try {
	header("Cache-control: no-cache");
	header("Content-type: application/json; charset=utf-8");
	$time = microtime(true);
	if (isset($_GET["likes"])) {
		$result = parse_mahout($_GET['likes']);
		$result["time"] = microtime(true) - $time;
		echo json_encode($result);
	} else {
		echo json_encode(array("success" => false, "time" => microtime(true) - $time, "error" => "no likes given"));
	}
} catch (Exception $e) {
	echo json_encode(array("success" => false, "time" => microtime(true) - $time, "error" => "unexpected error " . $e->getMessage()));
}





?>