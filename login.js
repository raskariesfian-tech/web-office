document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'raska' && password === 'raska iko') {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = '3 index.html';
    } else if (username === 'ella' && password === 'aku cinta kamu') {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'https://drive.google.com/drive/folders/1LjcWd6UYZjql52SN6HksRjASmnlziH09';
    } else {
        alert('Username atau password salah!');
    }
});

// Cegah akses kembali ke halaman login jika sudah logout
if (sessionStorage.getItem('isLoggedIn') !== 'true') {
    history.replaceState(null, '', location.href);
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    });
}