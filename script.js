const mangas = [{
        id: 1,
        title: "Naruto",
        img: "naruto.jpg",
        desc: "A ninja story about Naruto Uzumaki",
        episodes: ["ep1", ]
    },
    {
        id: 2,
        title: "One Piece",
        img: "one piece.jpg",
        desc: "Pirate adventure to find the One Piece",
        episodes: ["ep1", ]
    },
    {
        id: 3,
        title: "Bleach",
        img: "bleach.jpg",
        desc: "Soul reapers and hollow battles",
        episodes: ["ep1", ]
    },
    {
        id: 4,
        title: "Attack on Titan",
        img: "aot.jpg",
        episodes: ["ep1", ]
    },
    {
        id: 5,
        title: "your name",
        img: "your name.jpg",
        desc: "love",
        episodes: ["ep1", ]
    },
    {
        id: 6,
        title: "initial d",
        img: "initial d.jpg",
        desc: "streat car race",
        episodes: ["ep1", ]
    },
    {
        id: 7,
        title: "demon slayer",
        img: "ds.jpg",
        desc: "demon hunters",
        chapters: ["chap1", "cahp2", "chap3", "chap4", "ep5", "ep6", "ep7", "ep8", "ep9", "ep10"]
    },
];

const mangaList = document.getElementById("mangaList");
const search = document.getElementById("search");

function render(list) {
    mangaList.innerHTML = "";

    list.forEach(m => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
      <img src="${m.img}">
      <h3>${m.title}</h3>
      <p class="desc" style="display:none">${m.desc}</p>
    `;
        div.addEventListener("click", () => {
            const desc = div.querySelector(".desc");
            desc.style.display = desc.style.display === "none" ? "block" : "none";
        });
        mangaList.appendChild(div);
    });
}


search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    const filtered = mangas.filter(m =>
        m.title.toLowerCase().includes(value)
    );
    render(filtered);
});

render(mangas);