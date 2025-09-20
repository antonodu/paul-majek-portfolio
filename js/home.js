fetch("content/index.json")
  .then((response) => response.json())
  .then((data) => {
    const slideshow = document.getElementById("slideshow");

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
          <video autoplay muted loop>
            <source src="${slide.src}" type="video/mp4">
            Your browser does not support the video tag.
          </video>`;
        slideshow.appendChild(div);
      }
    });
  });