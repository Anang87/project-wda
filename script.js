// Toggle class active 
const navbarNav = document.querySelector('.navbar-nav');

// menu diclick
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar 
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// FILTER KATEGORI PRODUK

const tombolKategori = document.querySelectorAll(".kategori-btn");
const kartuProduk = document.querySelectorAll(".daftar-produk-card");

tombolKategori.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const kategori = tombol.dataset.kategori;

    // Mengatur tombol aktif
    tombolKategori.forEach((btn) => {
      btn.classList.remove("active");
    });

    tombol.classList.add("active");

    // Menampilkan produk sesuai kategori
    kartuProduk.forEach((produk) => {
      if (
        kategori === "semua" ||
        produk.dataset.kategori === kategori
      ) {
        produk.classList.remove("hidden");
      } else {
        produk.classList.add("hidden");
      }
    });
  });
});