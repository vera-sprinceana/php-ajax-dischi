<?php
 include __DIR__ . '/../partials/index.php';


 $risposta=[
     'success'=>true,
     'response'=> $database,
 ];


 header('Content-Type: application/json');

 echo json_encode($risposta);
?>
