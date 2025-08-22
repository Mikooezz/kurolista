const levelList = document.getElementById("levelList");

fetch("data/levels.json")
  .then(res => res.json())
  .then(levels => {
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
  })
  .catch(err => console.error("Error loading levels.json", err));
