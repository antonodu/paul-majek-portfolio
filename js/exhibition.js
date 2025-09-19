fetch("/content/exhibitions.json")
  .then(res => res.json())
  .then(data => {
    const upcomingContainer = document.getElementById("upcoming-exhibitions");
    const pastContainer = document.getElementById("past-exhibitions");

    upcomingContainer.innerHTML = "";
    pastContainer.innerHTML = "";

    data.upcoming.forEach(ex => {
      let div = document.createElement("div");
      div.classList.add("art-item");
      div.innerHTML = `<img src="${ex.image}" alt="${ex.title}">`;
      upcomingContainer.appendChild(div);
    });

    data.past.forEach(ex => {
      let div = document.createElement("div");
      div.classList.add("art-item");
      div.innerHTML = `<img src="${ex.image}" alt="${ex.title}">`;
      pastContainer.appendChild(div);
    });
  })
  .catch(err => console.error("Error loading exhibitions.json:", err));