
<?php
// author NiChaoyue
header('Content-Type: application/json');

$host = 'localhost';
$db = 'user_db';
$user = 'root';
$pass = ''; // 这里替换成你的数据库密码

$mysqli = new mysqli($host, $user, $pass, $db);

if ($mysqli->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

$input = json_decode(file_get_contents('php://input'), true);

$vorname = $input['vorname'];
$nachname = $input['nachname'];
$encrypted_password = $input['password'];

$key = "WOaiNichaoYuE,takezhenshiTaiKUaL";

$decrypted_password = vegenereDecrypt($encrypted_password, $key);
$password_hash = md5($decrypted_password);

$query = $mysqli->prepare('SELECT * FROM users WHERE vorname = ? AND nachname = ? AND password_hash = ?');
$query->bind_param('sss', $vorname, $nachname, $password_hash);
$query->execute();
$result = $query->get_result();

if ($result->num_rows > 0) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

function vegenereDecrypt($word, $key) {
    $erg = "";
    for ($j = 0; $j < strlen($word); $j++) {
        $key_charcode = ord($key[$j % strlen($key)]) - 32;
        $secret_char_decrypt = ((ord($word[$j]) - 32 - $key_charcode + 96) % 96) + 32;
        $erg .= chr($secret_char_decrypt);
    }
    return $erg;
}
?>
