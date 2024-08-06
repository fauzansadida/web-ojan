<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "Form submitted.<br>";
    $nama = htmlspecialchars($_POST['nama']);
    $alamat = htmlspecialchars($_POST['alamat']);
    $paket = htmlspecialchars($_POST['paket']);

    echo "Nama: $nama<br>";
    echo "Alamat: $alamat<br>";
    echo "Paket: $paket<br>";

    $order = "Nama: $nama\nAlamat: $alamat\nPaket: $paket\n\n";

    $file = 'orders.txt';

    if (file_put_contents($file, $order, FILE_APPEND | LOCK_EX)) {
        echo "Pesanan berhasil disimpan.";
    } else {
        echo "Terjadi kesalahan saat menyimpan pesanan.";
    }
} else {
    echo "Form tidak terisi dengan benar.";
}
?>