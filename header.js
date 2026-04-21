// header.js — LPPM UNPAR | Updated: Logo asli + Mobile Hamburger Menu
const komponenHeader = `
    <header class="w-full font-sans sticky top-0 z-50" x-data="{ mobileOpen: false }">

        <!-- ===== TOP BAR ===== -->
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
                    <a href="https://instagram.com/lppm.unpar" target="_blank" class="hover:text-white transition-colors text-sm"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="hover:text-white transition-colors text-sm"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>

        <!-- ===== MAIN NAVBAR ===== -->
        <div class="bg-[#015850] text-white py-3 px-6 shadow-md">
            <div class="max-w-[1400px] mx-auto flex justify-between items-center gap-4">

                <!-- Logo -->
                <a href="Beranda.html" class="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer shrink-0">
                    <img src="Logo Unpar - Lembanga Penelitian dan Pengabdian Kepada Masyarakat - White.png"
                         alt="LPPM UNPAR"
                         class="h-14 w-auto object-contain"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <!-- Fallback jika gambar gagal load -->
                    <div style="display:none" class="w-14 h-14 bg-yellow-400 rounded-full items-center justify-center text-[#015850] font-bold text-xs shrink-0 border-2 border-white">
                        LPPM
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wider">

                    <div class="relative" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                        <button class="hover:text-yellow-400 transition-colors flex items-center gap-1 py-2">
                            TENTANG KAMI <i class="fa-solid fa-chevron-down text-[10px] mt-0.5"></i>
                        </button>
                        <div x-show="open" x-transition:enter="transition ease-out duration-150" x-transition:enter-start="opacity-0 -translate-y-1" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-in duration-100" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
                             class="absolute top-full left-0 mt-0 w-64 bg-white text-gray-800 shadow-xl rounded-b-lg border-t-2 border-yellow-400 overflow-hidden" x-cloak>
                            <a href="Profil.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Profil & Sejarah LPPM</a>
                            <a href="Arah-Strategis-Penelitian.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Arah Strategis Penelitian</a>
                            <a href="Arah-Strategis-Pengabdian.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Arah Strategis Pengabdian</a>
                            <a href="Struktur-Organisasi.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] transition-colors">Struktur Organisasi</a>
                        </div>
                    </div>

                    <a href="Layanan.html" class="hover:text-yellow-400 transition-colors py-2">LAYANAN</a>

                    <div class="relative" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                        <button class="hover:text-yellow-400 transition-colors flex items-center gap-1 py-2">
                            CAPAIAN & LUARAN <i class="fa-solid fa-chevron-down text-[10px] mt-0.5"></i>
                        </button>
                        <div x-show="open" x-transition:enter="transition ease-out duration-150" x-transition:enter-start="opacity-0 -translate-y-1" x-transition:enter-end="opacity-100 translate-y-0"
                             class="absolute top-full left-0 mt-0 w-64 bg-white text-gray-800 shadow-xl rounded-b-lg border-t-2 border-yellow-400 overflow-hidden" x-cloak>
                            <a href="Capaian.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Capaian</a>
                            <a href="Jurnal-Ilmiah-Elektronik-UNPAR.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] transition-colors">Jurnal Ilmiah Elektronik UNPAR</a>
                        </div>
                    </div>

                    <div class="relative" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                        <button class="hover:text-yellow-400 transition-colors flex items-center gap-1 py-2">
                            PUSAT STUDI <i class="fa-solid fa-chevron-down text-[10px] mt-0.5"></i>
                        </button>
                        <div x-show="open" x-transition:enter="transition ease-out duration-150" x-transition:enter-start="opacity-0 -translate-y-1" x-transition:enter-end="opacity-100 translate-y-0"
                             class="absolute top-full left-0 mt-0 w-56 bg-white text-gray-800 shadow-xl rounded-b-lg border-t-2 border-yellow-400 overflow-hidden" x-cloak>
                            <a href="Pusat-Studi-Multidisiplin.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Multidisiplin</a>
                            <a href="Pusat-Studi-Monodisiplin.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] transition-colors">Monodisiplin</a>
                        </div>
                    </div>

                    <div class="relative" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                        <button class="hover:text-yellow-400 transition-colors flex items-center gap-1 py-2">
                            DOKUMEN <i class="fa-solid fa-chevron-down text-[10px] mt-0.5"></i>
                        </button>
                        <div x-show="open" x-transition:enter="transition ease-out duration-150" x-transition:enter-start="opacity-0 -translate-y-1" x-transition:enter-end="opacity-100 translate-y-0"
                             class="absolute top-full right-0 mt-0 w-48 bg-white text-gray-800 shadow-xl rounded-b-lg border-t-2 border-yellow-400 overflow-hidden" x-cloak>
                            <a href="Dokumen-Internal.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] border-b border-gray-100 transition-colors">Internal</a>
                            <a href="Dokumen-Eksternal.html" class="block px-5 py-3.5 text-xs font-bold hover:bg-gray-50 hover:text-[#015850] transition-colors">Eksternal</a>
                        </div>
                    </div>

                    <button class="hover:text-yellow-400 transition-colors ml-2" aria-label="Cari">
                        <i class="fa-solid fa-magnifying-glass text-lg"></i>
                    </button>
                </nav>

                <!-- Hamburger Button (Mobile) -->
                <button
                    class="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
                    @click="mobileOpen = !mobileOpen"
                    aria-label="Buka menu"
                    :aria-expanded="mobileOpen">
                    <span class="block w-6 h-0.5 bg-white transition-all duration-300"
                          :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"></span>
                    <span class="block w-6 h-0.5 bg-white transition-all duration-300"
                          :class="mobileOpen ? 'opacity-0' : ''"></span>
                    <span class="block w-6 h-0.5 bg-white transition-all duration-300"
                          :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"></span>
                </button>

            </div>
        </div>

        <!-- ===== MOBILE DRAWER MENU ===== -->
        <div
            x-show="mobileOpen"
            x-transition:enter="transition ease-out duration-200"
            x-transition:enter-start="opacity-0 -translate-y-2"
            x-transition:enter-end="opacity-100 translate-y-0"
            x-transition:leave="transition ease-in duration-150"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            class="lg:hidden bg-[#0b3832] text-white border-t border-white/10 shadow-xl overflow-y-auto max-h-[80vh]"
            x-cloak>

            <div class="px-6 py-4 space-y-1 text-sm font-semibold">

                <!-- Tentang Kami -->
                <div x-data="{ sub: false }">
                    <button @click="sub = !sub"
                            class="w-full flex justify-between items-center py-3 border-b border-white/10 hover:text-yellow-400 transition-colors">
                        <span>TENTANG KAMI</span>
                        <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200" :class="sub ? 'rotate-180' : ''"></i>
                    </button>
                    <div x-show="sub" x-cloak class="pl-4 mt-1 space-y-1 text-xs font-medium text-white/80">
                        <a href="Profil.html" @click="mobileOpen=false" class="block py-2.5 hover:text-yellow-400 border-b border-white/5 transition-colors">Profil & Sejarah LPPM</a>
                        <a href="Arah-Strategis-Penelitian.html" @click="mobileOpen=false" class="block py-2.5 hover:text-yellow-400 border-b border-white/5 transition-colors">Arah Strategis Penelitian</a>
                        <a href="Arah-Strategis-Pengabdian.html" @click="mobileOpen=false" class="block py-2.5 hover:text-yellow-400 border-b border-white/5 transition-colors">Arah Strategis Pengabdian</a>
                        <a href="Struktur-Organisasi.html" @click="mobileOpen=false" class="block py-2.5 hover:text-yellow-400 transition-colors">Struktur Organisasi</a>
                    </div>
                </div>

                <a href="Layanan.html" @click="mobileOpen=false"
                   class="flex items-center justify-between w-full py-3 border-b border-white/10 hover:text-yellow-400 transition-colors">
                    LAYANAN <i class="fa-solid fa-arrow-right text-xs opacity-50"></i>
                </a>

                <!-- Capaian & Luaran -->
                <div x-data="{ sub: false }">
                    <button @click="sub = !sub"
                            class="w-full flex justify-between items-center py-3 border-b border-white/10 hover:text-yellow-400 transition-colors">
                        <span>CAPAIAN & LUARAN</span>
                        <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200" :class="sub ? 'rotate-180' : ''"></i>
                    </button>
                    <div x-show="sub" x-cloak class="pl-4 mt-1 space-y-1 text-xs font-medium text-white/80">
                        <a href="Capaian.html" @click="mobileOpen=false" class="block py-2.5 hover:text-yellow-400 border-b border-white/5 transition-colors">Capaian</a>
                        <a href="Jurnal-Ilmiah-Elektronik-UNPAR.html" @click="mobileOpen=false" class="block py-2.5 hover:text-yellow-400 transition-colors">Jurnal Ilmiah Elektronik UNPAR</a>
                    </div>
                </div>

                <!-- Pusat Studi -->
                <div x-data="{ sub: false }">
                    <button @click="sub = !sub"
                            class="w-full flex justify-between items-center py-3 border-b border-white/10 hover:text-yellow-400 transition-colors">
                        <span>PUSAT STUDI</span>
                        <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200" :class="sub ? 'rotate-180' : ''"></i>
                    </button>
                    <div x-show="sub" x-cloak class="pl-4 mt-1 space-y-1 text-xs font-medium text-white/80">
                        <a href="Pusat-Studi-Multidisiplin.html" @click="mobileOpen=false" class="block py-2.5 hover:text-yellow-400 border-b border-white/5 transition-colors">Multidisiplin</a>
                        <a href="Pusat-Studi-Monodisiplin.html" @click="mobileOpen=false" class="block py-2.5 hover:text-yellow-400 transition-colors">Monodisiplin</a>
                    </div>
                </div>

                <!-- Dokumen -->
                <div x-data="{ sub: false }">
                    <button @click="sub = !sub"
                            class="w-full flex justify-between items-center py-3 border-b border-white/10 hover:text-yellow-400 transition-colors">
                        <span>DOKUMEN</span>
                        <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200" :class="sub ? 'rotate-180' : ''"></i>
                    </button>
                    <div x-show="sub" x-cloak class="pl-4 mt-1 space-y-1 text-xs font-medium text-white/80">
                        <a href="Dokumen-Internal.html" @click="mobileOpen=false" class="block py-2.5 hover:text-yellow-400 border-b border-white/5 transition-colors">Internal</a>
                        <a href="Dokumen-Eksternal.html" @click="mobileOpen=false" class="block py-2.5 hover:text-yellow-400 transition-colors">Eksternal</a>
                    </div>
                </div>

                <!-- Kontak di mobile -->
                <div class="pt-4 pb-2">
                    <a href="mailto:lppm@unpar.ac.id"
                       class="flex items-center gap-3 text-xs text-white/70 hover:text-yellow-400 transition-colors py-1">
                        <i class="fa-regular fa-envelope w-4"></i> lppm@unpar.ac.id
                    </a>
                    <a href="tel:0222032655"
                       class="flex items-center gap-3 text-xs text-white/70 hover:text-yellow-400 transition-colors py-1 mt-1">
                        <i class="fa-solid fa-phone w-4"></i> (022) 203 2655
                    </a>
                </div>

            </div>
        </div>

        <!-- Overlay gelap saat menu mobile terbuka -->
        <div
            x-show="mobileOpen"
            @click="mobileOpen = false"
            class="lg:hidden fixed inset-0 bg-black/40 z-[-1]"
            x-cloak>
        </div>

    </header>
`;

document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("header-placeholder");
    if (placeholder) {
        placeholder.innerHTML = komponenHeader;
    }
});