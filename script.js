
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

  function openPDF() {
    window.open('./assets/SADESIX CV.pdf', '_blank' );
  }

 
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Initial display
  showSlide(currentIndex);

  // Change slide every 6 seconds
  setInterval(nextSlide, 6000);

  function openFullPopup(imageSrc, title, year, description) {
    const popup = document.getElementById("fullscreen-popup");
    document.getElementById("popup-img").src = imageSrc;
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-year").innerText = year;
    document.getElementById("popup-description").innerText = description;
    popup.style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable scrolling in the background
  }
  
  function closeFullPopup() {
    const popup = document.getElementById("fullscreen-popup");
    popup.style.display = "none";
    document.body.style.overflow = ""; // Re-enable scrolling
  }

  const artworks = [
    {
      img: "./assets/work1.jpeg",
      title: "TAIWO, 2023",
      medium: "Oil, acrylic, and charcoal on wood"
    },
    {
      img: "./assets/work2.jpg",
      title: "BODE, 2024",
      medium: "Reductive Mono-print on paper"
    },
    {
      img: "./assets/work3.jpg",
      title: "LOVE MISLEAD, 2024",
      medium: "Reductive Mono-print on paper"
    },
    {
      img: "./assets/work4.jpg",
      title: "I Meet My Own Face, 2024",
      medium: "Reductive Mono-print on paper"
    },
    {
      img: "./assets/work5.jpg",
      title: "I'm Still Releasing, 2024",
      medium: "Reductive Mono-print on paper"
    },
    {
      img: "./assets/work6.jpeg",
      title: "The Pattern, 2023",
      medium: "Oil, acrylic, and charcoal on wood"
    },
    {
      img: "./assets/work7.jpg",
      title: "How Do You Love?, 2024",
      medium: "Soft pastel and charcoal on paper"
    },
    {
      img: "./assets/work8.jpeg",
      title: "Simi Ori E, 2022",
      medium: "Oil, acrylic, and charcoal on wood"
    },
    {
      img: "./assets/work9.jpg",
      title: "Love Mislead, 2024",
      medium: "Charcoal on paper"
    },
    {
      img: "./assets/work10.jpeg",
      title: "The Dead Skin We Masquerade in, 2024",
      medium: "Reductive Mono-print on paper"
    },
    {
      img: "./assets/work11.jpg",
      title: "It Ends With Me, 2024",
      medium: "Soft Pastel, acrylic on paper"
    },
    {
      img: "./assets/work12.jpeg",
      title: "Dolapo in The Corridor, 2022",
      medium: "Oil, acrylic, and charcoal on wood"
    },
    {
      img: "./assets/work13.jpeg",
      title: "Leather Dress, 2022",
      medium: "Oil, acrylic, and charcoal on wood"
    },
    {
      img: "./assets/work14.jpg",
      title: "They're Always Watching, 2024",
      medium: "Reductive Mono-print on paper"
    },
    {
      img: "./assets/work15.jpg",
      title: "Ibeji Altar, 2023",
      medium: "Plastic, fabric, wood"
    },
    {
      img: "./assets/work16.jpeg",
      title: "Ibeji Altar, 2023",
      medium: "Oil on canvas"
    },
    {
      img: "./assets/work17.jpg",
      title: "The Man on the Landing, 2024",
      medium: "Reductive Mono-print on paper"
    },
    {
      img: "./assets/work18-1.jpg",
      title: "Olakorede, 2024",
      medium: "Reductive Mono-print on paper"
    },
    {
      img: "./assets/work19.jpeg",
      title: "Just Enough, 2022",
      medium: "Oil, acrylic, and charcoal on wood"
    },
    {
      img: "./assets/work20.jpeg",
      title: "Slow Fire",
      medium: "Tetrapak drypoint on paper"
    }
  ];

  function openModal(index) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalMedium = document.getElementById("modal-medium");

    const art = artworks[index];
    modalImg.src = art.img;
    modalTitle.textContent = art.title;
    modalMedium.textContent = art.medium;

    modal.style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  document.querySelectorAll(".gallery-item").forEach((item, index) => {
    item.addEventListener("click", () => openModal(index));
  })

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  })

  const tabs = document.querySelectorAll('.exhibition-tab');
  const upcoming = document.getElementById('upcoming-exhibitions');
  const past = document.getElementById('past-exhibitions');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (tab.dataset.target === 'upcoming') {
        upcoming.style.display = 'grid';
        past.style.display = 'none';
      } else {
        upcoming.style.display = 'none';
        past.style.display = 'grid';
      }
    });
  });

  // --- Exhibition data ---
  const exhibitionData = {
    1: {
      title: "RSA Degree Show 2023",
      description: "A showcase of outstanding work by final-year students, featuring painting, photography, video, sculpture, installation, and performance. This exhibition marks the culmination of their creative journey and offers an opportunity to meet the artists and explore their thought-provoking work.",
      artists: "Kes Berry, Sophie Bostock, Heather Carter, Sarah Catterall, Cornelia Chen, David Collins, Paige Diedrick-Edwards, Anna Du Toit, Anselm Dyer-Grimes, Meg Erridge, Gala Hills, Yuri Hwang, Antonia Jameson, Dominika Kolenda, Harry Liang, Will Lowry, Paul Majek-Oduyoye, Hugo Max, Sophia Missaghian-Schirazi, Julia Moon, Loveday Pride, Rachel Prince, Harman Randhawa, Elliot Roberts, Georgie Salmond, Skye Seipp, Zoe Shum, Long-Hin Shum, Emer Sukonik, Angus Wood",
      work: "Dolapo’s Altar (2023)<br>Installation (variation)<br>Dimensions variable",
      dates: "17th – 21st June 2023",
      location: "Ruskin School of Art, Old Music Hall, 108 Cowley Road, Oxford, OX4 1JE",
      images: ["./assets/exhibition-img1.JPG"]
    },
    2: {
      title: "Within Our Midst",
      description: "Drawing inspiration from Nigerian traditional and contemporary themes, this exhibition explores the potential of art as a powerful form of revelation in connecting generational dialogues and spirituality, whilst questioning how often we reflect on socio-cultural standards, beliefs and normalities.",
      artists: "Michael Igwe, Paul Majek",
      work: "The Eye Of The Storm (2022) <br> Oil, acrylic, charcoal on wood <br> 82 x 227cm",
      dates: "11 May – 8 June 2024",
      location: "O'DA Art Gallery, 10 Sir Samuel Manuwa Street, Victoria Island, Lagos, Nigeria",
      images: ["./assets/exhibition-img2.jpeg"]
    },
    3: {
      title: "Appendix | Index",
      description: "A group exhibition curated by Aram Masharqa featuring the work of ten artists living and working in London. The title borrows from the backmatter of books, and considers what kind of knowledge or sense is possible without the main body. The show is divided into two parts, and each work on display belongs to one or the other part. Appendix leans into its ‘other’ meaning: the anatomical appendage. Instead of revealing knowledges which are latent within the body, Appendix imagines what kinds of knowledge could ever be possible inside those parts which are ‘extra’, ‘unnecessary’. The artists approach the appendix to varying degrees of literalism: overflowing bodies, found objects, a proliferation of office stationery, an excess of discarded materials, and so on.",
      artists: "Karina Akopyan, Molly Burrows, Matilde Converio, Millie Earthy, Simone Ellis, Maya King-Dabbs, Paul Majek, Tawfik Naas, Kelly W",
      work: "Just Enough (2022) <br> Oil, acrylic and charcoal on wood <br> 122 x 62 cm",
      dates: "6 June – 12 July 2024",
      location: "Hypha Gallery 2, Sugar House Island, 107 High Street, E15 2TP Photography by Tami Faith Olusanya",
      images: ["./assets/exhibition-img3.jpeg"]
    },
    4: {
      title: "Best of the Drawing Year 2024",
      description: "From 13 to 17 November, Christie’s will host a selling exhibition of contemporary drawings and works on paper by artists from the Royal Drawing School’s postgraduate-level programme The Drawing Year. The students come from a variety of backgrounds and creative disciplines, including painting, printmaking, animation, illustration, product design, architecture, textiles, sciences, and languages. The exhibition offers a range of works rich in observation, imagination, and storytelling. An additional 500 drawings will be shown from 4 December at the Royal Drawing School’s gallery in Shoreditch at 19–22 Charlotte Road, EC2A 3SG. Founded by HM King Charles III and artist Catherine Goodman in 2000, The Royal Drawing School is the independent, artist-led and not-for-profit home of observational drawing.",
      artists: "Zoe Andrews, Bek Ashton, Ikesha Avo, Arthur Boothby, Akilah Chambers, Natalie Charles, Tom Cubitt, Samuel Donagh, Maj Lisa Dörig, Myrtle Glanville, Clover Godsal, Heera Gul, Isaac Heard, Phoebe Howard, Angus Macdonald, Paul Majek, Nancy Martin, Esme McMillan-Scott, George Meadows, Keziah Mornin, Carlos Pancorbo, Will Powers, Anna Redwood, Jack Shearing, Tobias Tatham, Rosie Tuff, Daniel C Turner, Roman Vaughan-Williams, Vito Walker, Rebecca Willing, Madeleine Wood",
      work: "It Ends With Me (2024) <br> Soft pastel, acrylic on paper <br> 150 x 120 cm",
      dates: "13 – 17 November 2024",
      location: "Christie’s, London",
      images: ["./assets/exhibition-img4.jpeg"]
    },
    5: {
      title: "The Ingram Prize 2024",
      description: "The 2024 Ingram Prize shortlist highlights a dynamic group of artists whose work reflects both the local and global influences shaping contemporary art today. These artists engage with a wide range of ideas, cultures, and perspectives, offering fresh insights that resonate far beyond the UK. We are proud to support them at such a pivotal moment in their careers.",
      artists: "Henri Affandi, Hester Finch, Paul Majek, Jemima Sara, Leonie Cameron, Jasper Garvida, Naira Mushtaq, Tami Soji-Akinyemi, Yuyang Chen, Camilla Hanney, Adiba Ndiwe, Saint Takyi, Noemi Conan, Makiko Harris, Megumi Ohata, Tara White, Georgia Dymock, Rose Electra Harris, Frances Pinnock, Tonye Ekine, Denny Kaulbach, Chinmayee Pradhan, Katie Eraser, Niall MacCrann, Stephen Price",
      work: "The Pattern (2023) <br> Oil, acrylic, and charcoal on wood <br> 155 x 122 cm",
      dates: "14th – 17 November 2024",
      location: "Ruskin School of Art, Old Music Hall, 108 Cowley Road, Oxford, OX4 1JE",
      images: ["./assets/exhibition-img5.jpeg"]
    },
    6: {
      title: "Drawn Together",
      description: "A group exhibition of 40 artists whose work is rooted in drawing – not just as a medium, but as a way of thinking, seeing, and making. All alumni of The Drawing Year, the Royal Drawing School’s postgraduate programme, the artists have been selected to showcase the breadth and vitality of drawing as it exists today: a medium that continues to evolve, provoke, and sustain long-term artistic practices. As well as celebrating drawing’s enduring power, the exhibition reconnects artists from across different years of the programme, offering a glimpse into the lasting impact of the School’s teaching and community.",
      artists: "Jesse Ajilore, Jade Anthony, Raphael Barratt, Sophie Birch, Natalie Charles, Sam Chatto, Mark Connolly, Samuel Donagh, Ned Elliott, Bobbye Fermie, Edie Flowers, Raha Farazmand, Joana Galego, Jake Garfield, Myrtle Glanville, Christopher Green, Rebecca Harper, Mary Herbert, Jack McGarrity, Olivia Kemp, Melissa Kime, Sara Lee-Roberts, Sammi Lynch, Ranny Macdonald, Paul Majek-Oduyoye, Holly Mills, Keziah Mornin, Hannah Murgatroyd, Tim Patrick, Louis Pohl Koseda, Louise Reynolds, Sophie Ruigrok, Fraser Scarfe, Gregory Stevens, Tobias Tatham, Rosie Tuff, Liam Walker, Eleanor May Watson, Ella Wright, Kathryn Maple.",
      work: "Love Mislead (2024) <br> Oil, acrylic, soft pastel on wood <br> 87 x 72cm",
      dates: " 2 – 18 June 2025",
      location: "Royal Drawing School, Shoreditch",
      images: ["./assets/exhibition-img6.JPEG"]
    },
    7: {
      title: "Haven",
      description: "HAVEN is the inaugural exhibition of Steingold Contemporary that brings together 14 prominent contemporary artists working in the UK today. The unique setting is Aylmer Hall - a beautifully refurbished mission hall that is the new home of Nest Design who will open their workspace to the public during the exhibition. ‘Haven’ is a word that has great power - one that we all respond to, but in different ways; a place of safety or refuge, whether physical or psychological, amongst a community or in solitude. The exhibiting artists express what ‘haven’ means to them and how it resonates through their art practice. Though their experiences and interpretations might be diverse, there is an inextricable link woven through them - and through all of us. At some point in our lives, we have all needed a haven.",
      artists: "Elizabeth Abel, Yemi Awosile, Ditte Blohm, Nicole Douglas-Morris, Tonye Ekine, Olly Fathers, Chris Hagan, Ross Head, Beatrice Hassel-McCosh, Barbora Klaska, Studio Lenca, Paul Majek, Mada Vicassiau, Maddie Yuille",
      work: "Love Mislead (2024) <br>Oil, acrylic, soft pastel on wood <br> 87 x 72cm",
      dates: "30th – 14th September 2022",
      location: "Aylmer Hall, 12 Aylmer Road, E11 3AD",
      images: ["./assets/exhibition-img7.jpeg"]
    },
    8: {
      title: "Intimacies, After Vallotton",
      description: "A Duo exhibition Featuring Paul Majek and Sam Spencer. Presented by The Old Fire Station. In 1898, Swiss artist Félix Vallotton exposed the private lives of the aristocracy in a series of ten woodcuttings: Intimités. Now, artist/writer duo Paul Majek and Sam Spencer present Intimacies, After Vallotton. Hazy blue portraits are brought to life with accompanying dialogues, each piece offers a glimpse into the subject’s lives and grapples with what it means to be close to another person. Reimagining the erotic, often melancholic relationships depicted across Vallotton’s ten woodcuts, Paul Majek’s paintings - drawing upon photographs from his own family archive - encourage us to expand our definition of intimacy, exploring parental and familial connections as well as romantic ones. Moving beyond the heteronormative love portrayed in Vallotton’s series, Sam Spencer’s duologues offer examples of queer and platonic intimacy.",
      artists: "Pete Miller, Osian Williams (Curators) Georgina Dettmer (Director)",
      work: "Through the leaves (2022) <br> Charcoal, oil and acrylic on wood⁠ <br> 87 x 72cm⁠ ",
      dates: "17th – 21st June 2023",
      location: "Ruskin School of Art, Old Music Hall, 108 Cowley Road, Oxford, OX4 1JE",
      images: ["./assets/exhibition-img8.jpeg"]
    },
    9: {
      title: "In Heavenly Blue",
      description: "Wunika Mukan Gallery presents In Heavenly Blue, the homecoming exhibition of Paul Majek and Sola Olulode. The exhibition centers on their exploration of the color blue as a conduit of love and memory. In their work, as in Nigerian tradition, blue affirms its power to summon emotion and evoke intimacy. Majek’s paintings ebb dreamily between dimensions, while Olulode’s indigos stir a sense of familiarity, lingering in tender, romantic moments. Both UK-based artists draw on their ancestry, and in returning “home” to Nigeria, they reconnect knowledge frayed by time and migration. Paul Majek takes blue-hued lucid dreaming as a point of departure to probe the materiality of liminal spaces. His oil, acrylic, and charcoal works on wood or canvas recreate the terrain of the subliminal, transforming woodgrain into liquid form and imprinting Nigerian symbols that render his figures transparent and ethereal. Referencing archival family photographs of people and spaces only partly known, Majek approaches the archive as its own autonomous language, linking memory, love, generational dialogue, and spirituality.",
      artists: "Paul Majek, Sola Olulode",
      work: "I lost my heart’s….ease (2021) <br> Oil, Acrylic, Charcoal on Wood <br> 107 x 82 cm ",
      dates: "31 July – 15 August 2021",
      location: "Wunika Mukan Gallery, Lagos, Nigeria",
      images: ["./assets/exhibition-img9.jpeg"]
    },
    10: {
      title: "Queeriosities",
      description: "Queeriosities returns to London for its 2025 edition, showcasing the work of more than 60 LGBTQIA+ artists, makers, and small businesses at Copeland Gallery in Peckham. Alongside a vibrant marketplace of vendors, this year’s edition also features a weekend of cultural programming and the special group exhibition We Come to This Place for Magic, exploring queer world-building and showcasing the work of Devynn Barnes, Lawrence Cuevas, Theo Dunne, Paul Majek, Krzysztof Strzelecki, and Marf Summers.",
      artists: "Devynn Barnes, Lawrence Cuevas, Theo Dunne, Paul Majek, Krzysztof Strzelecki, and Marf Summers.",
      work: "TBD",
      dates: "26–28 September 2025",
      location: "Copeland Gallery, Peckham, London",
      images: ["./assets/exhibition-img10.png"]
    },
    11: {
      title: "O’DA at 1-54 Contemporary African Art Fair",
      description: "O’DA, a contemporary art gallery based in Lagos, Nigeria, will be presenting at the 1-54 Contemporary African Art Fair, showcasing contemporary African art and design from mid-career and established artists. The gallery champions multidisciplinary practices exploring identity, technology, political commentary, social consciousness, and environmental change, while supporting designers whose work pushes the boundaries between art and design. Featured artists include Afeez Onakoya, Simon Ojeaga, and Paul Majek.",
      artists: "Afeez Onakoya, Simon Ojeaga, and Paul Majek.",
      work: "TBD",
      dates: "16–19 October 2025",
      location: "Somerset House, Strand, London WC2R 1LA, United Kingdom",
      images: ["./assets/exhibition-img11.jpeg"]
    }

  };

  // ===== Globals =====
let currentExhibitionId = null;   // which exhibition is open
let currentIdList = [];           // ordered list of IDs in current gallery
let swiperInstance;               // swiper for images inside modal

// ===== Main loader for exhibition modal =====
function openExhibitionModal(id) {
  const data = exhibitionData[id];
  if (!data) {
    console.error(`No data found for artwork ID: ${id}`);
    return;
  }

  // Fill modal content
  document.getElementById('modal-title').innerHTML = data.title || '';
  document.getElementById('modal-description').innerHTML = data.description || '';
  document.getElementById('modal-artists').innerHTML = data.artists || '';
  document.getElementById('modal-work').innerHTML = data.work || '';
  document.getElementById('modal-dates').innerHTML = data.dates || '';
  document.getElementById('modal-location').innerHTML = data.location || '';

  // Build slides
  const slidesHTML = (data.images || [])
    .map(src => `<div class="swiper-slide"><img src="${src}" alt="${data.title || ''}"></div>`)
    .join('');
  document.getElementById('modal-images').innerHTML = slidesHTML;

  // Show modal
  modal.classList.remove('hidden');

  // Recreate Swiper for images inside exhibition
  if (swiperInstance) swiperInstance.destroy(true, true);
  setTimeout(() => {
    swiperInstance = new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: (data.images && data.images.length > 1)
    });
  }, 0);
}

// ===== Click handler for thumbnails =====
document.querySelectorAll('.art-item').forEach(item => {
  item.addEventListener('click', () => {
    // 1) Track which exhibition was clicked
    currentExhibitionId = parseInt(item.dataset.id, 10);

    // 2) Build the list of IDs from SAME gallery
    const gallery = item.closest('.exhibition-gallery'); // tab container
    currentIdList = Array.from(gallery.querySelectorAll('.art-item'))
                          .map(el => parseInt(el.dataset.id, 10));

    // 3) Open the modal
    openExhibitionModal(currentExhibitionId);
  });
});

// ===== Helpers to get next/prev exhibition IDs =====
function getPrevId() {
  const idx = currentIdList.indexOf(currentExhibitionId);
  return currentIdList[(idx - 1 + currentIdList.length) % currentIdList.length];
}
function getNextId() {
  const idx = currentIdList.indexOf(currentExhibitionId);
  return currentIdList[(idx + 1) % currentIdList.length];
}

// ===== Modal arrow buttons (change exhibitions) =====
const prevBtn = document.querySelector('.modal-prev');
const nextBtn = document.querySelector('.modal-next');

prevBtn.addEventListener('click', () => {
  if (!currentIdList.length) return;
  currentExhibitionId = getPrevId();
  openExhibitionModal(currentExhibitionId);
});

nextBtn.addEventListener('click', () => {
  if (!currentIdList.length) return;
  currentExhibitionId = getNextId();
  openExhibitionModal(currentExhibitionId);
});

// ===== Close modal =====
const modal = document.getElementById('exhibitionModal');
const closeBtn = document.querySelector('.modal-close');

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => {
  if (e.target.id === 'exhibitionModal') {
    modal.classList.add('hidden');
  }
});