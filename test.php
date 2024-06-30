<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8"); 

$connect = mysqli_connect(
    'DB_NAME', # service name
    'username', # username
    'password', # password
    'TABLE_NAME' # db table
);
$table_name = "resort_master_1";
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $query = "SELECT * FROM $table_name";

        $result = $connect->query($query);

        $rows = array();
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $rows[] = $row;
            }
        }
        echo json_encode($rows);
        break;
    case "POST":
        $data = json_decode(file_get_contents('php://input'));

        if (!$data) {
            http_response_code(400);
            echo json_encode(['status' => 0, 'message' => 'Invalid JSON data received.']);
            exit;
        }

        // Prepare SQL statement
        $sql = "INSERT INTO $table_name (title, description, price, coverImg, rating, reviewCount, location, openSpots) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $connect->prepare($sql);

        if (!$stmt) {
            http_response_code(500);
            echo json_encode(['status' => 0, 'message' => 'Prepare statement error: ' . $connect->error]);
            exit;
        }

        // Bind parameters
        $stmt->bind_param("ssssssss", $data->title, $data->description, $data->price, $data->coverImg, $data->rating, $data->reviewCount, $data->location, $data->openSpots);

        // Execute statement
        if ($stmt->execute()) {
            echo json_encode(['status' => 1, 'message' => 'Record created successfully.']);
        } else {
            http_response_code(500);
            echo json_encode(['status' => 0, 'message' => 'Execute statement error: ' . $stmt->error]);
        }

        $stmt->close();
        break;
}
$connect->close();
?>

