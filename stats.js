const playerListEl = document.getElementById("playerList");
const playerDetailsEl = document.getElementById("playerDetails");
const searchInputEl = document.getElementById("searchInput");

let players = [];
let levels = [];

async function loadPlayers() {
  try {
    [players, levels] = await Promise.all([
      fetch("data/players.json").then(r => r.json()),
      fetch("data/levels.json").then(r => r.json())
    ]);
    renderPlayers();
  } catch (e) {
    console.error("Error loading data", e);
  }
}

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
  // Szukamy danych poziomów danego gracza
  const playerLevels = player.records
    .map(name => levels.find(l => l.title === name))
    .filter(Boolean);

  // Najtrudniejszy = najmniejszy rank
  const hardest = playerLevels.reduce((min, lvl) => 
    lvl.rank < min.rank ? lvl : min, 
    playerLevels[0] || { title: "Brak", rank: 9999 }
  );

  playerDetailsEl.innerHTML = `
    <h2>#${player.rank} ${player.name}</h2>
    <p><strong>Score:</strong> ${player.score}</p>
    <p><strong>Najtrudniejszy poziom:</strong> ${hardest.title} (#${hardest.rank})</p>
    <h3>Records</h3>
    ${
      playerLevels.length > 0
        ? `<ul>${playerLevels.map(l => `
            <li>
              <a href="level.html?name=${encodeURIComponent(l.title)}">
                #${l.rank} ${l.title}
              </a>
            </li>`).join("")}</ul>`
        : `<p>No records</p>`
    }
  `;
}

searchInputEl.addEventListener("input", e => renderPlayers(e.target.value));
document.addEventListener("DOMContentLoaded", loadPlayers);
