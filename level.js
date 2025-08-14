const params = new URLSearchParams(window.location.search);
const levelName = params.get("name");

const levelData = {
  "The Holokaust": { video: "https://www.youtube.com/embed/aovFw1QSDJY?si=_4g1iE4wVah_Tkjp", scoreFull: "350.00", scorePartial: "35.00"},
  "ZylakiNaDupie": { video: "https://www.youtube.com/embed/XFplNcwhqGc?si=xDsV0ls_v2rG7MpF", scoreFull: "331.71", scorePartial: "33.17"},
  "Chuj Kurwa": { video: "https://www.youtube.com/embed/VIDEO_ID3", scoreFull: "313.42", scorePartial: "31.34" },
  "JaJoGniot": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "291.70", scorePartial: "29.17" },
  "kfc madness": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "269.98", scorePartial: "26.99" },
  "CLICKS OF HELL": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "248.26", scorePartial: "24.82" },
  "ZenonMartyniukLiked": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "226.54", scorePartial: "22.65" },
  "Super fade me ship": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "204.82", scorePartial: "20.48" },
  "wave challenge": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "183.1", scorePartial: "18.31" },
  "RICOCHET": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "161.38", scorePartial: "16.13" },
  "kura madness": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "139.66", scorePartial: "13.96" },
  "Abyss of Freakness": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "117.94", scorePartial: "11.79" },
  "lowtaperhate": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "96.22", scorePartial: "96.22" },
  "OceanGate Survival": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "74.5", scorePartial: "75.50" },
  "Lightmare": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "52.78", scorePartial: "52.78" },
  "Super love me ufo": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "31.06", scorePartial: "31.06" },
  "Kurowa Depresja": { video: "https://www.youtube.com/embed/VIDEO_ID4", scoreFull: "9.34", scorePartial: "09.34" }
};

const levelRecords = {
  "The Holokaust": [
    //{ flag: "pl", player: "[KASTI] Cwelozaur", progress: "100%", proof: "https://youtube.com/..." },
  ],
};

function renderRecords(name) {
  const records = levelRecords[name];
  const container = document.querySelector(".records-section");
  if (!container) return;

  if (!records || records.length === 0) {
    container.innerHTML = `
      <h2>Records</h2>
      <b>No victors</b>
    `;
    return;
  }

  container.innerHTML = `
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
            <td><a href="${r.proof}" target="_blank">YouTube 🔗</a></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const data = levelData[levelName];
  if (!data) {
    document.querySelector(".container").innerHTML = `<h2>Level not found</h2>`;
    return;
  }

  document.getElementById("level-name").textContent = levelName;
  document.getElementById("video-frame").src = data.video;
  document.getElementById("score-full").textContent = data.scoreFull;
  document.getElementById("score-partial").textContent = data.scorePartial;

  renderRecords(levelName);
});