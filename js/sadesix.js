fetch("/content/sadesix.json")
  .then(res => res.json())
  .then(data => {
    // Images row
    const imgRow = document.querySelector(".sadesix-image");
    imgRow.innerHTML = "";
    data.images.forEach(img => {
      let el = document.createElement("img");
      el.src = img.src;
      el.alt = img.alt;
      imgRow.appendChild(el);
    });

    // Logo
    document.querySelector(".sade-six img").src = data.logo.src;

    // Paragraphs
    const paraContainer = document.querySelector(".sadesix-paragraph");
    paraContainer.innerHTML = "";
    data.paragraphs.forEach(p => {
      let el = document.createElement("p");
      el.textContent = p;
      paraContainer.appendChild(el);
    });

    // Quote
    document.querySelector(".sadesix-text p").textContent = data.quote;

    // Socials
    const socials = document.querySelector(".sadesix-icons");
    socials.innerHTML = `
      <a href="${data.socials.instagram}" target="_blank"><i class="bx bxl-instagram"></i></a>
      <a href="${data.socials.cv}" target="_blank"><i class="bx bxs-file-pdf"></i></a>
      <a href="${data.socials.slideshow}" target="_blank"><i class="bx bx-slideshow"></i></a>
    `;

    // Footer
    document.querySelector(".site-developed").innerHTML = data.footer;
  })
  .catch(err => console.error("Error loading sadesix.json:", err));