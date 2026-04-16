const API_URL = "http://localhost/api_persona/index.php";

const form = document.getElementById("formPersona");
const tabella = document.getElementById("tabella");


function caricaPersone() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            tabella.innerHTML = "";

            data.forEach(p => {
                tabella.innerHTML += `
                    <tr>
                        <td>${p.id}</td>
                        <td>${p.nome}</td>
                        <td>${p.cognome}</td>
                        <td>${p.email}</td>
                        <td>
                            <button onclick="modifica(${p.id}, '${p.nome}', '${p.cognome}', '${p.email}')">Modifica</button>
                            <button onclick="elimina(${p.id})">Elimina</button>
                        </td>
                    </tr>
                `;
            });
        });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const email = document.getElementById("email").value;

    const metodo = id ? "PUT" : "POST";

    fetch(API_URL, {
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, nome, cognome, email })
    })
    .then(res => res.json())
    .then(() => {
        form.reset();
        document.getElementById("id").value = "";
        caricaPersone();
    });
});

function elimina(id) {
    fetch(API_URL, {
        method: "DELETE",
        body: "id=" + id
    })
    .then(res => res.json())
    .then(() => caricaPersone());
}

function modifica(id, nome, cognome, email) {
    document.getElementById("id").value = id;
    document.getElementById("nome").value = nome;
    document.getElementById("cognome").value = cognome;
    document.getElementById("email").value = email;
}

caricaPersone();