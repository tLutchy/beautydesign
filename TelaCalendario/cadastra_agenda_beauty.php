<?php

include "conexao_beauty.php";

$cliente=$_POST["nome"];
$funcionario=$_POST["funcionario"];
$servico=$_POST["serv"];
$data=$_POST["data"];
$horario=$_POST["horario"];
$obs=$_POST["obs"];
$titulo=$_POST["nome"]." ".$_POST["serv"];


$comandoSql = "insert into agenda (titulo_agenda, id_cliente, id_funcionario, id_servico, data_agenda, horainicio_agenda, obs_agenda)
values
('$titulo', '$cliente', '$funcionario', '$servico', '$data', '$horario', '$obs')";

$resultado=mysqli_query($con, $comandoSql);

//verificando se o comando sql foi executado
if($resultado==true){
    header("Location: frm_cad_cal_painel.php");
    //echo "<br><a href=lista_funcionario_beauty_tabela.php>Listagem de funcionário em Tabela</a>";
}else
    echo "Erro no cadastro";