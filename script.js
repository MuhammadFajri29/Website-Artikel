// Memastikan script berjalan setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  // Hanya jalankan logika jika form login ada di halaman yang dibuka
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Mencegah form reload/submit default

      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const alertContainer = document.getElementById('alertMessage');

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      // Reset tampilan alert
      alertContainer.innerHTML = '';

      // Format regex untuk mengecek keabsahan email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let errorMessage = '';

      // Pengujian Validasi
      if (email === '' || password === '') {
        errorMessage = 'Email dan Password tidak boleh kosong!';
      } else if (!emailRegex.test(email)) {
        errorMessage = 'Format email tidak valid (contoh: user@domain.com)!';
      } else if (password.length < 6) {
        errorMessage = 'Password harus memiliki minimal 6 karakter!';
      } else {
        tampilkan("Login Berhasil!", "Success");
        loginForm.reset();
         setTimeout(function () {
          window.location.href = "index.html";
        }, 1500);
      }

      // Menampilkan Pesan Hasil Validasi
      if (errorMessage !== '') {
        // Tampilkan Pesan Gagal
        alertContainer.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Gagal:</strong> ${errorMessage}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
      } else {
        // Tampilkan Pesan Sukses
        alertContainer.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Berhasil!</strong> Validasi sukses. Mengalihkan ke beranda...
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;

      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  
  // 1. VALIDASI FORM LOGIN (Jika ada di halaman login)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const alertContainer = document.getElementById('alertMessage');

      alertContainer.innerHTML = '';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let errorMessage = '';

      if (email === '' || password === '') {
        errorMessage = 'Email dan Password wajib diisi!';
      } else if (!emailRegex.test(email)) {
        errorMessage = 'Format email tidak valid!';
      } else if (password.length < 6) {
        errorMessage = 'Password minimal harus 6 karakter!';
      }

      if (errorMessage !== '') {
        alertContainer.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <i class="bi bi-exclamation-triangle-fill me-2"></i>${errorMessage}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
      } else {
        alertContainer.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <i class="bi bi-check-circle-fill me-2"></i>Login berhasil! Mengalihkan...
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        loginForm.reset();
        setTimeout(() => { window.location.href = 'index.html'; }, 1500);
      }
    });
  }

  // 2. VALIDASI FORM KONTAK PESAN (Di Halaman tentang.html)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Mencegah reload halaman

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      const alertContainer = document.getElementById('contactAlert');

      // Reset pesan alert sebelumnya
      alertContainer.innerHTML = '';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let errorMsg = '';

      // Pengecekan Validasi
      if (name === '' || email === '' || subject === '' || message === '') {
        errorMsg = 'Semua kolom formulir wajib diisi!';
      } else if (!emailRegex.test(email)) {
        errorMsg = 'Format alamat email tidak valid (contoh: nama@email.com)!';
      }

      if (errorMsg !== '') {
        // Tampilkan Alert Error (Warna Merah)
        alertContainer.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show mb-3" role="alert">
            <i class="bi bi-exclamation-triangle-fill me-2"></i><strong>Gagal mengirim:</strong> ${errorMsg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
      } else {
        // Tampilkan Alert Sukses (Warna Hijau)[cite: 4]
        alertContainer.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show mb-3" role="alert">
            <i class="bi bi-check-circle-fill me-2"></i><strong>Berhasil!</strong> Pesan Anda telah terkirim. Terima kasih telah menghubungi AniZone!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;

        // Mengosongkan seluruh kolom input form secara otomatis
        contactForm.reset();
      }
    });
  }

});