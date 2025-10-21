const gotobutton = document.getElementById("button");

// Tentukan batas scroll (500px, sesuai perintah)
const scrollThreshold = 500; 

window.onscroll = function () {
    // Perbaikan: "scroolTop" menjadi "scrollTop"
    // Cek scroll position melebihi batas 500px
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        // Tampilkan tombol dengan opacity rendah (0.7)
        gotobutton.style.visibility = "visible";
        gotobutton.style.opacity = "0.7"; 
    } else {
        // Sembunyikan tombol
        gotobutton.style.visibility = "hidden";
        gotobutton.style.opacity = "0";
    }
};

gotobutton.addEventListener("click" , () => {
    // Fungsi kembali ke atas (top: 0) dengan animasi smooth
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});