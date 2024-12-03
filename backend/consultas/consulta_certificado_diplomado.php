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
    $CC = filter_var($_POST['CC'], FILTER_SANITIZE_STRING);

    // Establecer conexión con la base de datos
    $conn = getDbConnection();

    try {
        if (is_numeric($CC)) {
            $query = "SELECT * FROM conasegur_certificados WHERE cedula = :CC";
        } else {
            $query = "SELECT * FROM conasegur_certificados WHERE nro = :CC";
        }

        $stmt = $conn->prepare($query);
        $stmt->execute([':CC' => $CC]);
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            'status' => $data ? 'success' : 'error',
            'data' => $data ?? null,
            'message' => $data ? null : 'No se encontraron registros para el valor proporcionado'
        ]);
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Error al realizar la consulta']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'No se proporcionó el parámetro CC']);
}

?>
