<?php

// Configuración de CORS dinámica desde variables de entorno
$allowedOrigin = getenv('CORS_ALLOWED_ORIGIN');
if ($allowedOrigin) {
    header("Access-Control-Allow-Origin: $allowedOrigin");
} else {
    // Si no hay una variable de entorno configurada, permite el acceso desde cualquier origen (para desarrollo)
    header("Access-Control-Allow-Origin: *");
}
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Conexión a la base de datos
include("../conexionBD.php"); // Asegúrate de que esta ruta sea correcta

if (isset($_POST['CC'])) {
    $CC = $_POST['CC'];

    // Establecer conexión con la base de datos
    $conn = getDbConnection();

    if ($conn) {
        // Consulta basada en si 'CC' es numérico o no
        if (is_numeric($CC)) {
            $query = "SELECT * FROM conasegur_certificados WHERE cedula = :CC";
        } else {
            $query = "SELECT * FROM conasegur_certificados WHERE nro = :CC";
        }

        $stmt = $conn->prepare($query);
        $stmt->execute([':CC' => $CC]);
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Verificar si se encontraron registros
        if ($data) {
            // Devolver los datos en formato JSON
            echo json_encode(['status' => 'success', 'data' => $data]);
        } else {
            // Si no se encuentran registros
            echo json_encode(['status' => 'error', 'message' => 'No se encontraron registros para el valor proporcionado']);
        }
    } else {
        // Error de conexión a la base de datos
        echo json_encode(['status' => 'error', 'message' => 'No se pudo conectar a la base de datos']);
    }
} else {
    // Si no se proporciona el parámetro 'CC' en la solicitud
    echo json_encode(['status' => 'error', 'message' => 'No se proporcionó el parámetro CC']);
}
?>
