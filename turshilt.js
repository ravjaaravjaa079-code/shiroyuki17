const mangas = [
    {
        id: 1,
        title: "Naruto",
        img: "naruto.jpg",
        desc: "A ninja story about Naruto Uzumaki",
        chapters: ["chap1"]
    },
    {
        id: 2,
        title: "One Piece",
        img: "onepiece.jpg",
        desc: "Pirate adventure to find the One Piece",
        chapters: ["chap1"]
    },
    {
        id: 3,
        title: "Bleach",
        img: "bleach.jpg",
        desc: "Soul reapers and hollow battles",
        chapters: [
        { title: "Chapter 1", file: "ds-chap1.html" },
        { title: "Chapter 2", file: "ds-chap2.html" }
  ]
    },
    {
        id: 4,
        title: "aot.jpg",
        img: "aot.jpg",
        desc: "Human vs Titans",
        chapters: ["chap1"]
    },
    {
        id: 5,
        title: "Your Name",
        img: "your name.jpg",
        desc: "Love and time",
        chapters: ["chap1"]
    },
    {
        id: 6,
        title: "initial D",
        img: "initial d.jpg",
        desc: "Street car race",
        chapters: ["chap1"]
    },
    {
        id: 7,
        title: "Demon Slayer",
        img: "dems.jpg",
        desc: "Demon hunters",
        chapters: ["chap1","chap2","chap3","chap4","chap5","chap6","chap7","chap8","chap9","chap10"]
    },
];

const mangaList = document.getElementById("mangaList");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const chapterList = document.getElementById("chapterList");
const closeBtn = document.getElementById("close");


mangas.forEach(manga => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${manga.img}">
        <h3>${manga.title}</h3>
    `;

    card.addEventListener("click", () => openModal(manga));
    mangaList.appendChild(card);
});


function openModal(manga) {
    modal.style.display = "flex";
    modalImg.src = manga.img;
    modalTitle.textContent = manga.title;
    modalDesc.textContent = manga.desc || "No description";

    chapterList.innerHTML = "";
    manga.chapters.forEach((chap, i) => {
        const li = document.createElement("li");
        li.textContent = `Chapter ${i + 1} - ${chap}`;
        li.onclick = () => alert(`${manga.title} - ${chap} уншиж байна 📖`);
        chapterList.appendChild(li);
    });
}

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

const profileBtn = document.getElementById("profileBtn");
const loginModal = document.getElementById("loginModal");

profileBtn.addEventListener("click", () => {
  const user = localStorage.getItem("user");

  if (!user) {
    loginModal.style.display = "block";
  } else {
    alert("Profile page руу орлоо: " + user);
  }
});

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    localStorage.setItem("user", username);
    loginModal.style.display = "none";
    alert("Амжилттай login хийлээ!");
  }
}

loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});