<?php
// Файлы phpmailer
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];


// Формирование самого письма
$title = "Запрос на подписку Universal";

$body = "
<h2>Новое обращение</h2>
<b>Почта:</b><br>$email
";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ithater.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'info@ithater.ru'; // Логин на почте
    $mail->Password   = 'S4h1T0j9'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('info@ithater.ru', 'ithater'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('nerusini@mail.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
// header('Location: thankyou.html');