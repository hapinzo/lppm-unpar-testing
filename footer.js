// footer.js — LPPM UNPAR | Updated: Logo putih + kolom navigasi
const komponenFooter = `
    <footer class="bg-[#0b3832] text-white py-12 px-6 mt-0">
        <div class="max-w-[1400px] mx-auto">

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

                <!-- Kolom 1: Brand + Logo -->
                <div class="sm:col-span-2 lg:col-span-1">
                    <img src="Logo Unpar - Lembanga Penelitian dan Pengabdian Kepada Masyarakat - White.png"
                         alt="LPPM UNPAR"
                         class="h-16 w-auto object-contain mb-4"
                         onerror="this.style.display='none'">
                    <p class="text-green-100/70 text-sm leading-relaxed mb-4">
                        Lembaga Penelitian dan Pengabdian kepada Masyarakat<br>
                        Universitas Katolik Parahyangan
                    </p>
                    <div class="flex gap-3 mt-4">
                        <a href="https://instagram.com/lppm.unpar" target="_blank"
                           class="w-9 h-9 bg-white/10 hover:bg-yellow-400 hover:text-[#0b3832] rounded-full flex items-center justify-center transition-all text-sm">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#"
                           class="w-9 h-9 bg-white/10 hover:bg-yellow-400 hover:text-[#0b3832] rounded-full flex items-center justify-center transition-all text-sm">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <!-- Kolom 2: Navigasi -->
                <div>
                    <h4 class="font-bold text-xs uppercase tracking-widest text-yellow-400 mb-4">Navigasi</h4>
                    <ul class="space-y-2 text-sm text-green-100/80">
                        <li><a href="Beranda.html" class="hover:text-yellow-400 transition-colors">Beranda</a></li>
                        <li><a href="Profil.html" class="hover:text-yellow-400 transition-colors">Profil LPPM</a></li>
                        <li><a href="Layanan.html" class="hover:text-yellow-400 transition-colors">Layanan</a></li>
                        <li><a href="Capaian.html" class="hover:text-yellow-400 transition-colors">Capaian</a></li>
                        <li><a href="Struktur-Organisasi.html" class="hover:text-yellow-400 transition-colors">Struktur Organisasi</a></li>
                    </ul>
                </div>

                <!-- Kolom 3: Pranala Luar -->
                <div>
                    <h4 class="font-bold text-xs uppercase tracking-widest text-yellow-400 mb-4">Pranala Luar</h4>
                    <ul class="space-y-2 text-sm text-green-100/80">
                        <li><a href="#" class="hover:text-yellow-400 transition-colors">Portal PENAMAS</a></li>
                        <li><a href="https://sinta.kemdikbud.go.id" target="_blank" class="hover:text-yellow-400 transition-colors">SINTA Kemdikbud</a></li>
                        <li><a href="Jurnal-Ilmiah-Elektronik-UNPAR.html" class="hover:text-yellow-400 transition-colors">Jurnal UNPAR</a></li>
                        <li><a href="https://unpar.ac.id" target="_blank" class="hover:text-yellow-400 transition-colors">Situs UNPAR</a></li>
                    </ul>
                </div>

                <!-- Kolom 4: Kontak -->
                <div>
                    <h4 class="font-bold text-xs uppercase tracking-widest text-yellow-400 mb-4">Kontak</h4>
                    <ul class="space-y-3 text-sm text-green-100/80">
                        <li class="flex items-start gap-2">
                            <i class="fa-solid fa-location-dot mt-0.5 text-yellow-400/70 shrink-0"></i>
                            <span>Gedung Rektorat Lt. 4<br>Jl. Ciumbuleuit No.94<br>Bandung 40141</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <i class="fa-solid fa-phone text-yellow-400/70 shrink-0"></i>
                            <a href="tel:0222032655" class="hover:text-yellow-400 transition-colors">(022) 203 2655</a>
                        </li>
                        <li class="flex items-center gap-2">
                            <i class="fa-regular fa-envelope text-yellow-400/70 shrink-0"></i>
                            <a href="mailto:lppm@unpar.ac.id" class="hover:text-yellow-400 transition-colors">lppm@unpar.ac.id</a>
                        </li>
                    </ul>
                </div>

            </div>

            <!-- Garis bawah -->
            <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-green-100/50 text-xs gap-3">
                <p>© 2026 LPPM Universitas Katolik Parahyangan. All Rights Reserved.</p>
                <p>Bandung, Jawa Barat, Indonesia</p>
            </div>

        </div>
    </footer>
`;

document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("footer-placeholder");
    if (placeholder) {
        placeholder.innerHTML = komponenFooter;
    }
});