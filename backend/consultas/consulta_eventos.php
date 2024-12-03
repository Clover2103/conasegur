<?php

// Obtener la URL permitida desde las variables de entorno
$allowedOrigin = getenv('CORS_ALLOWED_ORIGIN');

// Si hay una URL permitida, usarla; de lo contrario, permitir todas las solicitudes (solo para desarrollo)
if ($allowedOrigin) {
    header("Access-Control-Allow-Origin: $allowedOrigin");
} else {
    header("Access-Control-Allow-Origin: *"); // Nota: '*', aunque es inseguro, se usa para desarrollo
}

// Permitir métodos y cabeceras específicas
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Incluir la conexión a la base de datos
include_once("../conexionBDEventos.php");
$objeto = new Cconexion();
$conexion = $objeto->conexionBD();

// Establecer el tipo de contenido de la respuesta
header('Content-Type: application/json');

try {
    // Consulta SQL para obtener los eventos
    $query = "SELECT nombre AS title, fecha_inicio AS start, fecha_fin AS end FROM eventos_especiales WHERE empresa = 2";
    $resultado = $conexion->query($query);

    $eventos = [];
    // Recorrer los resultados y formatear las fechas
    while ($fila = $resultado->fetch(PDO::FETCH_ASSOC)) {
      if ($fila['start'] && $fila['end']) { // Verificar si las fechas no son nulas
          $fila['start'] = date('Y-m-d\TH:i:s', strtotime($fila['start']));
          $fila['end'] = date('Y-m-d\TH:i:s', strtotime($fila['end']));
          $eventos[] = $fila;
      }
    }

    // Devolver los eventos como JSON
    echo json_encode($eventos);
} catch (PDOException $e) {
    // En caso de error, devolver un mensaje de error como JSON
    echo json_encode(['error' => $e->getMessage()]);
}

?>