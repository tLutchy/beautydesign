<?php
include('protect.php');

?>

<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="styles.css">
<script src="scripts.js"></script>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel</title>

</head>


<body onLoad="loading()">
<div class="box-load">
    <div class="pre"></div>
</div>
<div class="content">

    Bem vindo ao Painel, <?php echo $_SESSION['nome']; ?>.

    <p>

    <a href="logout.php">Sair</a>
    </p>
</div>


</body>
</html>