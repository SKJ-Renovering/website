"use strict"

// Henter alle requests der ikke er besvaret endnu
async function fetchRequests() {
    const response = await fetch("/employee/requests");
    if (!response.ok) {
        throw new Error("HTTP " + response.status);
    }
    return response.json();
}

// Formaterer "2026-11-26T10:00:00" til dansk dato/tid
function formatDate(dateString) {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString("da-DK", {
        dateStyle: "short",
        timeStyle: "short"
    });
}

// Bygger hele dashboard-viewet inde i det element routeren giver os
export async function renderDashboard(app) {
    app.innerHTML = `
        <h1>Efterspørgsler</h1>
        <p id="status">Indlæser...</p>
        <table class="request-table" hidden>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Navn</th>
                    <th>Email</th>
                    <th>Telefon</th>
                    <th>Modtaget</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="request-table-body"></tbody>
        </table>
    `;

    const status = app.querySelector("#status");
    const table = app.querySelector(".request-table");
    const tableBody = app.querySelector("#request-table-body");

    try {
        const requests = await fetchRequests();

        if (requests.length === 0) {
            status.textContent = "Ingen aktive efterspørgsler lige nu.";
            return;
        }

        for (const request of requests) {
            const row = document.createElement("tr");

            const values = [
                request.requestId,
                request.customerFirstName + " " + request.customerLastName,
                request.customerEmail,
                request.customerPhoneNumber,
                formatDate(request.dateTimeReceived)
            ];

            for (const value of values) {
                const cell = document.createElement("td");
                cell.textContent = value ?? "N/A";
                row.appendChild(cell);
            }
            row.appendChild(document.createElement("td")); // tom kolonne til knapper senere

            tableBody.appendChild(row);
        }

        status.hidden = true;
        table.hidden = false;

    } catch (error) {
        status.textContent = "Kan ikke finde efterspørgsler. Prøv venligst igen.";
        console.error(error);
    }
}
