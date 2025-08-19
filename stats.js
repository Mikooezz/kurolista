const players = [
  { rank: 1, name: "[KASTI] realkolib2137", country: "pl", score: 474.8, records: ["CLICKS OF HELL - TOP 6","ZenonMartyniukLiked - TOP 7"] },
  { rank: 2, name: "Beli9002", country: "pl", score: 52.78, records: ["Lightmare - TOP 15"] }
];

const playerListEl = document.getElementById("playerList");
const playerDetailsEl = document.getElementById("playerDetails");
const searchInputEl = document.getElementById("searchInput");

function renderPlayers(filter = "") {
  playerListEl.innerHTML = "";
  players
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(player => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="https://flagcdn.com/24x18/${player.country}.png" alt="${player.country}" style="margin-right: 8px;">
        #${player.rank} ${player.name} <span style="margin-left:auto; color:#888">${player.score.toFixed(2)}</span>
      `;
      li.onclick = () => showPlayerDetails(player);
      playerListEl.appendChild(li);
    });
}

function showPlayerDetails(player) {
  playerDetailsEl.innerHTML = `
    <h2>#${player.rank} ${player.name}</h2>
    <p><strong>Score:</strong> ${player.score}</p>
    <h3>Records</h3>
    ${
      player.records.length > 0
        ? `<ul>${player.records.map(r => `<li>${r}</li>`).join("")}</ul>`
        : `<p>No records</p>`
    }
  `;
}

searchInputEl.addEventListener("input", e => renderPlayers(e.target.value));

renderPlayers();
