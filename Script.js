// ================= CONFIG =================
const TEST_CONFIG = [
  { key: "bahasa", label: "Bahasa", count: 50, duration: 7 * 60 },
  { key: "hitungan", label: "Hitungan", count: 31, duration: 7 * 60 },
  { key: "pengetahuan", label: "Pengetahuan Umum", count: 40, duration: 7 * 60 },
  { key: "pola", label: "Pola Gambar", count: 55, duration: 7 * 60 },
  { key: "ruang", label: "Abstraksi Ruang", count: 27, duration: 7 * 60 },
  { key: "bentuk", label: "Bentuk", count: 25, duration: 7 * 60 },
  { key: "manajemen", label: "Manajemen", count: 20, duration: 20 * 60 }
];

// ================= BANK SOAL =================

// 🔹 BAHASA
const bahasa = [
{q:"Sinonim lestari?",o:["Rusak","Abadi","Hancur","Musnah"],a:1},
{q:"Antonim maju?",o:["Cepat","Mundur","Tinggi","Naik"],a:1},
{q:"Sinonim cepat?",o:["Lambat","Sigap","Malas","Diam"],a:1},
{q:"Sinonim cermat?",o:["Ceroboh","Teliti","Lambat","Kasar"],a:1},
{q:"Antonim luas?",o:["Sempit","Lebar","Panjang","Tinggi"],a:0},
{q:"Sinonim tangguh?",o:["Lemah","Kuat","Rapuh","Lembek"],a:1},
{q:"Antonim terang?",o:["Gelap","Cerah","Putih","Bersih"],a:0},
{q:"Sinonim adil?",o:["Curang","Bijak","Seimbang","Berat sebelah"],a:2},
{q:"Antonim tinggi?",o:["Rendah","Panjang","Besar","Lebar"],a:0},
{q:"Sinonim bijak?",o:["Bodoh","Pintar","Arif","Cepat"],a:2},
{q:"Sinonim efisien?",o:["Boros","Tepat guna","Lambat","Mahal"],a:1},
{q:"Antonim stabil?",o:["Tetap","Naik turun","Konsisten","Seimbang"],a:1},
{q:"Sinonim inovatif?",o:["Kreatif","Biasa","Lama","Usang"],a:0},
{q:"Antonim jujur?",o:["Adil","Bohong","Benar","Setia"],a:1},
{q:"Sinonim fleksibel?",o:["Kaku","Luwes","Tegas","Keras"],a:1},
{q:"Antonim optimis?",o:["Pesimis","Semangat","Aktif","Rajin"],a:0},
{q:"Sinonim valid?",o:["Salah","Sah","Palsu","Tidak benar"],a:1},
{q:"Antonim cepat?",o:["Sigap","Lambat","Tepat","Ringan"],a:1},
{q:"Sinonim signifikan?",o:["Penting","Kecil","Biasa","Remeh"],a:0},
{q:"Antonim mahal?",o:["Murah","Tinggi","Besar","Jauh"],a:0},
{q:"Sinonim akurat?",o:["Tepat","Salah","Lambat","Kasar"],a:0},
{q:"Antonim keras?",o:["Kuat","Lembut","Tegas","Berat"],a:1},
{q:"Sinonim harmonis?",o:["Serasi","Kacau","Ribut","Keras"],a:0},
{q:"Antonim cepat tanggap?",o:["Lamban","Sigap","Tepat","Cepat"],a:0},
{q:"Sinonim konsisten?",o:["Tetap","Berubah","Acak","Fleksibel"],a:0},
{q:"Antonim efektif?",o:["Tepat","Gagal","Efisien","Maksimal"],a:1},
{q:"Sinonim dominan?",o:["Utama","Kecil","Lemah","Minor"],a:0},
{q:"Sinonim relevan?",o:["Sesuai","Jauh","Tidak tepat","Lama"],a:0},
{q:"Antonim sederhana?",o:["Mudah","Rumit","Ringan","Cepat"],a:1},
{q:"Air : Haus = Makanan : ?",o:["Kenyang","Lapar","Minum","Tidur"],a:1},
{q:"Guru : Sekolah = Dokter : ?",o:["Pasar","Rumah sakit","Kantor","Bank"],a:1},
{q:"Api : Panas = Es : ?",o:["Dingin","Cair","Beku","Basah"],a:0},
{q:"Buku : Membaca = Pisau : ?",o:["Menulis","Memotong","Menggambar","Menghapus"],a:1},
{q:"Mobil : Jalan = Kapal : ?",o:["Laut","Udara","Darat","Sungai"],a:0},
{q:"Burung : Terbang = Ikan : ?",o:["Berjalan","Berenang","Melompat","Diam"],a:1},
{q:"Jam : Waktu = Termometer : ?",o:["Panas","Suhu","Cuaca","Angin"],a:1},
{q:"Petani : Sawah = Nelayan : ?",o:["Laut","Sungai","Danau","Kolam"],a:0},
{q:"Mata : Melihat = Telinga : ?",o:["Mendengar","Berbicara","Meraba","Mencium"],a:0},
{q:"Sepatu : Kaki = Sarung tangan : ?",o:["Kepala","Tangan","Mata","Badan"],a:1},
{q:"Malam : Gelap = Siang : ?",o:["Panas","Terang","Biru","Cerah"],a:1},
{q:"Cepat : Lambat = Panas : ?",o:["Dingin","Hangat","Beku","Sejuk"],a:0},
{q:"Sinonim kompleks?",o:["Sederhana","Rumit","Mudah","Cepat"],a:1},
{q:"Sinonim logis?",o:["Masuk akal","Aneh","Salah","Kabur"],a:0},
{q:"Sinonim kredibel?",o:["Dapat dipercaya","Bohong","Lemah","Ragu"],a:0},
{q:"Sinonim progresif?",o:["Maju","Mundur","Tetap","Lambat"],a:0},
{q:"Sinonim prioritas?",o:["Utama","Tambahan","Kecil","Sampingan"],a:0},
{q:"Pensil : Menulis = Kamera : ?",o:["Melihat","Memotret","Mendengar","Menyimpan"],a:1},
{q:"Kompor : Memasak = Kulkas : ?",o:["Mendinginkan","Memanaskan","Menyimpan","Menghangatkan"],a:0},
{q:"Kunci : Pintu = Password : ?",o:["Akun","Rumah","Sistem","Login"],a:0},
{q:"Sinonim adaptif?",o:["Mudah menyesuaikan","Kaku","Tetap","Keras"],a:0},
{q:"Sinonim integritas?",o:["Kejujuran","Kebohongan","Kesalahan","Kelalaian"],a:0},
{q:"Sinonim objektif?",o:["Netral","Subjektif","Pribadi","Berat sebelah"],a:0},
{q:"Sinonim stabil?",o:["Tetap","Naik turun","Goyah","Lemah"],a:0},
{q:"Sinonim kolaborasi?",o:["Kerja sama","Sendiri","Individual","Terpisah"],a:0}
];

// 🔹 HITUNGAN
const hitungan = [
{q:"Deret: 2, 6, 7, 21, 22, 66, ... berikutnya?",o:["67","68","132","198"],a:0},
{q:"Jika 3x + 2y = 18 dan x - y = 2, nilai x?",o:["4","5","6","7"],a:0},
{q:"Diskon 20% lalu naik 25%, hasil akhir?",o:["Tetap","Naik 5%","Turun 5%","Naik 10%"],a:0},
{q:"Rata-rata 5 bilangan 12, satu diganti 10→20, rata-rata baru?",o:["13","14","15","16"],a:1},
{q:"Deret kuadrat: 1,4,9,... suku ke-8?",o:["49","64","81","100"],a:1},
{q:"2/3 bilangan = 24, maka 5/6 bilangan?",o:["30","36","40","48"],a:0},
{q:"A kerja 6 hari, B 3 hari, bersama?",o:["2","2,5","3","4"],a:0},
{q:"Rumus n²+1, suku ke-5?",o:["24","25","26","27"],a:2},
{q:"Naik 10% lalu turun 10%?",o:["Tetap","Turun 1%","Naik 1%","Turun 2%"],a:1},
{q:"Jumlah 20, hasil kali maksimum?",o:["5&15","8&12","10&10","9&11"],a:2},
{q:"Deret: 3, 9, 27, ...",o:["54","81","90","72"],a:1},
{q:"Jika x²=49, x positif?",o:["6","7","8","9"],a:1},
{q:"15% dari 200?",o:["25","30","35","40"],a:1},
{q:"1/4 + 1/2 = ?",o:["1/2","3/4","2/4","1"],a:1},
{q:"Bilangan prima setelah 11?",o:["12","13","14","15"],a:1},
{q:"Kelipatan 6 dan 8 terkecil?",o:["12","24","36","48"],a:1},
{q:"Jika 5x=25, x=?",o:["3","4","5","6"],a:2},
{q:"Rata-rata 10 dan 20?",o:["10","15","20","25"],a:1},
{q:"Diskon 50% dari 80?",o:["20","30","40","50"],a:2},
{q:"Deret: 5,10,20,...",o:["30","35","40","45"],a:2},
{q:"Jika 8x=64?",o:["6","7","8","9"],a:2},
{q:"Bilangan genap setelah 14?",o:["15","16","17","18"],a:1},
{q:"Jumlah 1–10?",o:["45","50","55","60"],a:2},
{q:"Jika 9²=?",o:["72","81","90","99"],a:1},
{q:"3³=?",o:["6","9","27","81"],a:2},
{q:"Setengah dari 50?",o:["20","25","30","35"],a:1},
{q:"10% dari 500?",o:["40","50","60","70"],a:1},
{q:"Deret: 1,3,6,10,...",o:["12","13","15","16"],a:2},
{q:"Bilangan ganjil setelah 9?",o:["10","11","12","13"],a:1},
{q:"2⁴=?",o:["8","12","16","32"],a:2},
{q:"FPB 12 dan 18?",o:["4","6","8","9"],a:1},
{q:"KPK 4 dan 6?",o:["10","12","16","18"],a:1},
{q:"Jika 7x=49?",o:["5","6","7","8"],a:2},
{q:"Persentase 1/5?",o:["10%","20%","25%","30%"],a:1},
{q:"Deret: 2,4,8,...",o:["10","12","14","16"],a:3},
{q:"Jika 100-45?",o:["45","50","55","60"],a:2},
{q:"6×7=?",o:["36","40","42","48"],a:2},
{q:"Jika 81 ÷ 9?",o:["7","8","9","10"],a:2},
{q:"Kuadrat 6?",o:["30","36","42","48"],a:1},
{q:"Akar 64?",o:["6","7","8","9"],a:2},
{q:"Jika 20% dari 150?",o:["25","30","35","40"],a:1},
{q:"Rasio 2:4 = ?",o:["1:2","2:3","3:4","4:5"],a:0},
{q:"Keliling persegi sisi 5?",o:["10","15","20","25"],a:2},
{q:"Luas persegi sisi 4?",o:["8","12","16","20"],a:2},
{q:"Deret: 10,20,40,...",o:["60","70","80","90"],a:2}
];

// 🔹 PENGETAHUAN
const pengetahuan = [
{q:"Jika suatu daerah kaya sumber daya alam namun masyarakatnya miskin, penyebab paling logis adalah...",o:["SDA kurang","Pengelolaan buruk","Penduduk sedikit","Teknologi tinggi"],a:1},
{q:"Koperasi berbeda dari PT karena...",o:["Milik individu","Berbasis anggota","Fokus ekspor","Tanpa aturan"],a:1},
{q:"Globalisasi berdampak positif jika...",o:["Menolak budaya luar","Menyaring budaya","Meniru semua","Menutup diri"],a:1},
{q:"Jika inflasi tinggi, dampaknya adalah...",o:["Harga turun","Daya beli naik","Daya beli turun","Produksi naik"],a:2},
{q:"Sikap Bhinneka Tunggal Ika berarti...",o:["Menyamakan semua","Menghargai perbedaan","Menghindari konflik","Mengutamakan kelompok"],a:1},
{q:"Jika koperasi rugi, solusi terbaik...",o:["Ditutup","Musyawarah","Dibebankan satu orang","Diabaikan"],a:1},
{q:"Perdagangan bebas tanpa kontrol dapat menyebabkan...",o:["Harga stabil","Produk lokal kalah","Ekspor naik","Pajak turun"],a:1},
{q:"Jika pendidikan rendah, dampak ekonomi adalah...",o:["Produktivitas tinggi","Produktivitas rendah","Ekspor naik","Teknologi maju"],a:1},
{q:"Peran generasi muda dalam bangsa adalah...",o:["Pasif","Aktif berkontribusi","Netral","Menghindar"],a:1},
{q:"Jika konflik sosial terjadi, solusi terbaik...",o:["Kekerasan","Dialog","Diam","Menghindar"],a:1},
{q:"Jika desa nelayan tidak maju padahal laut kaya, berarti...",o:["Laut buruk","Pengelolaan lemah","Nelayan banyak","Teknologi maju"],a:1},
{q:"Sistem ekonomi koperasi bertujuan...",o:["Laba individu","Kesejahteraan bersama","Monopoli","Ekspor besar"],a:1},
{q:"Jika pajak naik, dampak umum...",o:["Konsumsi turun","Konsumsi naik","Harga turun","Produksi naik"],a:0},
{q:"Jika impor lebih besar dari ekspor...",o:["Surplus","Defisit","Stabil","Seimbang"],a:1},
{q:"Sikap bela negara dapat berupa...",o:["Melanggar aturan","Disiplin","Egois","Apatis"],a:1},
{q:"Jika teknologi berkembang, tenaga kerja...",o:["Hilang semua","Berubah skill","Tidak berubah","Menurun total"],a:1},
{q:"Korupsi berdampak pada...",o:["Kesejahteraan naik","Kerugian negara","Harga stabil","Ekonomi kuat"],a:1},
{q:"Jika UMKM berkembang, dampaknya...",o:["Pengangguran naik","Ekonomi lokal naik","Harga turun","Impor naik"],a:1},
{q:"Pendidikan penting karena...",o:["Formalitas","Meningkatkan SDM","Beban","Tidak penting"],a:1},
{q:"Jika sumber daya langka, maka...",o:["Harga turun","Harga naik","Tetap","Tidak berpengaruh"],a:1},
{q:"Jika permintaan naik, harga cenderung...",o:["Turun","Naik","Tetap","Hilang"],a:1},
{q:"Jika suplai naik, harga cenderung...",o:["Naik","Turun","Tetap","Tidak ada"],a:1},
{q:"Keadilan sosial berarti...",o:["Sama rata","Sesuai kebutuhan","Bebas","Acak"],a:1},
{q:"Jika urbanisasi tinggi...",o:["Desa maju","Kota padat","Desa kosong total","Ekonomi turun"],a:1},
{q:"Peran pemerintah dalam ekonomi...",o:["Tidak ikut","Mengatur","Menghindar","Netral"],a:1},
{q:"Jika koperasi maju, anggota...",o:["Rugi","Sejahtera","Pasif","Tidak berubah"],a:1},
{q:"Jika investasi naik...",o:["Ekonomi tumbuh","Ekonomi turun","Harga turun","Produksi hilang"],a:0},
{q:"Jika pengangguran tinggi...",o:["Ekonomi kuat","Ekonomi lemah","Stabil","Tidak berpengaruh"],a:1},
{q:"Jika produksi meningkat...",o:["Barang langka","Barang banyak","Harga naik","Ekspor turun"],a:1},
{q:"Jika ekspor naik...",o:["Devisa naik","Devisa turun","Harga naik","Impor naik"],a:0},
{q:"Jika hukum lemah...",o:["Kriminalitas turun","Kriminalitas naik","Stabil","Aman"],a:1},
{q:"Jika demokrasi sehat...",o:["Rakyat pasif","Rakyat aktif","Otoriter","Tertutup"],a:1},
{q:"Jika ekonomi digital berkembang...",o:["UMKM turun","UMKM naik","Tidak berubah","Hilang"],a:1},
{q:"Jika subsidi naik...",o:["Harga turun","Harga naik","Stabil","Tidak berubah"],a:0},
{q:"Jika daya beli naik...",o:["Konsumsi naik","Konsumsi turun","Harga turun","Produksi turun"],a:0},
{q:"Jika literasi rendah...",o:["SDM tinggi","SDM rendah","Ekonomi kuat","Stabil"],a:1},
{q:"Jika inovasi tinggi...",o:["Ekonomi stagnan","Ekonomi maju","Harga turun","Produksi turun"],a:1},
{q:"Jika inflasi rendah...",o:["Stabilitas tinggi","Krisis","Harga naik","Tidak berubah"],a:0},
{q:"Jika pajak optimal...",o:["Negara kuat","Negara lemah","Tidak berubah","Turun"],a:0},
{q:"Jika kesejahteraan naik...",o:["Kemiskinan turun","Kemiskinan naik","Stabil","Tidak berubah"],a:0},
{q:"Jika transportasi baik...",o:["Distribusi lancar","Distribusi terhambat","Harga naik","Produksi turun"],a:0},
{q:"Jika energi mahal...",o:["Produksi naik","Produksi turun","Stabil","Tidak berubah"],a:1},
{q:"Jika sumber daya habis...",o:["Produksi naik","Produksi turun","Stabil","Tidak berubah"],a:1},
{q:"Jika teknologi rendah...",o:["Produktivitas tinggi","Produktivitas rendah","Stabil","Naik"],a:1},
{q:"Jika pendidikan tinggi...",o:["SDM tinggi","SDM rendah","Tidak berubah","Turun"],a:0}
];

// 🔹 POLA
const pola = [
{q:"▲ ● ▲ ● ▲ ... berikutnya?",o:["▲","●","■","◆"],a:1},
{q:"■ ▲ ■ ▲ ▲ ■ ▲ ▲ ▲ ... berikutnya?",o:["■","▲","■▲","▲▲▲▲"],a:0},
{q:"1 kotak, 2, 4, 8,... berikutnya?",o:["12","14","16","18"],a:2},
{q:"↑ → ↓ ← ↑ → ↓ ... berikutnya?",o:["←","↑","→","↓"],a:0},
{q:"○, ○○, ○○○,... ke-6?",o:["○○○○○","○○○○○○","○○○","○○"],a:1},
{q:"A1, B2, C3,... berikutnya?",o:["D4","D5","E4","E5"],a:0},
{q:"Merah, Biru, Hijau,... berikutnya?",o:["Merah","Biru","Hijau","Kuning"],a:0},
{q:"2,3,5,8,12,... berikutnya?",o:["15","16","17","18"],a:2},
{q:"●○, ○●, ●○,... berikutnya?",o:["○●","●○","●●","○○"],a:0},
{q:"X, XX, XXX,... ke-5?",o:["XXXX","XXXXX","XXXXXX","XXX"],a:1},
{q:"1,1,2,3,5,... berikutnya?",o:["6","7","8","9"],a:2},
{q:"2,4,6,8,... berikutnya?",o:["9","10","12","14"],a:1},
{q:"■, ■■, ■■■,... ke-7?",o:["6","7","8","9"],a:1},
{q:"A,C,E,G,... berikutnya?",o:["H","I","J","K"],a:1},
{q:"9,7,5,3,... berikutnya?",o:["2","1","0","-1"],a:1},
{q:"▲▼▲▼▲... berikutnya?",o:["▲","▼","■","◆"],a:1},
{q:"1,4,9,16,... berikutnya?",o:["20","25","30","36"],a:1},
{q:"2,6,18,... berikutnya?",o:["36","54","72","108"],a:1},
{q:"○●●, ○●●●,... berikutnya?",o:["○●●●●","○●●●●●","○●●","○●●●●●●"],a:0},
{q:"A,B,A,B,A,... berikutnya?",o:["A","B","C","D"],a:1},
{q:"3,6,9,12,... berikutnya?",o:["14","15","16","18"],a:1},
{q:"5,10,20,40,... berikutnya?",o:["60","70","80","90"],a:2},
{q:"Z,X,V,T,... berikutnya?",o:["S","R","Q","P"],a:1},
{q:"●○●○●... berikutnya?",o:["○","●","■","◆"],a:0},
{q:"2,5,10,17,... berikutnya?",o:["24","25","26","27"],a:2},
{q:"□, △, ○, □,... berikutnya?",o:["△","○","□","☆"],a:0},
{q:"1,3,6,10,... berikutnya?",o:["12","13","15","16"],a:2},
{q:"4,16,64,... berikutnya?",o:["128","256","512","1024"],a:1},
{q:"A, D, G, J,... berikutnya?",o:["K","L","M","N"],a:2},
{q:"10,20,30,... berikutnya?",o:["35","40","45","50"],a:1},
{q:"○○, ●●●, ○○○○,... berikutnya?",o:["●●●●●","○○○○○","●●●●","○○○○○○"],a:0},
{q:"▲, ▲▲▲, ▲▲▲▲▲,... berikutnya?",o:["▲▲▲▲▲▲","▲▲▲▲▲▲▲","▲▲▲▲▲▲▲▲","▲▲▲▲▲▲▲▲▲"],a:1},
{q:"2,3,5,7,... berikutnya?",o:["8","9","10","11"],a:3},
{q:"1,2,4,7,... berikutnya?",o:["10","11","12","13"],a:1},
{q:"5,8,13,... berikutnya?",o:["18","19","20","21"],a:3},
{q:"A,Z,B,Y,... berikutnya?",o:["C","D","X","W"],a:0},
{q:"3,9,27,... berikutnya?",o:["54","81","90","72"],a:1},
{q:"6,5,4,3,... berikutnya?",o:["2","1","0","-1"],a:0},
{q:"1,2,6,24,... berikutnya?",o:["48","72","120","144"],a:2},
{q:"●●, ●●●, ●●●●,... berikutnya?",o:["●●●●●","●●●●●●","●●●","●●"],a:0},
{q:"1,4,7,10,... berikutnya?",o:["11","12","13","14"],a:2},
{q:"2,3,6,7,... berikutnya?",o:["10","11","14","15"],a:2},
{q:"10,9,7,4,... berikutnya?",o:["1","2","3","0"],a:0},
{q:"2,4,12,48,... berikutnya?",o:["96","144","192","240"],a:1},
{q:"A,B,D,G,... berikutnya?",o:["J","K","L","M"],a:1},
{q:"5,15,45,... berikutnya?",o:["90","120","135","150"],a:2},
{q:"1,5,14,30,... berikutnya?",o:["50","55","60","65"],a:1},
{q:"●○○, ●●○, ●●●,... berikutnya?",o:["●●●●","●●●○","●●○○","●○○○"],a:0},
{q:"□■, ■□, □■,... berikutnya?",o:["■□","□■","■■","□□"],a:0},
{q:"7,14,28,... berikutnya?",o:["42","56","70","84"],a:1},
{q:"2,5,9,14,... berikutnya?",o:["18","19","20","21"],a:2},
{q:"3,6,12,24,... berikutnya?",o:["36","48","60","72"],a:1},
{q:"A,C,F,J,... berikutnya?",o:["N","O","P","Q"],a:0},
{q:"1,1,2,4,8,... berikutnya?",o:["12","14","16","18"],a:2},
{q:"4,6,9,13,... berikutnya?",o:["17","18","19","20"],a:1},
{q:"8,16,24,... berikutnya?",o:["30","32","34","36"],a:1},
{q:"2,3,5,9,... berikutnya?",o:["14","15","16","17"],a:3},
{q:"6,11,17,... berikutnya?",o:["22","23","24","25"],a:1},
{q:"1,3,7,15,... berikutnya?",o:["23","31","35","40"],a:1}
];

// 🔹 RUANG
const ruang = [
{q:"Kubus dicat semua sisi lalu dipotong 27 bagian. Kubus dengan 3 sisi warna?",o:["4","6","8","12"],a:2},
{q:"Kubus diputar 90° ke kanan, sisi atas jadi?",o:["Kiri","Kanan","Depan","Belakang"],a:1},
{q:"Kubus 6 sisi warna berbeda, jumlah sudut tampilan unik?",o:["6","8","12","24"],a:1},
{q:"Kubus 64 bagian, bagian tanpa warna?",o:["8","16","24","32"],a:0},
{q:"Kubus diputar 180°, hasilnya?",o:["Sama","Terbalik","Berubah bentuk","Hilang"],a:1},
{q:"Balok dilihat dari atas terlihat?",o:["Tinggi-lebar","Panjang-lebar","Panjang-tinggi","Tinggi saja"],a:1},
{q:"Jaring kubus terdiri dari?",o:["4 sisi","5 sisi","6 sisi","8 sisi"],a:2},
{q:"Rotasi 360° menghasilkan?",o:["Berubah","Sama","Terbalik","Hilang"],a:1},
{q:"Kubus punya berapa rusuk?",o:["8","10","12","14"],a:2},
{q:"Bangun terlihat beda dari depan & samping berarti?",o:["2D","3D","Transparan","Datar"],a:1},
{q:"Kubus 125 bagian, kubus 2 sisi warna?",o:["24","36","48","60"],a:1},
{q:"Jika sisi atas jadi depan setelah rotasi, jenis rotasi?",o:["Horizontal","Vertikal","Diagonal","Acak"],a:1},
{q:"Jumlah sisi kubus?",o:["4","5","6","8"],a:2},
{q:"Jika kubus dilipat salah, akibatnya?",o:["Tetap kubus","Tidak terbentuk","Lebih besar","Hilang"],a:1},
{q:"Jika sisi berlawanan 1–6, 2–5, maka 3 berlawanan?",o:["4","5","6","1"],a:0},
{q:"Kubus 27 bagian, bagian tanpa warna?",o:["1","2","4","6"],a:0},
{q:"Kubus 27 bagian, bagian 2 sisi warna?",o:["12","16","18","20"],a:0},
{q:"Kubus 64 bagian, bagian 3 sisi warna?",o:["4","6","8","12"],a:2},
{q:"Jika kubus diputar kiri 90°, sisi kanan jadi?",o:["Atas","Bawah","Depan","Belakang"],a:3},
{q:"Jika kubus dibuka, bentuknya?",o:["Lingkaran","Jaring","Segitiga","Tabung"],a:1},
{q:"Bangun 3D punya?",o:["Luas","Volume","Keliling","Panjang"],a:1},
{q:"Kubus punya berapa titik sudut?",o:["6","8","10","12"],a:1},
{q:"Jika sisi depan jadi bawah, rotasi?",o:["90°","180°","270°","360°"],a:0},
{q:"Jika dilihat dari samping, tinggi terlihat?",o:["Ya","Tidak","Kadang","Tidak pasti"],a:0},
{q:"Kubus 216 bagian, bagian dalam?",o:["8","27","64","125"],a:2},
{q:"Jika kubus diwarnai 2 sisi saja, bagian warna?",o:["Sedikit","Banyak","Semua","Tidak ada"],a:1},
{q:"Jika balok diputar, bentuk berubah?",o:["Ya","Tidak","Kadang","Hilang"],a:1},
{q:"Jika jaring salah lipat?",o:["Jadi bola","Tidak jadi kubus","Jadi tabung","Jadi prisma"],a:1},
{q:"Jika kubus dilihat dari atas?",o:["Persegi","Lingkaran","Segitiga","Oval"],a:0},
{q:"Kubus diputar 4 kali 90°?",o:["Berubah","Sama","Hilang","Terbalik"],a:1},
{q:"Kubus 8 bagian, semua sisi warna, bagian 3 sisi warna?",o:["4","6","8","2"],a:2},
{q:"Jika sisi kiri jadi atas?",o:["Rotasi","Refleksi","Translasi","Dilatasi"],a:0},
{q:"Jika objek dicerminkan?",o:["Sama","Terbalik","Hilang","Membesar"],a:1},
{q:"Jika kubus diperbesar?",o:["Rusuk bertambah","Sama","Volume naik","Hilang"],a:2},
{q:"Jika balok diperpanjang?",o:["Volume naik","Turun","Tetap","Hilang"],a:0},
{q:"Kubus 1000 bagian, bagian tengah?",o:["64","125","216","512"],a:3},
{q:"Jika sisi atas tetap, diputar horizontal?",o:["Atas tetap","Atas hilang","Bawah jadi atas","Tidak berubah"],a:0},
{q:"Jika sisi depan jadi belakang?",o:["90°","180°","270°","360°"],a:1},
{q:"Jika objek diputar acak?",o:["Bentuk berubah","Sama","Hilang","Membesar"],a:1},
{q:"Jika jaring kubus lengkap?",o:["Bisa jadi kubus","Tidak bisa","Hilang","Membesar"],a:0},
{q:"Jika kubus punya 6 warna, sisi terlihat max?",o:["1","2","3","6"],a:2},
{q:"Jika kubus dibelah 2?",o:["Volume sama","Volume setengah","Volume nol","Hilang"],a:1},
{q:"Jika dilihat dari depan?",o:["Panjang terlihat","Lebar terlihat","Tinggi terlihat","Semua"],a:3},
{q:"Jika objek 3D jadi 2D?",o:["Hilang volume","Hilang luas","Hilang panjang","Tetap"],a:0},
{q:"Jika kubus transparan?",o:["Semua sisi terlihat","Tidak terlihat","Sama","Gelap"],a:0},
{q:"Jika kubus disusun 2x2x2?",o:["4","6","8","12"],a:2},
{q:"Jika dilihat diagonal?",o:["Bentuk berubah","Sama","Hilang","Membesar"],a:0},
{q:"Jika diputar vertikal?",o:["Atas jadi depan","Atas tetap","Bawah hilang","Tidak berubah"],a:0},
{q:"Jika objek diperbesar 2x?",o:["Volume 2x","Volume 4x","Volume 8x","Volume tetap"],a:2},
{q:"Jika sisi sama semua?",o:["Kubus","Balok","Prisma","Tabung"],a:0},
{q:"Jika jaring tidak simetris?",o:["Bisa jadi kubus","Tidak bisa","Tetap","Membesar"],a:1},
{q:"Jika dilihat dari bawah?",o:["Sama atas","Terbalik","Tidak terlihat","Hilang"],a:1},
{q:"Jika diputar cepat?",o:["Sama","Berubah","Hilang","Membesar"],a:0},
{q:"Jika kubus dipecah?",o:["Volume sama","Berkurang","Bertambah","Hilang"],a:0},
{q:"Jika sisi berbeda warna?",o:["Mudah dikenali","Sulit","Tidak bisa","Sama"],a:0},
{q:"Jika balok diputar?",o:["Volume berubah","Tetap","Hilang","Membesar"],a:1},
{q:"Jika sisi depan ditutup?",o:["Tidak terlihat","Tetap","Hilang","Membesar"],a:0},
{q:"Jika objek dicerminkan 2x?",o:["Sama","Terbalik","Hilang","Membesar"],a:0},
{q:"Jika dilihat dari sudut?",o:["3 sisi terlihat","2 sisi","1 sisi","Semua"],a:0},
{q:"Jika kubus kecil disusun?",o:["Bentuk tetap","Berubah","Hilang","Membesar"],a:0}
];

// 🔹 BENTUK
const bentuk = [
{q:"Persegi dibagi diagonal, jumlah sudut total?",o:["180","360","540","720"],a:1},
{q:"2 lingkaran beririsan membentuk?",o:["Elips","Lensa","Segitiga","Persegi"],a:1},
{q:"Persegi panjang dipotong diagonal menghasilkan?",o:["Segitiga siku","Segitiga sama sisi","Lingkaran","Trapesium"],a:0},
{q:"Jaring kubus tidak mungkin berbentuk?",o:["Salib","Garis lurus","T","Z"],a:1},
{q:"9 persegi kecil → total persegi?",o:["9","10","13","14"],a:3},
{q:"Segitiga dicerminkan → hasil?",o:["Berubah","Sama","Hilang","Membesar"],a:1},
{q:"Bentuk L diputar 180° → hasil?",o:["Berbeda","Sama","Garis","Hilang"],a:1},
{q:"Simetri lipat 2 berarti?",o:["2 sisi sama","Tidak simetris","Acak","Tidak bisa dilipat"],a:0},
{q:"Pola 3 bentuk berulang, bentuk ke-10?",o:["1","2","3","Tidak pasti"],a:0},
{q:"Persegi dipotong jadi 4, jumlah sisi total?",o:["8","12","16","20"],a:2},
{q:"Segitiga dalam persegi berjumlah?",o:["2","4","6","8"],a:1},
{q:"Lingkaran dipotong 2 → bentuk?",o:["Setengah lingkaran","Segitiga","Persegi","Oval"],a:0},
{q:"Bentuk kompleks terdiri dari 2 segitiga → menjadi?",o:["Persegi","Jajar genjang","Trapesium","Lingkaran"],a:1},
{q:"Simetri putar 360° berarti?",o:["Sama","Berubah","Hilang","Terbalik"],a:0},
{q:"Bentuk tersembunyi dalam pola berarti?",o:["Tidak ada","Ada pola kecil","Acak","Rusak"],a:1},
{q:"Jika bentuk dipecah, maka?",o:["Luas tetap","Hilang","Bertambah","Tidak pasti"],a:0},
{q:"2 segitiga sama → jadi persegi?",o:["Ya","Tidak","Kadang","Tidak pasti"],a:1},
{q:"Bangun simetris jika?",o:["Seimbang","Tidak sama","Acak","Rusak"],a:0},
{q:"Jika bentuk diputar 90°?",o:["Sama bentuk","Hilang","Membesar","Mengecil"],a:0},
{q:"Jika dilipat tidak tepat?",o:["Bentuk rusak","Sama","Membesar","Hilang"],a:0},
{q:"Persegi + segitiga → bentuk?",o:["Rumah","Lingkaran","Oval","Segitiga"],a:0},
{q:"3 persegi membentuk L → jumlah sisi luar?",o:["6","8","10","12"],a:1},
{q:"Lingkaran dalam persegi → bentuk dominan?",o:["Persegi","Lingkaran","Segitiga","Oval"],a:0},
{q:"Jika diputar 360°?",o:["Sama","Berubah","Hilang","Membesar"],a:0},
{q:"Jika bentuk dicerminkan?",o:["Terbalik","Sama","Hilang","Rusak"],a:0},
{q:"Segitiga sama sisi punya simetri?",o:["1","2","3","4"],a:2},
{q:"Persegi punya simetri?",o:["2","3","4","5"],a:2},
{q:"Lingkaran punya simetri?",o:["1","2","Tak hingga","4"],a:2},
{q:"Bentuk tak simetris berarti?",o:["Tidak seimbang","Sama","Tetap","Hilang"],a:0},
{q:"Jika garis tengah ditarik?",o:["Membagi sama","Tidak sama","Acak","Hilang"],a:0},
{q:"Bentuk gabungan → jumlah sudut?",o:["Bertambah","Tetap","Berkurang","Hilang"],a:0},
{q:"Jika bentuk dipotong?",o:["Luas berkurang","Bertambah","Tetap","Hilang"],a:0},
{q:"Persegi panjang punya sudut?",o:["2","3","4","5"],a:2},
{q:"Segitiga punya sudut?",o:["2","3","4","5"],a:1},
{q:"Jika bentuk disusun ulang?",o:["Sama luas","Berubah","Hilang","Membesar"],a:0},
{q:"Jika bentuk diputar dan dicermin?",o:["Sama","Berubah","Hilang","Membesar"],a:0},
{q:"Jika pola berulang?",o:["Konsisten","Acak","Rusak","Hilang"],a:0},
{q:"Jika bentuk ditumpuk?",o:["Volume naik","Turun","Tetap","Hilang"],a:0},
{q:"Jika bentuk transparan?",o:["Terlihat semua","Tidak","Hilang","Gelap"],a:0},
{q:"Jika bentuk kompleks?",o:["Banyak bagian","Sedikit","Tidak ada","Hilang"],a:0},
{q:"Jika bentuk disederhanakan?",o:["Lebih mudah","Sulit","Hilang","Rusak"],a:0},
{q:"Jika pola simetris?",o:["Seimbang","Tidak","Acak","Rusak"],a:0},
{q:"Jika bentuk identik?",o:["Sama","Berbeda","Hilang","Rusak"],a:0},
{q:"Jika ukuran berbeda?",o:["Skala berubah","Sama","Hilang","Rusak"],a:0},
{q:"Jika bentuk kecil banyak?",o:["Kompleks","Sederhana","Hilang","Rusak"],a:0},
{q:"Jika bentuk besar dipecah?",o:["Banyak kecil","Hilang","Tetap","Rusak"],a:0},
{q:"Jika bentuk dicerminkan 2x?",o:["Sama","Berubah","Hilang","Membesar"],a:0},
{q:"Jika pola berubah?",o:["Tidak konsisten","Sama","Tetap","Hilang"],a:0},
{q:"Jika bentuk simetri putar?",o:["Bisa diputar sama","Tidak","Hilang","Rusak"],a:0},
{q:"Jika bentuk berlapis?",o:["Kompleks","Sederhana","Hilang","Rusak"],a:0},
{q:"Jika bentuk tertutup?",o:["Ada area","Tidak","Hilang","Rusak"],a:0},
{q:"Jika bentuk terbuka?",o:["Tidak ada area","Ada","Hilang","Rusak"],a:0},
{q:"Jika bentuk memiliki sisi sama?",o:["Simetris","Tidak","Acak","Rusak"],a:0},
{q:"Jika bentuk tidak beraturan?",o:["Asimetris","Simetris","Tetap","Hilang"],a:0},
{q:"Jika bentuk disusun ulang?",o:["Bentuk baru","Sama","Hilang","Rusak"],a:0},
{q:"Jika segitiga digabung?",o:["Bisa bentuk baru","Tidak","Hilang","Rusak"],a:0},
{q:"Jika persegi diputar?",o:["Sama","Berubah","Hilang","Rusak"],a:0},
{q:"Jika bentuk di-overlay?",o:["Kompleks","Sederhana","Hilang","Rusak"],a:0},
{q:"Jika bentuk berulang?",o:["Pola","Acak","Hilang","Rusak"],a:0},
{q:"Jika bentuk tersembunyi?",o:["Perlu analisis","Tidak ada","Hilang","Rusak"],a:0}
];

// 🔹 MANAJEMEN
const manajemen = [
{q:"Tujuan utama koperasi nelayan adalah...",o:["Laba individu","Kesejahteraan bersama","Ekspor tinggi","Monopoli"],a:1},
{q:"Jika hasil tangkap menurun, langkah terbaik koperasi...",o:["Menangkap lebih banyak","Evaluasi & konservasi","Menutup usaha","Menjual kapal"],a:1},
{q:"Pengelolaan berkelanjutan berarti...",o:["Eksploitasi maksimal","Menjaga ekosistem","Menambah kapal","Mengurangi nelayan"],a:1},
{q:"Jika harga ikan tidak stabil, koperasi sebaiknya...",o:["Diam","Menstabilkan distribusi","Menjual murah","Menimbun"],a:1},
{q:"Peran koperasi dalam pemasaran adalah...",o:["Membatasi jual","Memperluas akses pasar","Mengurangi produksi","Menutup usaha"],a:1},
{q:"Jika overfishing terjadi, dampaknya...",o:["Ikan bertambah","Stok menurun","Harga turun","Ekspor naik"],a:1},
{q:"Zona larang tangkap berfungsi untuk...",o:["Menambah tangkapan","Melindungi ekosistem","Mengurangi nelayan","Menutup laut"],a:1},
{q:"Jika nelayan menggunakan alat ilegal...",o:["Produksi naik","Ekosistem rusak","Harga stabil","Aman"],a:1},
{q:"Peran pemerintah desa dalam perikanan...",o:["Pasif","Regulasi & pembinaan","Menjual laut","Menutup usaha"],a:1},
{q:"Jika koperasi transparan...",o:["Anggota percaya","Rugi","Tidak berkembang","Bubar"],a:0},
{q:"Jika modal koperasi terbatas...",o:["Berhenti","Mencari kemitraan","Menutup usaha","Mengurangi anggota"],a:1},
{q:"Jika nelayan terlatih...",o:["Produktivitas naik","Turun","Tetap","Hilang"],a:0},
{q:"Budidaya ikan disebut...",o:["Perdagangan","Aquaculture","Industri","Distribusi"],a:1},
{q:"Jika pencemaran laut meningkat...",o:["Ikan banyak","Ekosistem rusak","Produksi naik","Stabil"],a:1},
{q:"Jika koperasi kuat...",o:["Anggota rugi","Anggota sejahtera","Produksi turun","Tidak berubah"],a:1},
{q:"Jika distribusi lancar...",o:["Harga stabil","Harga naik","Produksi turun","Ekspor turun"],a:0},
{q:"Jika nelayan pakai GPS...",o:["Menentukan lokasi","Mengolah ikan","Menjual ikan","Mengurangi hasil"],a:0},
{q:"Jika koperasi tidak dikelola baik...",o:["Maju","Rugi","Stabil","Naik"],a:1},
{q:"Jika sumber daya laut habis...",o:["Produksi naik","Produksi turun","Stabil","Ekspor naik"],a:1},
{q:"Jika harga ikan naik tinggi...",o:["Konsumen turun","Konsumen naik","Stabil","Produksi turun"],a:0},
{q:"Jika koperasi digital...",o:["Pasar luas","Terbatas","Turun","Hilang"],a:0},
{q:"Jika pelatihan rutin...",o:["SDM meningkat","Turun","Tetap","Hilang"],a:0},
{q:"Jika nelayan bergantung tengkulak...",o:["Harga stabil","Pendapatan rendah","Tinggi","Tidak berubah"],a:1},
{q:"Jika koperasi punya cold storage...",o:["Ikan awet","Cepat rusak","Harga turun","Produksi turun"],a:0},
{q:"Jika pemasaran online...",o:["Jangkauan luas","Sempit","Turun","Hilang"],a:0},
{q:"Jika konservasi dilakukan...",o:["Ikan bertambah","Ikan habis","Produksi turun","Tidak berubah"],a:0},
{q:"Jika alat tangkap ramah lingkungan...",o:["Ekosistem terjaga","Rusak","Tidak berubah","Hilang"],a:0},
{q:"Jika musim tangkap diabaikan...",o:["Produksi naik","Stok rusak","Stabil","Tidak berubah"],a:1},
{q:"Jika koperasi memiliki manajemen baik...",o:["Maju","Rugi","Turun","Hilang"],a:0},
{q:"Jika nelayan bekerja sama...",o:["Efisiensi naik","Turun","Tidak berubah","Hilang"],a:0},
{q:"Jika koperasi tidak transparan...",o:["Dipercaya","Tidak dipercaya","Stabil","Naik"],a:1},
{q:"Jika permintaan ikan naik...",o:["Harga naik","Harga turun","Stabil","Tidak berubah"],a:0},
{q:"Jika suplai ikan naik...",o:["Harga turun","Harga naik","Stabil","Tidak berubah"],a:0},
{q:"Jika program kampung nelayan berhasil...",o:["Sejahtera","Rugi","Turun","Hilang"],a:0},
{q:"Jika akses pasar luas...",o:["Pendapatan naik","Turun","Stabil","Hilang"],a:0},
{q:"Jika koperasi punya modal besar...",o:["Berkembang","Turun","Rugi","Hilang"],a:0},
{q:"Jika pendidikan nelayan rendah...",o:["Produktivitas tinggi","Rendah","Stabil","Naik"],a:1},
{q:"Jika teknologi modern digunakan...",o:["Efisiensi naik","Turun","Stabil","Hilang"],a:0},
{q:"Jika limbah laut meningkat...",o:["Ekosistem rusak","Membaik","Stabil","Naik"],a:0},
{q:"Jika koperasi aktif...",o:["Anggota untung","Rugi","Turun","Hilang"],a:0},
{q:"Jika nelayan disiplin aturan...",o:["Sumber daya terjaga","Rusak","Turun","Hilang"],a:0},
{q:"Jika koperasi inovatif...",o:["Berkembang","Turun","Rugi","Hilang"],a:0},
{q:"Jika sumber daya dijaga...",o:["Berkelanjutan","Habis","Turun","Hilang"],a:0},
{q:"Jika harga ikan stabil...",o:["Pendapatan stabil","Turun","Naik","Hilang"],a:0},
{q:"Jika program pelatihan gagal...",o:["SDM turun","Naik","Stabil","Hilang"],a:0},
{q:"Jika nelayan menggunakan racun...",o:["Ekosistem rusak","Membaik","Stabil","Naik"],a:0},
{q:"Jika koperasi kuat secara organisasi...",o:["Tahan krisis","Rugi","Turun","Hilang"],a:0},
{q:"Jika pemasaran buruk...",o:["Pendapatan turun","Naik","Stabil","Hilang"],a:0},
{q:"Jika kerja sama antar desa...",o:["Skala ekonomi naik","Turun","Stabil","Hilang"],a:0},
{q:"Jika pengelolaan profesional...",o:["Efektif","Tidak","Turun","Hilang"],a:0}
];

// ================= MAP =================
const BANK_MAP = {
  bahasa,
  hitungan,
  pengetahuan,
  pola,
  ruang,
  bentuk,
  manajemen
};

// ================= GENERATE =================
function generateQuestions() {
  let result = [];

  TEST_CONFIG.forEach(cfg => {
    let bank = [...BANK_MAP[cfg.key]].sort(() => Math.random() - 0.5);

    for (let i = 0; i < cfg.count; i++) {
      let q = bank[i % bank.length];

      result.push({
        ...q,
        kategori: cfg.label
      });
    }
  });

  return result;
}

const questions = generateQuestions();

// ================= STATE =================
let current = 0;
let answers = Array(questions.length).fill(null);
let currentSubtest = 0;
let timerInterval;
let subtestTime;

// ================= RANGE =================
let subtestRanges = [];
let startIndex = 0;

TEST_CONFIG.forEach(cfg => {
  subtestRanges.push({
    start: startIndex,
    end: startIndex + cfg.count - 1
  });
  startIndex += cfg.count;
});

// ================= TIMER =================
function startSubtestTimer() {
  clearInterval(timerInterval);
  subtestTime = TEST_CONFIG[currentSubtest].duration;

  timerInterval = setInterval(() => {
    subtestTime--;

    document.getElementById("timer").innerText =
      `${TEST_CONFIG[currentSubtest].label} | ${subtestTime}s`;

    if (subtestTime <= 0) {
      finishSubtest();
    }
  }, 1000);
}

// ================= RENDER =================
function loadQuestion() {
  const q = questions[current];

  const start = subtestRanges[currentSubtest].start;
  const nomor = current - start + 1;

  document.getElementById("q-number").innerText =
    `${q.kategori} - Soal ${nomor}`;

  document.getElementById("question").innerText = q.q;

  const optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  q.o.forEach((opt, i) => {
    const label = document.createElement("label");

    label.innerHTML = `
      <input type="radio" name="opt" ${answers[current] === i ? "checked" : ""}>
      ${opt}
    `;

    label.onclick = () => answers[current] = i;

    optDiv.appendChild(label);
  });
}

// ================= NAV =================
function nextQuestion() {
  if (current < subtestRanges[currentSubtest].end) {
    current++;
    loadQuestion();
  } else {
    finishSubtest();
  }
}

function prevQuestion() {
  if (current > subtestRanges[currentSubtest].start) {
    current--;
    loadQuestion();
  }
}

// ================= HITUNG =================
function calculateScore(index) {
  const range = subtestRanges[index];
  let benar = 0;

  for (let i = range.start; i <= range.end; i++) {
    if (answers[i] === questions[i].a) benar++;
  }

  return {
    benar,
    total: range.end - range.start + 1
  };
}

// ================= RESULT =================
function finishSubtest() {
  clearInterval(timerInterval);

  const res = calculateScore(currentSubtest);
  const range = subtestRanges[currentSubtest];

  let html = `<h2>${TEST_CONFIG[currentSubtest].label}</h2>`;
  html += `<h3>Skor: ${res.benar} / ${res.total}</h3>`;

  html += `<button onclick="nextSubtest()">Lanjut</button><hr>`;

  for (let i = range.start; i <= range.end; i++) {
    const q = questions[i];

    html += `
      <div style="margin-bottom:10px">
        <b>Soal ${i - range.start + 1}</b><br>
        ${q.q}<br>
        Jawaban kamu: ${q.o[answers[i]] ?? "-"}<br>
        Jawaban benar: <b>${q.o[q.a]}</b>
      </div>
    `;
  }

  document.getElementById("quiz-area").style.display = "none";
  const resultDiv = document.getElementById("result-area");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = html;
}

// ================= NEXT SUBTEST =================
function nextSubtest() {
  currentSubtest++;

  if (currentSubtest >= TEST_CONFIG.length) {
    endTest();
    return;
  }

  current = subtestRanges[currentSubtest].start;

  document.getElementById("quiz-area").style.display = "block";
  document.getElementById("result-area").style.display = "none";

  loadQuestion();
  startSubtestTimer();
}

// ================= FINAL =================
function endTest() {
  let total = 0;

  questions.forEach((q, i) => {
    if (answers[i] === q.a) total++;
  });

  document.getElementById("result-area").innerHTML =
    `<h1>Skor Akhir: ${total} / ${questions.length}</h1>`;
}

// ================= START =================
loadQuestion();
startSubtestTimer();