<?php
$servername = "your_database_host";
$username = "your_database_username";
$password = "your_database_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];

$sql = "INSERT INTO email_table (email) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    echo "Email stored successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
