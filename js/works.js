let artworks = [];
let currentIndex = 0;

async function loadWorks() {
  try {
    const response = await fetch("/content/works.json");
    artworks = (await response.json()).works;

    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    artworks.forEach((art, index) => {
      const item = document.createElement("div");
      item.className = "gallery-item";

      item.innerHTML = `
        <div class="artwork" onclick="openModal(${index})">
          <img src="${art.image}" alt="${art.title}">
        </div>
        <p class="gallery-title">${art.title}, ${art.year}</p>
      `;

      gallery.appendChild(item);
    });
  } catch (error) {
    console.error("Error loading works:", error);
  }
}

function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");
  const title = document.getElementById("modal-title");
  const medium = document.getElementById("modal-medium");

  const art = artworks[index];
  img.src = art.image;
  img.alt = art.title;
  title.textContent = `${art.title}, ${art.year}`;
  medium.textContent = art.medium || "";

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onload = loadWorks;