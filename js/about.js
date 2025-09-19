fetch("/content/about.json")
  .then(res => res.json())
  .then(data => {
    document.querySelector(".about-img img").src = data.image;

    const bioText = document.querySelector(".bio-text");
    bioText.innerHTML = ""; // clear old text
    data.paragraphs.forEach(p => {
      let para = document.createElement("p");
      para.textContent = p;
      bioText.appendChild(para);
    });

    // Add socials
    const socialIcons = document.createElement("div");
    socialIcons.classList.add("social-icons");

    if (data.socials.instagram) {
      socialIcons.innerHTML += `<a href="${data.socials.instagram}" target="_blank"><i class="bx bxl-instagram"></i></a>`;
    }
    if (data.socials.cv) {
      socialIcons.innerHTML += `<a href="${data.socials.cv}" target="_blank"><i class="bx bxs-file-pdf"></i></a>`;
    }
    if (data.socials.email) {
      socialIcons.innerHTML += `<a href="${data.socials.email}"><i class="bx bxs-envelope"></i></a>`;
    }

    bioText.appendChild(socialIcons);
  })
  .catch(err => console.error("Error loading about.json:", err));