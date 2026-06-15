<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../conexao.php';

if (isset($_GET['id'])) {
    $stmt = $pdo->prepare("SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos WHERE id = ? AND status = 'publicado'");
    $stmt->execute([$_GET['id']]);
    $projeto = $stmt->fetch();

    if (!$projeto) {
        http_response_code(404);
        echo json_encode(['erro' => 'Projeto não encontrado.']);
        exit;
    }

    echo json_encode($projeto);
    exit;
}

$sql      = "SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos WHERE status = 'publicado'";
$projetos = $pdo->query($sql)->fetchAll();
echo json_encode($projetos);