// Isi dari header.js
const komponenHeader = `
    <header class="w-full font-sans sticky top-0 z-50">
        <div class="bg-[#0b3832] text-white/90 text-xs py-2 px-6">
            <div class="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                <div class="flex items-center gap-6">
                    <a href="mailto:lppm@unpar.ac.id" class="flex items-center gap-2 hover:text-white transition-colors">
                        <i class="fa-regular fa-envelope text-sm"></i> lppm@unpar.ac.id
                    </a>
                    <span class="flex items-center gap-2">
                        <i class="fa-solid fa-phone text-sm"></i> (022) 203 2655
                    </span>
                </div>
                <div class="flex items-center gap-6 font-medium">
                    <a href="https://unpar.ac.id" class="hover:text-white transition-colors">UNPAR</a>
                    <a href="https://pmb.unpar.ac.id" class="hover:text-white transition-colors">PMB</a>
                    <a href="#" class="hover:text-white transition-colors text-sm"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="hover:text-white transition-colors text-sm"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>

        <div class="bg-[#015850] text-white py-4 px-6 shadow-md">
            <div class="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-4">
                
                <a href="beranda.html" class="flex items-center gap-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <div class="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-[#015850] font-bold text-[10px] shrink-0 border-2 border-white">
                        LOGO
                    </div>
                    <div class="flex flex-col justify-center">
                        <span class="text-sm font-light tracking-wide mb-0.5">UNIVERSITAS KATOLIK PARAHYANGAN</span>
                        <span class="text-lg font-bold uppercase tracking-wide leading-tight">
                            Lembaga Penelitian dan<br>Pengabdian kepada Masyarakat
                        </span>
                    </div>
                </a>

                <nav class="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wider">
                    
                    <div class="relative group" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                        <button class="hover:text-yellow-400 transition-colors flex items-center gap-1 py-2">
                            TENTANG KAMI <i class="fa-solid fa-chevron-down text-[10px] mt-0.5"></i>
                        </button>
                        <div x-show="open" x-transition.opacity.duration.200ms class="absolute top-full left-0 mt-0 w-64 bg-white text-gray-800 shadow-xl rounded-b-lg border-t-2 border-yellow-400 overflow-hidden" x-cloak>
                            <a href="profil.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Profil</a>
                            <a href="Arah-Strategis-Penelitian.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Arah Strategis Penelitian</a>
                            <a href="Arah-Strategis-Pengabdian.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Arah Strategis Pengabdian</a>
                            <a href="Struktur-Organisasi.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] transition-colors">Struktur Organisasi</a>
                        </div>
                    </div>

                    <a href="Layanan.html" class="hover:text-yellow-400 transition-colors py-2">LAYANAN</a>

                    <div class="relative group" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                        <button class="hover:text-yellow-400 transition-colors flex items-center gap-1 py-2">
                            CAPAIAN & LUARAN <i class="fa-solid fa-chevron-down text-[10px] mt-0.5"></i>
                        </button>
                        <div x-show="open" x-transition.opacity.duration.200ms class="absolute top-full left-0 mt-0 w-64 bg-white text-gray-800 shadow-xl rounded-b-lg border-t-2 border-yellow-400 overflow-hidden" x-cloak>
                            <a href="Capaian.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Capaian</a>
                            <a href="Jurnal-Ilmiah-Elektronik-UNPAR.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] transition-colors">Jurnal Ilmiah Elektronik UNPAR</a>
                        </div>
                    </div>

                    <div class="relative group" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                        <button class="hover:text-yellow-400 transition-colors flex items-center gap-1 py-2">
                            PUSAT STUDI <i class="fa-solid fa-chevron-down text-[10px] mt-0.5"></i>
                        </button>
                        <div x-show="open" x-transition.opacity.duration.200ms class="absolute top-full left-0 mt-0 w-56 bg-white text-gray-800 shadow-xl rounded-b-lg border-t-2 border-yellow-400 overflow-hidden" x-cloak>
                            <a href="Pusat-Studi-Multidisiplin.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Multidisiplin</a>
                            <a href="Pusat-Studi-Monodisiplin.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] transition-colors">Monodisiplin</a>
                        </div>
                    </div>

                    <div class="relative group" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                        <button class="hover:text-yellow-400 transition-colors flex items-center gap-1 py-2">
                            DOKUMEN <i class="fa-solid fa-chevron-down text-[10px] mt-0.5"></i>
                        </button>
                        <div x-show="open" x-transition.opacity.duration.200ms class="absolute top-full right-0 mt-0 w-48 bg-white text-gray-800 shadow-xl rounded-b-lg border-t-2 border-yellow-400 overflow-hidden" x-cloak>
                            <a href="Dokumen-Internal.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Internal</a>
                            <a href="Dokumen-eksternal.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] transition-colors">Eksternal</a>
                        </div>
                    </div>

                    <button class="hover:text-yellow-400 transition-colors ml-2">
                        <i class="fa-solid fa-magnifying-glass text-lg"></i>
                    </button>
                </nav>
            </div>
        </div>
    </header>
    `;

// Perintah untuk memasukkan komponenHeader ke dalam div yang kita siapkan
document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("header-placeholder");
    if(placeholder) {
        placeholder.innerHTML = komponenHeader;
    }
});