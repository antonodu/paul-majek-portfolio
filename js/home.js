("/content/index.json")
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector(".slideshow-container");
    container.innerHTML = ""; // clear default

    data.slides.forEach(slide => {
      let el = document.createElement("div");
      el.classList.add("slide");

      if (slide.type === "image") {
        el.style.backgroundImage = `url('${slide.src}')`;
      } else if (slide.type === "video") {
        el.innerHTML = `<video autoplay muted loop><source src="${slide.src}" type="video/mp4"></video>`;
      }

      container.appendChild(el);
    });
  })
  .catch(err => console.error("Error loading home.json:", err));