const levels = [
  { rank: 1, title: "The Holokaust", author: "Witro", points: 350.00, thumbnail: "Miniaturki/The Holokaust.png" },
  { rank: 2, title: "ZylakiNaDupie", author: "[KASTI] BartoszGD", points: 331.71, thumbnail: "Miniaturki/ZylakiNaDupie.png" },
  { rank: 3, title: "Chuj Kurwa", author: "[KASTI] realkolib2137", points: 313.42, thumbnail: "Miniaturki/Chuj Kurwa.png" },
  { rank: 4, title: "JaJoGniot", author: "[KASTI] BartoszGD", points: 291.70, thumbnail: "Miniaturki/JaJoGniot.png" },
  { rank: 5, title: "kfc madness", author: "[KASTI] FenoDash", points: 269.98, thumbnail: "Miniaturki/kfc madness.png" },
  { rank: 6, title: "CLICKS OF HELL", author: "[KASTI] realkolib2137", points: 248.26, thumbnail: "Miniaturki/CLICKS OF HELL.png" },
  { rank: 7, title: "ZenonMartyniukLiked", author: "[SHYT] Ziven", points: 226.54, thumbnail: "Miniaturki/ZenonMartyniukLiked.png" },
  { rank: 8, title: "Super fade me ship", author: "[SKIBI] Bob2025", points: 204.82, thumbnail: "Miniaturki/Super fade me ship.png" },
  { rank: 9, title: "wave challenge", author: "[KASTI] przecinek", points: 183.10, thumbnail: "Miniaturki/wave challenge.png" },
  { rank: 10, title: "RICOCHET", author: "[SKIBI] Bob2025", points: 161.38, thumbnail: "Miniaturki/RICOCHET.png" },
  { rank: 11, title: "kura madness", author: "[KASTI] FenoDash", points: 139.66, thumbnail: "Miniaturki/kura madness.png" },
  { rank: 12, title: "Abyss of Freakness", author: "[KASTI] BartoszGD", points: 117.94, thumbnail: "Miniaturki/Abyss of Freakness.png" },
  { rank: 13, title: "lowtaperhate", author: "[KASTI] FenoDash", points: 96.22, thumbnail: "Miniaturki/lowtaperhate.png" },
  { rank: 14, title: "OceanGate Survival", author: "[KASTI] realkolib2137", points: 74.5, thumbnail: "Miniaturki/OceanGate Survival.png" },
  { rank: 15, title: "Lightmare", author: "[SKIBI] Bob2025", points: 52.78, thumbnail: "Miniaturki/Lightmare.png" },
  { rank: 16, title: "Super love me ufo", author: "[SKIBI] Bob2025", points: 31.06, thumbnail: "Miniaturki/Super love me ufo.png" },
  { rank: 17, title: "Kurowa Depresja", author: "[SKIBI] Bob2025", points: 9.34, thumbnail: "Miniaturki/Kurowa Depresja.png" },
];

const levelList = document.getElementById("levelList");

levels.forEach(level => {
  const linkName = encodeURIComponent(level.title);
  levelList.innerHTML += `
    <div class="list-item">
      <img src="${level.thumbnail}" alt="${level.title}" />
      <div>
        <h3><a href="level.html?name=${linkName}">#${level.rank} – ${level.title}</a></h3>
        <p>Published by <strong>${level.author}</strong></p>
        <p>${level.points.toFixed(2)} (100%) points</p>
      </div>
    </div>
  `;
});
