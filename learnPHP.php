<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'akademik';

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die('gagal terhubung dengan server : ' . mysqli_connect_error());
}

$table_name = 'mahasiswa';

$create_table = "CREATE TABLE IF NOT EXISTS $table_name (
    id_mahasiswa INT(11) PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(20) NOT NULL,
    nim INT(5) NOT NULL,
    tugas INT(5) NOT NULL,
    uts INT(5) NOT NULL,
    uas INT(5) NOT NULL);";

$query_new_table = mysqli_query($conn, $create_table);

if (!$query_new_table) {
    die("ERROR: Tabel $table_name gagal dibuat " . mysqli_error($conn));
}

$insert_data = "INSERT INTO $table_name VALUES
    ('', 'Nibras Alyassar', 21074, 90, 85, 90),
    ('', 'Heical Chandra S.', 21075, 90, 90, 85),
    ('', 'M. Haikal A. Rasyid', 21076, 85, 90, 90),
    ('', 'Doni Oktavianto', 21077, 85, 85, 95),
    ('', 'Gerry Satria H.', 21078, 95, 85, 85);";

// $query_new_data = mysqli_query($conn, $insert_data);

$select_data = "SELECT * FROM mahasiswa";
$get_raw = mysqli_query($conn, $select_data);

$mahasiswa = [];

while ($row = mysqli_fetch_assoc($get_raw)) {
    array_push($mahasiswa, $row);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <style>
    * {
        font-family: 'Poppins', sans-serif;
    }

    th {
        text-align: left;
    }

    td,
    th {
        padding: 0.5rem;
        border: 1px solid black;
    }
    </style>
</head>

<body>
    <table>
        <thead>
            <th>No.</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Tugas</th>
            <th>UTS</th>
            <th>UAS</th>
        </thead>
        <tbody>
            <?php $no = 1;?>
            <?php foreach ($mahasiswa as $mhs): ?>
            <tr>
                <td><?=$no?></td>
                <td><?=$mhs['nama']?></td>
                <td><?=$mhs['nim']?></td>
                <td><?=$mhs['tugas']?></td>
                <td><?=$mhs['uts']?></td>
                <td><?=$mhs['uas']?></td>
            </tr>
            <?php $no++;?>
            <?php endforeach;?>
        </tbody>
    </table>
</body>

</html>