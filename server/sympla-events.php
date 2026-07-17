<?php
// Proxy server-side para a API pública da Sympla.
// Mantém o token da Sympla no servidor: o site estático só chama este endpoint.
// Deploy: subir este arquivo + config.php (com o token real) para o Dreamhost,
// ao lado dos arquivos estáticos gerados em /out.

header('Content-Type: application/json; charset=utf-8');
// Resposta é sempre dados públicos de eventos, então CORS aberto é seguro
// (necessário em dev, quando o Next roda em localhost:3000 e este proxy noutra porta/host).
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/config.php';

$cacheFile = __DIR__ . '/.sympla-events-cache.json';
$cacheTtl = 300; // 5 minutos

if (file_exists($cacheFile) && (time() - filemtime($cacheFile)) < $cacheTtl) {
    echo file_get_contents($cacheFile);
    exit;
}

$context = stream_context_create([
    'http' => [
        'method' => 'GET',
        'header' => 's_token: ' . SYMPLA_TOKEN . "\r\n",
        'timeout' => 10,
        'ignore_errors' => true,
    ],
]);

$response = @file_get_contents('https://api.sympla.com.br/public/v3/events', false, $context);
$status = 0;
if (isset($http_response_header)) {
    foreach ($http_response_header as $header) {
        if (preg_match('#^HTTP/\S+ (\d+)#', $header, $matches)) {
            $status = (int) $matches[1];
        }
    }
}

if ($response === false || $status !== 200) {
    http_response_code(502);
    echo json_encode([]);
    exit;
}

$data = json_decode($response, true);
$events = $data['data'] ?? [];

$result = array_map(function ($event) {
    return [
        'id' => $event['id'] ?? null,
        'name' => $event['name'] ?? '',
        'start_date' => $event['start_date'] ?? null,
        'end_date' => $event['end_date'] ?? null,
        'url' => $event['url'] ?? null,
        'image' => $event['image'] ?? null,
    ];
}, $events);

$json = json_encode($result);
file_put_contents($cacheFile, $json);
echo $json;
