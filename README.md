# 📅 Proyek UI Datepicker Fungsional (HTML, CSS, & JavaScript)

## 📝 Deskripsi Singkat

Proyek ini adalah implementasi antarmuka pengguna (UI) untuk komponen pemilih tanggal (*datepicker*) yang fungsional. Awalnya dirancang sebagai latihan UI statis, proyek ini telah dikembangkan untuk menyertakan fungsionalitas JavaScript dasar yang memungkinkan navigasi antar bulan, pemilihan tanggal, serta penandaan tanggal saat ini. Komponen ini dirancang dengan fokus pada estetika modern, responsivitas, dan praktik terbaik dalam HTML, CSS, dan JavaScript dasar.

## 🎯 Tujuan Proyek

Tujuan utama dari proyek ini adalah untuk:

1.  Mempelajari dan mempraktikkan teknik **HTML** semantik untuk membangun struktur komponen yang baik.
2.  Menguasai berbagai teknik **CSS** untuk *layout* (Flexbox dan Grid), *positioning*, *styling* visual yang menarik, dan responsivitas.
3.  Memahami dasar-dasar manipulasi DOM dan logika event handling menggunakan **JavaScript** untuk membuat komponen menjadi interaktif.
4.  Menghasilkan komponen UI *datepicker* yang bersih, profesional, modern, dan "kece" yang dapat menjadi dasar untuk pengembangan lebih lanjut.

## ✨ Fitur Utama

* **Tampilan Kalender Dinamis:** Menampilkan bulan dan tahun yang aktif.
* **Navigasi Bulan:** Tombol "Bulan Sebelumnya" dan "Bulan Berikutnya" yang fungsional.
* **Grid Tanggal Interaktif:**
    * Menampilkan nama-nama hari (Min, Sen, Sel, Rab, Kam, Jum, Sab).
    * Mengenerate tanggal secara dinamis untuk bulan yang aktif.
    * Menampilkan "padding days" (tanggal dari bulan sebelum/sesudahnya) untuk melengkapi tampilan grid.
    * Tanggal dapat diklik untuk dipilih.
* **Penandaan Visual:**
    * Tanggal "hari ini" ditandai secara khusus.
    * Tanggal yang "dipilih" oleh pengguna akan memiliki gaya visual yang berbeda.
* **Tombol Aksi di Footer:**
    * Tombol "Hari Ini" untuk langsung kembali dan memilih tanggal saat ini.
    * Tombol "Bersihkan" untuk menghapus tanggal yang telah dipilih.
* **Desain Modern & Responsif:** Tampilan yang *aesthetic*, bersih, dan menyesuaikan diri dengan berbagai ukuran layar (desktop hingga mobile).
* **Styling "Kece":** Menggunakan palet warna modern, tipografi yang baik, bayangan halus, dan transisi untuk pengalaman pengguna yang menyenangkan.

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Untuk struktur konten yang semantik.
* **CSS3:** Untuk *styling* dan *layout*.
    * **CSS Custom Properties (Variables):** Untuk tema yang mudah dikelola dan konsisten.
    * **Flexbox:** Untuk *layout* header, footer, dan elemen internal lainnya.
    * **CSS Grid:** Untuk *layout* utama kalender (nama hari dan grid tanggal).
    * **Pseudo-elements:** Untuk detail UI seperti indikator hari ini.
    * **Animasi & Transisi CSS:** Untuk efek visual yang halus.
* **JavaScript (Vanilla JS):** Untuk logika fungsionalitas *datepicker*, manipulasi DOM, dan event handling.


## 🚀 Cara Menjalankan/Melihat Proyek

1.  *Clone* repositori ini atau unduh semua file (`index.html`, `style.css`, `script.js`) ke dalam satu direktori/folder di komputer Anda.
2.  Buka file `index.html` menggunakan peramban web modern apa pun (misalnya, Google Chrome, Firefox, Safari, Edge).
3.  Komponen *datepicker* akan langsung terlihat dan dapat digunakan.

## 🧠 Fokus Pembelajaran & Praktik Terbaik

* **HTML Semantik:** Penggunaan tag seperti `<header>`, `<span>`, `<button>`, `<time>` secara tepat.
* **CSS Modern:** Pemanfaatan Flexbox dan Grid untuk *layout* yang kompleks dan responsif. Penggunaan variabel CSS untuk *theming*. Teknik *positioning* untuk elemen UI.
* **JavaScript Dasar:**
    * Manipulasi DOM (membuat elemen, mengubah konten, menambah/menghapus kelas).
    * Event Handling (klik tombol).
    * Logika tanggal menggunakan objek `Date` bawaan JavaScript.
    * Fungsi modular untuk merender kalender dan membuat elemen.
* **Desain Responsif:** Penerapan *media queries* untuk memastikan tampilan optimal di berbagai perangkat.
* **Aksesibilitas (Dasar):** Penggunaan `aria-label` pada tombol navigasi. Penggunaan elemen `<button>` untuk tanggal agar dapat difokus dan dioperasikan dengan keyboard.
* **Kode yang Terstruktur:** Pemisahan yang jelas antara struktur (HTML), presentasi (CSS), dan perilaku (JavaScript).

## 🎨 Kustomisasi

Komponen ini dirancang agar mudah dikustomisasi:

* **Tema Warna & Font:** Ubah nilai variabel CSS di bagian `:root` pada file `style.css` untuk mengubah skema warna, font, unit spasi, dll.
* **Bahasa:** Nama bulan saat ini menggunakan array `namaBulan` dalam bahasa Indonesia di `script.js`. Nama hari di `index.html` juga dalam bahasa Indonesia. Ini bisa disesuaikan dengan bahasa lain.
* **Logika Tambahan:** Anda dapat memperluas fungsionalitas JavaScript, misalnya untuk mengintegrasikannya dengan *input field*, menambahkan validasi rentang tanggal, atau menyimpan tanggal yang dipilih.

## 🔮 Potensi Pengembangan Selanjutnya

* Integrasi dengan *input field* HTML sehingga tanggal yang dipilih mengisi nilai *input*.
* Penambahan fitur pemilihan rentang tanggal (*date range picker*).
* Opsi untuk menonaktifkan tanggal tertentu (misalnya, akhir pekan atau tanggal yang sudah lewat).
* Navigasi cepat ke tahun tertentu.
* Dukungan lokalisasi yang lebih mendalam (format tanggal, hari pertama dalam seminggu).
* Animasi yang lebih kompleks saat berpindah bulan atau memilih tanggal.

---

_Proyek ini bertujuan untuk menjadi dasar yang solid dalam pembuatan komponen UI interaktif menggunakan teknologi web front-end standar._

❤️LooSry-code❤️