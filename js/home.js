document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.getElementById("slideshow");

  // Load JSON content
  fetch("content/index.json")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load index.json");
      return res.json();
    })
    .then((data) => {
      if (!data.slides || !Array.isArray(data.slides)) return;

      data.slides.forEach((slide) => {
        if (slide.type === "image") {
          const div = document.createElement("div");
          div.classList.add("slide");
          div.style.backgroundImage = `url('${slide.src}')`;
          slideshow.appendChild(div);
        } else if (slide.type === "video") {
          const div = document.createElement("div");
          div.classList.add("slide");
          div.innerHTML = `
            <video autoplay muted loop playsinline>
              <source src="${slide.src}" type="video/mp4">
              Your browser does not support the video tag.
            </video>`;
          slideshow.appendChild(div);
        }
      });
    })
    .catch((err) => console.error("Error loading slideshow:", err));
});
