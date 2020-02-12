<?php

header('Access-Control-Allow-Origin: *');

$to =  $_POST["email"];
$email = $_POST['email'];
$phone = $_POST['phone'];
$name = $_POST['name'];
$surname = $_POST['surname'];
$midlname = $_POST['midlname'];

function send_mail($to, $body, $email, $filename) {
	$subject = 'Форма обратной связи с сайта';
	$boundary = "--".md5(uniqid(time())); // генерируем разделитель
	$headers = "From: ".$email."\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
	$multipart = "--".$boundary."\r\n";
	$multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
	$multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

	$body = $body."\r\n\r\n";

	$multipart .= $body;
	foreach ($filename as $key => $value) {
        $fp = fopen($value[0], "r");
        $content = fread($fp, filesize($value[0]));
        fclose($fp);
        $file .= "--".$boundary."\r\n";
        $file .= "Content-Type: application/octet-stream\r\n";
        $file .= "Content-Transfer-Encoding: base64\r\n";
        $file .= "Content-Disposition: attachment; filename=\"".$value[1]."\"\r\n\r\n";
        $file .= chunk_split(base64_encode($content))."\r\n";
    }
    $multipart .= $file."--".$boundary."--\r\n";
    mail($to, $subject, $multipart, $headers);
}


if (true) {

    if($_FILES) {
        $filepath = array();
        $filename = array();
        $file2 = array();
        $i = 0;
        foreach ($_FILES["file"]["error"] as $key => $error) {
            if ($error == UPLOAD_ERR_OK) {
                $filename[$i][0] = $_FILES["file"]["tmp_name"][$key];
                $filename[$i][1] = $_FILES["file"]["name"][$key];
                $i++;
            }
        }
    }

    $body = "Кому отправлено: ".$email."\r\n\r\n";
    $body .= "Телефон: ".$phone."\r\n\r\n";
    $body .= "Имя: ".$name."\r\n\r\n";
    $body .= "Фамилия: ".$surname."\r\n\r\n";
    $body .= "Отчество: ".$midlname."\r\n\r\n";

    send_mail($to, $body, $email, $filename);
}

echo 'Отправлено';
?>