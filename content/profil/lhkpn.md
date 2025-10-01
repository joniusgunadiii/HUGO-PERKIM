---
author: disperkim
title: "LHKPN"
date: 1725413825
url: /profil/lhkpn
---

<!-- Grid gambar dengan 4 kolom di atas dan 3 kolom di bawah -->

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; justify-items: center;"><img src="/images/7Oe6Y7rcfHCJM5IchfT7.jpeg" style="width: 200px; height: auto; cursor: pointer;" alt="Image 1" onclick="openModal(this)" /> <img src="/images/xTrWtkMrXlMqf5uQY4X5.jpeg" style="width: 200px; height: auto; cursor: pointer;" alt="Image 2" onclick="openModal(this)" /> <img src="/images/PxbRcdFFTeemcxkOxOcl.jpeg" style="width: 200px; height: auto; cursor: pointer;" alt="Image 4" onclick="openModal(this)" /> <!-- Posisi gambar ke-4 dipindah ke posisi ke-3 --> <img src="/images/MXrqbaIkoSor8YqwcgLH.jpg" style="width: 200px; height: auto; cursor: pointer;" alt="Image 5" onclick="openModal(this)" /> <img src="/images/p68IPOkGJ908aTGTFGCt.jpeg" style="width: 200px; height: auto; cursor: pointer;" alt="Image 6" onclick="openModal(this)" /> <img src="/images/o4pfp2rGhsFmqgQjze6z.jpeg" style="width: 200px; height: auto; cursor: pointer;" alt="Image 7" onclick="openModal(this)" /> <img src="/images/6NNsF3XyGOJ2lwmRqkXr.jpeg" style="width: 200px; height: auto; cursor: pointer;" alt="Image 3" onclick="openModal(this)" /> <!-- Posisi gambar ke-3 dipindah ke posisi ke-4 --></div>

<!-- Tombol untuk mengunduh PDF dengan logo dan warna hijau -->

<p style="text-align: center; margin-top: 20px;"><a href="/file/YseSNc8TPL1fTqZKt3L4.pdf" target="_blank" style="display: inline-block; background-color: #28a745; color: white; padding: 15px 30px; text-decoration: none; font-size: 18px; font-family: Arial, sans-serif; border-radius: 5px;" rel="noopener"> 2023 LHKPN PERUMAHAN RAKYAT DAN PERMUKIMAN <span style="margin-left: 10px;">⬇️</span> </a></p>

<!-- Modal untuk menampilkan gambar yang diperbesar -->

<div id="myModal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.9);"><span style="position: absolute; top: 20px; right: 35px; color: white; font-size: 40px; font-weight: bold; cursor: pointer;" onclick="closeModal()">&times;</span> <img id="modalImage" style="margin: auto; display: block; width: 80%; max-width: 700px;" /></div>

<script>
function openModal(image) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = image.src;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
</script>

