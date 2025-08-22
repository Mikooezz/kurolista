const params = new URLSearchParams(window.location.search);
const levelName = params.get("name");

const nameEl = document.getElementById("level-name");
const videoEl = document.getElementById("video-frame");
const fullEl = document.getElementById("score-full");
const partialEl = document.getElementById("score-partial");
const recordsContainer = document.querySelector(".records-section");

async function loadLevel() {
  try {
    const levels = await fetch("data/levels.json").then(r => r.json());
    const records = await fetch("data/records.json").then(r => r.json());

    const level = levels.find(l => l.title === levelName);

    if (!level) {
      document.querySelector(".container").innerHTML = `<h2>Level not found</h2>`;
      return;
    }

    nameEl.textContent = level.title;
    videoEl.src = level.video;
    fullEl.textContent = level.scoreFull;
    partialEl.textContent = level.scorePartial;

    renderRecords(level.title, records);
  } catch (e) {
    console.error("Error loading level data", e);
  }
}

function renderRecords(name, recordsData) {
  const records = recordsData[name];
  if (!records || records.length === 0) {
    recordsContainer.innerHTML = `
      <h2>Records</h2>
      <b>No victors</b>
    `;
    return;
  }

  recordsContainer.innerHTML = `
    <h2>Records</h2>
    <p>75% or better required to qualify</p>
    <p>${records.length} records registered</p>
    <table class="records-table">
      <thead>
        <tr><th>Flag</th><th>Record Holder</th><th>Progress</th><th>Video Proof</th></tr>
      </thead>
      <tbody>
        ${records.map(r => `
          <tr>
            <td><img src="https://flagcdn.com/${r.flag}.svg" class="flag" alt="${r.flag}"></td>
            <td>${r.player}</td>
            <td>${r.progress}</td>
            <td>${r.proof ? `<a href="${r.proof}" target="_blank">YouTube 🔗</a>` : "—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

document.addEventListener("DOMContentLoaded", loadLevel);
