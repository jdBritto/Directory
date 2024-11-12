<?php
    $meses = array (
        'Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
    );
        
rsort ($meses);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recorrer Arreglos</title>
</head>
<body>
    <header>
        <h1>Meses del año</h1>
        <div>
            <ul>
                <?php
                    foreach ($meses as $mes) {
                        echo '<li>' . $mes . '</li>';
                    }
                ?>
            </ul>
    </div>
    </header>
</body>
</html>