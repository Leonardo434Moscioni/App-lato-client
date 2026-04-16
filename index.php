<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Gestione Persone</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Gestione Persone</h1>

<form id="formPersona">
    <input type="hidden" id="id">
    <input type="text" id="nome" placeholder="Nome" required>
    <input type="text" id="cognome" placeholder="Cognome" required>
    <input type="email" id="email" placeholder="Email" required>
    <button type="submit">Salva</button>
</form>

<h2>Lista Persone</h2>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Email</th>
            <th>Azioni</th>
        </tr>
    </thead>
    <tbody id="tabella"></tbody>
</table>

<script src="script.js"></script>

</body>
</html>