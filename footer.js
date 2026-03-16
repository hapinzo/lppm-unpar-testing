// Isi dari footer.js
const komponenFooter = `
    <footer class="bg-[#015850] text-white py-12 px-6 mt-0 border-t border-white/10">
        <div class="max-w-6xl mx-auto text-sm">
            <div class="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h4 class="font-semibold text-lg mb-4 text-white">LPPM UNPAR</h4>
                    <p class="text-green-100 leading-relaxed">
                        Lembaga Penelitian dan Pengabdian kepada Masyarakat<br>
                        Universitas Katolik Parahyangan
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold text-lg mb-4 text-white">Kontak</h4>
                    <p class="text-green-100 leading-relaxed">
                        Jl. Ciumbuleuit No.94, Bandung 40141<br>
                        Telp: (022) 203 2655<br>
                        Email: lppm@unpar.ac.id
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold text-lg mb-4 text-white">Pranala Luar</h4>
                    <ul class="space-y-2 text-green-100">
                        <li><a href="#" class="hover:text-yellow-400 transition-colors">Portal PENAMAS</a></li>
                        <li><a href="#" class="hover:text-yellow-400 transition-colors">SINTA Kemdikbud</a></li>
                        <li><a href="#" class="hover:text-yellow-400 transition-colors">Jurnal UNPAR</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-[#0b3832] pt-8 flex flex-col md:flex-row justify-between items-center text-green-100/60 text-xs">
                <p>© 2026 LPPM Universitas Katolik Parahyangan. All Rights Reserved.</p>
                <div class="flex gap-4 text-lg">
                    <a href="https://instagram.com/lppm.unpar" target="_blank" class="hover:text-white transition-colors"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </footer>
    `;

// Fungsi untuk memasukkan komponenFooter ke dalam elemen HTML
document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("footer-placeholder");
    if(placeholder) {
        placeholder.innerHTML = komponenFooter;
    }
});