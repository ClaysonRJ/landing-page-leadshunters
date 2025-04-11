<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST["nome"];
    $empresa = $_POST["empresa"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];

    $para = "leadshunters.adm@gmail.com";
    $assunto = "Novo lead do site";
    $mensagem = "
        Nome: $nome\n
        Empresa: $empresa\n
        E-mail: $email\n
        Telefone: $telefone\n
    ";

    $headers = "From: clayson@leadshunters.com.br";

    if (mail($para, $assunto, $mensagem, $headers)) {
        echo "OK";
    } else {
        echo "ERRO";
    }
}
?>
