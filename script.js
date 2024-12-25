document.querySelectorAll('.gallery-container a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Create the lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        document.body.appendChild(lightbox);

        // Create the image
        const img = document.createElement('img');
        img.src = this.href;
        lightbox.appendChild(img);

        // Close on click
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

function showTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => (content.style.display = 'none'));
  
    // Remove "active" class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    // Show the selected tab content and set the clicked tab as active
    document.getElementById(tabId).style.display = 'block';
    event.target.classList.add('active');
  }
  

  const hamburger = document.getElementById('hamburger');
  const fullMenu = document.getElementById('fullMenu');
  const closeMenu = document.getElementById('closeMenu');

  // Open Full screen menu
  hamburger.addEventListener('click', () =>  {
    fullMenu.style.display = 'flex';
  });

  closeMenu.addEventListener('click', () =>  {
    fullMenu.style.display = 'none';
  });

  function openPDF() {
    window.open('./assets/paul-majek-cv.pdf', '_blank');
  }

const filterButtons = document.querySelectorAll('.tab');
const artworks = document.querySelectorAll('.artwork');


filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedYear = button.getAttribute('data-category');

    artworks.forEach(artwork => {
      const artworkYear = artwork.getAttribute('data-year');
      if (artworkYear === selectedYear) {
        artwork.style.display = 'block';
      } else {
        artwork.style.display = 'none';
      }
    });
  });
});

