<?php

$frm_name  = "Форма на сайте"; // from name
$recepient = 'hello@mono-design.ru, shirbagins@gmail.com';
//$recepient = 'terehovsergej@gmail.com';
$sitename  = "Mono";
$subject   = "Заявка с сайта";


$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);



$send_message = "<div style='font-size: 16px;'>
<br>
<b>Имя:</b> $name <br>
<b>Телефон:</b> $phone <br>
<br>
</div>";

mail($recepient, $subject, $send_message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
echo 'Ok!';