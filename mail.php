<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['user_name'])) {$name = $_POST['user_name'];}
    if (isset($_POST['phone'])) {$name2 = $_POST['phone'];}

    $to = "info@blackhorse.com.ua"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "info@bigbox-save.com"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "Сообщение с сайта Big box";
    $message = "<b>Посетитель :</b> $name <b> с номером телефа: </b> $name2<br><b>Оставил(а) вам заявку на обратную связь";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
     header('location: thank-you.html');
    }
    else
    {
    echo '<h3>Ошибка. Сообщение не отправлено!</h3>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>