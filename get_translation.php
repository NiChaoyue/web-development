
<?php
// author NiChaoyue
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "translations_db";

$conn = new mysqli($servername, $username, $password, $dbname);
//If the Connection fail
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Connect to the Character Set
if (!$conn->set_charset("utf8mb4")) {
    die("Error loading character set utf8mb4: " . $conn->error);
}

$language = $_GET['language'];

$sql = "SELECT header, footer, content, navigation, buttons FROM translations WHERE language = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $language);
$stmt->execute();
$stmt->bind_result($header, $footer, $content, $navigation, $buttons);
$stmt->fetch();

$response = array(
    'header' => $header,
    'footer' => $footer,
    'content' => json_decode($content, true),
    'navigation' => json_decode($navigation, true),
    'buttons' => json_decode($buttons, true)
);

echo json_encode($response);

$stmt->close();
$conn->close();
?>
