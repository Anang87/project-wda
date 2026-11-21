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



// MODAL DETAIL PRODUK

const modalDetail = document.getElementById("modal-detail");
const tombolTutup = document.getElementById("modal-close");

const detailGambar = document.getElementById("detail-gambar");
const detailNama = document.getElementById("detail-nama");
const detailHarga = document.getElementById("detail-harga");
const detailDeskripsi = document.getElementById("detail-deskripsi");
const tombolOrder = document.getElementById("order-wa");

const tombolDetail = document.querySelectorAll(".detail-btn");

tombolDetail.forEach((tombol) => {
  tombol.addEventListener("click", () => {

    const nama = tombol.dataset.nama;
    const harga = tombol.dataset.harga;
    const deskripsi = tombol.dataset.deskripsi;
    const gambar = tombol.dataset.gambar;

    detailNama.textContent = nama;
    detailHarga.textContent = harga;
    detailDeskripsi.textContent = deskripsi;

    detailGambar.src = gambar;
    detailGambar.alt = nama;

    const nomorWhatsApp = "6281234567890";

    const pesan = `Halo TEFA Bakery, saya ingin memesan ${nama} dengan harga ${harga}.`;

    tombolOrder.href =
      `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    modalDetail.classList.add("active");
  });
});

// TUTUP MODAL DENGAN TOMBOL X

tombolTutup.addEventListener("click", () => {
  modalDetail.classList.remove("active");
});

// TUTUP MODAL KETIKA AREA LUAR DIKLIK

modalDetail.addEventListener("click", (event) => {
  if (event.target === modalDetail) {
    modalDetail.classList.remove("active");
  }
});

// TUTUP MODAL DENGAN TOMBOL ESC

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalDetail.classList.remove("active");
  }
});