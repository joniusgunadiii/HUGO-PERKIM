// Fungsi untuk memutar suara
function speakText(text) {
  // Coba gunakan responsiveVoice terlebih dahulu
  if (
    typeof responsiveVoice !== "undefined" &&
    responsiveVoice.voiceSupport()
  ) {
    responsiveVoice.speak(text, "Indonesian Female", {
      volume: 0.8,
      rate: 0.9,
    });
  }
  // Fallback ke Web Speech API
  else if ("speechSynthesis" in window) {
    // Hentikan suara yang sedang berjalan
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.volume = 0.8;
    utterance.rate = 0.9;

    // Tunggu voices dimuat
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener("voiceschanged", () => {
        const voices = speechSynthesis.getVoices();
        const indonesianVoice = voices.find((voice) =>
          voice.lang.includes("id")
        );
        if (indonesianVoice) {
          utterance.voice = indonesianVoice;
        }
        speechSynthesis.speak(utterance);
      });
    } else {
      const voices = speechSynthesis.getVoices();
      const indonesianVoice = voices.find((voice) => voice.lang.includes("id"));
      if (indonesianVoice) {
        utterance.voice = indonesianVoice;
      }
      speechSynthesis.speak(utterance);
    }
  }
}

// Fungsi suara selamat datang (hanya sekali)
function autoWelcomeMessage() {
  // Cek apakah sudah pernah diputar di session ini
  if (!sessionStorage.getItem("welcomeVoicePlayed")) {
    setTimeout(() => {
      const welcomeMessage = "Selamat datang di website disperkim";
      speakText(welcomeMessage);

      // Tandai bahwa suara selamat datang sudah diputar
      sessionStorage.setItem("welcomeVoicePlayed", "true");
    }, 2000); // Delay 2 detik setelah halaman dimuat
  }
}

// Fungsi untuk menambahkan event listener ke menu navigasi
function addNavigationVoice() {
  // Tunggu sampai DOM selesai dimuat
  setTimeout(() => {
    // Cari semua link navigasi
    const navLinks = document.querySelectorAll(
      'nav a, header a, .nav-link, [href*="beranda"], [href*="berita"], [href*="profil"], [href*="layanan"], [href*="ppid"]'
    );

    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const linkText = this.textContent.trim().toLowerCase();
        const href = this.getAttribute("href") || "";

        // Mapping teks berdasarkan href atau text content
        let voiceText = "";

        if (
          href.includes("beranda") ||
          href === "/" ||
          linkText.includes("beranda") ||
          linkText.includes("home")
        ) {
          voiceText = "beranda";
        } else if (
          href.includes("berita") ||
          linkText.includes("berita") ||
          linkText.includes("news")
        ) {
          voiceText = "berita";
        } else if (
          href.includes("profil") ||
          linkText.includes("profil") ||
          linkText.includes("profile")
        ) {
          voiceText = "profil";
        } else if (
          href.includes("layanan") ||
          linkText.includes("layanan") ||
          linkText.includes("service")
        ) {
          voiceText = "layanan";
        } else if (href.includes("ppid") || linkText.includes("ppid")) {
          voiceText = "ppid";
        } else if (
          href.includes("kontak") ||
          linkText.includes("kontak") ||
          linkText.includes("contact")
        ) {
          voiceText = "kontak";
        } else if (linkText) {
          // Jika tidak ada mapping khusus, gunakan text content
          voiceText = linkText;
        }

        // Putar suara jika ada text
        if (voiceText) {
          speakText(voiceText);
        }
      });
    });
  }, 1000);
}

// Jalankan saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  autoWelcomeMessage();
  addNavigationVoice();
});
