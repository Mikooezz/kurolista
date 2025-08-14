const levels = [
  { rank: 1, title: "The Holokaust", author: "Witro", points: 350.00 },
  { rank: 2, title: "ZylakiNaDupie", author: "[KASTI] BartoszGD", points: 331.71 },
  { rank: 3, title: "Chuj Kurwa", author: "[KASTI] realkolib2137", points: 313.42 },
  { rank: 4, title: "JaJoGniot", author: "[KASTI] BartoszGD", points: 291.70 },
  { rank: 5, title: "kfc madness", author: "[KASTI] FenoDash", points: 269.98 },
  { rank: 6, title: "CLICKS OF HELL", author: "[KASTI] realkolib2137", points: 248.26 },
  { rank: 7, title: "ZenonMartyniukLiked", author: "[SHYT] Ziven", points: 226.54 },
  { rank: 8, title: "Super fade me ship", author: "[SKIBI] Bob2025", points: 204.82 },
  { rank: 9, title: "wave challenge", author: "[KASTI] przecinek", points: 183.10 },
  { rank: 10, title: "RICOCHET", author: "[SKIBI] Bob2025", points: 161.38 },
  { rank: 11, title: "kura madness", author: "[KASTI] FenoDash", points: 139.66 },
  { rank: 12, title: "Abyss of Freakness", author: "[KASTI] BartoszGD", points: 117.94 },
  { rank: 13, title: "lowtaperhate", author: "[KASTI] FenoDash", points: 96.22 },
  { rank: 14, title: "OceanGate Survival", author: "[KASTI] realkolib2137", points: 74.5 },
  { rank: 15, title: "Lightmare", author: "[SKIBI] Bob2025", points: 52.78 },
  { rank: 16, title: "Super love me ufo", author: "[SKIBI] Bob2025", points: 31.06 },
  { rank: 17, title: "Kurowa Depresja", author: "[SKIBI] Bob2025", points: 9.34 },
];

const levelList = document.getElementById("levelList");

levels.forEach(level => {
  const linkName = encodeURIComponent(level.title);
  levelList.innerHTML += `
    <div class="list-item">
      <img src="https://via.placeholder.com/150x80?text=${encodeURIComponent(level.title)}" alt="${level.title}" />
      <div>
        <h3><a href="level.html?name=${linkName}">#${level.rank} – ${level.title}</a></h3>
        <p>Published by <strong>${level.author}</strong></p>
        <p>${level.points.toFixed(2)} (100%) points</p>
      </div>
    </div>
  `;
});
