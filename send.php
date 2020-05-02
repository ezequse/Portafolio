<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensaje enviado</title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
    <?php 
$myemail = 'ezequse3@hotmail.com';
$name = $_POST['nombre'];
$email = $_POST['email'];
$message = $_POST['mensaje'];

$to = $myemail;
$email_subject = "Nuevo mensaje: $subject";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n Correo: $email \n Mensaje: \n $message";
$headers = "From: $email";

mail($to, $email_subject, $email_body, $headers);
echo "El mensaje se ha enviado correctamente";
?>
<form method="POST" action="enviar.php">
            <input type="text" name="nombre" placeholder="NOMBRE">
            <input type="email" name="email" placeholder="CORREO">
            <textarea type="text" name="mensaje" placeholder="MENSAJE"></textarea>
            <input type="submit" value="ENVIAR">

            <p>Contáctame!</p>
        <form method="POST" action="enviar.php">
            <input type="text" name="nombre" placeholder="NOMBRE">
            <input type="email" name="email" placeholder="CORREO">
            <br>
            <textarea type="text" name="mensaje" placeholder="MENSAJE"></textarea>
            <br>
            <input type="submit" value="ENVIAR">

        </form>
</body>
</html>