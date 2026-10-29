/**
 * PUTRA SUNDA JAYA - BICYCLE & SPAREPARTS STORE
 * Application Logic, Product Catalog, Mouse Drag Scroller & Modals
 */

// --- Phone Number Configuration ---
const STORE_PHONE_NUMBER = "628161918515"; // Putra Sunda Jaya Official WhatsApp

// --- Product Database ---
const products = [
  {
    id: 1,
    name: "Polygon Siskiu T7 Full-Suspension Trail MTB",
    category: "sepeda",
    type: "Sepeda Gunung (MTB)",
    price: 18500000,
    originalPrice: 20500000,
    discount: "10%",
    rating: "4.9 · 1rb+ Terjual",
    badge: "Best Seller",
    image: "images/mtb_bike.png",
    specs: {
      "Frame": "ALX Trail Alloy 135mm Travel",
      "Fork": "RockShox Recon Silver RL 140mm",
      "Rear Shock": "RockShox Deluxe Plus Select+",
      "Groupset": "Shimano Deore M6100 1x12 Speed",
      "Brakes": "Tektro HD-M735 Hydraulic Disc",
      "Wheelset": "Entity XL2 Disc 29 Inch"
    },
    description: "Sepeda gunung full-suspension tangguh dirancang khusus untuk menguji adrenalin di medan off-road, singletrack, hingga turunan curam dengan kenyamanan maksimal."
  },
  {
    id: 2,
    name: "Specialized Tarmac SL7 Expert Carbon Road Bike",
    category: "sepeda",
    type: "Sepeda Balap (Road)",
    price: 34500000,
    originalPrice: 38000000,
    discount: "9%",
    rating: "5.0 · 500+ Terjual",
    badge: "Premium",
    image: "images/road_bike.png",
    specs: {
      "Frame": "FACT 10r Carbon Aerodynamic",
      "Fork": "FACT Carbon 12x100mm Thru-Axle",
      "Groupset": "Shimano Ultegra Di2 R8170 12-Speed",
      "Wheelset": "Roval C38 Carbon Tubeless Ready",
      "Weight": "7.2 kg (Superlight)"
    },
    description: "Sepeda balap jalan raya kencang dengan aerodinamis kelas dunia. Bobot sangat ringan untuk performa pendakian dan sprint maksimal."
  },
  {
    id: 3,
    name: "United Trifold 11 Speed Folding Bike",
    category: "sepeda",
    type: "Sepeda Lipat",
    price: 7800000,
    originalPrice: 8500000,
    discount: "8%",
    rating: "4.8 · 2rb+ Terjual",
    badge: "Populer",
    image: "images/road_bike.png",
    specs: {
      "Frame": "Alloy Compact Folding Frame",
      "Drivetrain": "Shimano Alfine 11-Speed Internal Gear",
      "Wheelset": "16 Inch Alloy Double Wall",
      "Brakes": "V-Brake Tektro Performance"
    },
    description: "Sepeda lipat praktis 3 lipatan ringkas cocok untuk komuter perkotaan, mudah dimasukkan ke bagasi mobil atau MRT."
  },
  {
    id: 4,
    name: "Groupset Shimano Deore XT M8100 1x12 Speed Complete",
    category: "sparepart",
    type: "Drivetrain & Shift",
    price: 5200000,
    originalPrice: 5800000,
    discount: "10%",
    rating: "4.9 · 1.5rb+ Terjual",
    badge: "Original 100%",
    image: "images/hero_banner.png",
    specs: {
      "Shifter": "SL-M8100-R 12-Speed Rapidfire Plus",
      "Rear Derailleur": "RD-M8100-SGS Shadow RD+",
      "Cassette": "CS-M8100 10-51T Hyperglide+",
      "Crankset": "FC-M8100-1 32T Hollowtech II"
    },
    description: "Groupset presisi tinggi untuk upgrade performa operan gigi sepeda MTB Anda. Perpindahan rantai sangat halus di segala medan."
  },
  {
    id: 5,
    name: "Wheelset Roval Rapide CLX Carbon Disc Brake",
    category: "sparepart",
    type: "Wheelset & Hub",
    price: 14200000,
    originalPrice: 15500000,
    discount: "8%",
    rating: "5.0 · 300+ Terjual",
    badge: "Limited",
    image: "images/road_bike.png",
    specs: {
      "Rim Depth": "Front 51mm / Rear 60mm",
      "Rim Width": "Internal 21mm",
      "Hub": "Roval AeroHub DT Swiss EXP Internals",
      "Brake Type": "Centerlock Disc Brake"
    },
    description: "Velg balap carbon kelas dunia dengan stabilitas angin samping luar biasa dan akselerasi responsif."
  },
  {
    id: 6,
    name: "Helm Sepeda Cairbull Aero Cycling Helmet with Visor",
    category: "aksesoris",
    type: "Safety Gear",
    price: 650000,
    originalPrice: 750000,
    discount: "13%",
    rating: "4.7 · 800+ Terjual",
    badge: "Hot Deal",
    image: "images/hero_banner.png",
    specs: {
      "Material": "EPS Foam + Polycarbonate Shell",
      "Ventilation": "18 Air Vents Channel",
      "Feature": "Magnetic Visor UV400 Protection",
      "Weight": "260g"
    },
    description: "Helm sepeda aerodinamis ringan dengan visor magnetik anti-silau UV400. Perlindungan maksimal dan sirkulasi udara dingin."
  },
  {
    id: 7,
    name: "Rantai Sepeda KMC X12 Ti-N Gold 12 Speed",
    category: "sparepart",
    type: "Drivetrain",
    price: 750000,
    originalPrice: 850000,
    discount: "11%",
    rating: "4.9 · 2.5rb+ Terjual",
    badge: "Original",
    image: "images/mtb_bike.png",
    specs: {
      "Compatibility": "Shimano / SRAM 12-Speed",
      "Coating": "Titanium Nitride Gold Anti-Rust",
      "Links": "126 Links + MissingLink Included"
    },
    description: "Rantai emas 12 speed pelapis Titanium Nitride yang sangat awet, anti-karat, serta mempercantik penampilan drivetrain sepeda Anda."
  },
  {
    id: 8,
    name: "Lampu Sepeda Depan Belakang USB Rechargeable 1000 Lumens",
    category: "aksesoris",
    type: "Lighting & Safety",
    price: 280000,
    originalPrice: 350000,
    discount: "20%",
    rating: "4.8 · 3rb+ Terjual",
    badge: "Promo",
    image: "images/hero_banner.png",
    specs: {
      "Brightness": "1000 Lumens Ultra Bright LED",
      "Battery": "4000mAh Lithium Rechargeable",
      "Waterproof": "IPX6 Heavy Rainproof"
    },
    description: "Set lampu sepeda LED terang untuk gowes malam hari. Tahan air hujan deras dan baterai awet hingga 12 jam pemakaian."
  }
];

// --- Service Database ---
const servicesData = [
  {
    id: 1,
    title: "Bike Fitting Profesional",
    badge: "Presisi & Ergonomis",
    image: "images/mtb_bike.png",
    shortDesc: "Penyesuaian posisi sadel, stang, & geometri frame agar gowes tanpa nyeri.",
    price: "Rp 350.000",
    estimatedTime: "60 - 90 Menit",
    details: [
      "Pengukuran tinggi badan, inseam, & jangkauan lengan laser.",
      "Penyetelan tinggi sadel, setback, & kemiringan sadel.",
      "Penyesuaian tinggi stem stang & rotasi kleat sepatu.",
      "Uji coba kenyamanan di atas static trainer."
    ]
  },
  {
    id: 2,
    title: "Servis & Tune-Up Total",
    badge: "Garansi Performa",
    image: "images/road_bike.png",
    shortDesc: "Pembersihan rantai ultrasonik, bleeding rem hidrolik, & penyetelan RD/FD.",
    price: "Rp 250.000",
    estimatedTime: "2 - 3 Jam",
    details: [
      "Pembersihan rantai & sproket dengan cairan degreaser ultrasonik.",
      "Penyetelan kawat/wire operan gigi RD & FD hingga sangat presisi.",
      "Bleeding & isi ulang minyak rem hidrolik Mineral/DOT.",
      "Pengecekan tekanan angin ban & truing velg ringan."
    ]
  },
  {
    id: 3,
    title: "Rakit Sepeda Kustom",
    badge: "Impian Goweser",
    image: "images/hero_banner.png",
    shortDesc: "Pilih sendiri frame, groupset, wheelset, & komponen sesuai preferensi Anda.",
    price: "Rp 450.000",
    estimatedTime: "1 - 2 Hari",
    details: [
      "Perakitan dari frame mentah hingga menjadi sepeda utuh.",
      "Pemasangan BB (Bottom Bracket) & headset presisi torque wrench.",
      "Internal cable routing rapi & pemotongan selang hidrolik.",
      "Gratis servis gratis 3x setelah perakitan."
    ]
  },
  {
    id: 4,
    title: "Overhaul Suspensi & Fork",
    badge: "Khusus MTB",
    image: "images/mtb_bike.png",
    shortDesc: "Ganti oli fork, seal wiper, dan tuning rebound suspensi udara/coil.",
    price: "Rp 300.000",
    estimatedTime: "3 - 4 Jam",
    details: [
      "Pembongkaran lowering leg fork & rear shock.",
      "Pembersihan stanchion & penggantian wiper seal original.",
      "Pengisian oli suspensi FOX / RockShox grade tinggi.",
      "Penyetelan SAG & pressure udara sesuai bobot pengendara."
    ]
  }
];

// --- Store State ---
let cart = JSON.parse(localStorage.getItem('psj_cart')) || [];

// --- Helper Functions ---
function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}

// --- Slider Next Navigation Helper ---
function scrollSliderRight() {
  const container = document.getElementById('productsContainer');
  if (container) {
    const scrollAmount = window.innerWidth <= 768 ? 185 : 260;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog('semua');
  renderServices();
  updateCartBadge();
  setupEventListeners();
  initMouseDragScroll();
});

// --- Mouse Drag-To-Scroll Helper ---
function initMouseDragScroll() {
  const containers = document.querySelectorAll('.horizontal-scroll-container, .product-scroll-slider, .brand-scroll-slider, .rodalink-hero-wrapper');

  containers.forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('dragging');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('dragging');
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('dragging');
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    });
  });
}

// --- Catalog Renderer ---
function renderCatalog(filterCategory = 'semua', searchQuery = '') {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  let filtered = products;

  if (filterCategory !== 'semua') {
    filtered = filtered.filter(p => p.category === filterCategory);
  }

  if (searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.type.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #64748b; min-width: 280px;">
        <i class="ri-search-eye-line" style="font-size: 3rem; color: #cbd5e1; display: block; margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.2rem; font-weight: 700; color: #0f172a;">Produk Tidak Ditemukan</h3>
        <p>Coba gunakan kata kunci pencarian lain atau pilih kategori berbeda.</p>
      </div>
    `;
    return;
  }

  // Only render product cards — orange banner is already in HTML
  container.innerHTML = filtered.map(product => `
    <div class="product-card-scroll">
      <div class="product-image-box">
        <div class="product-badges">
          ${product.badge ? `<span class="badge badge-primary">${product.badge}</span>` : ''}
          ${product.discount ? `<span class="badge badge-sale">Hemat ${product.discount}</span>` : ''}
        </div>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-actions-hover">
          <button class="quick-view-btn" onclick="openQuickView(${product.id})">
            <i class="ri-eye-line"></i> Quick View
          </button>
        </div>
      </div>

      <div class="product-details">
        <h3 class="product-title" title="${product.name}">${product.name}</h3>

        <div class="price-block" style="margin-bottom: 0.4rem;">
          ${product.originalPrice ? `<span class="original-price">${formatRupiah(product.originalPrice)}</span>` : ''}
          <span class="current-price">${formatRupiah(product.price)}</span>
        </div>

        <div style="margin-bottom: 0.45rem;">
          <span class="badge-cicilan">Cicilan 0%</span>
        </div>

        <div class="product-rating">
          <i class="ri-star-fill"></i>
          <span>${product.rating}</span>
        </div>

        <div class="product-bottom">
          <button class="add-cart-btn" style="width: 100%; border-radius: 8px; font-size: 0.82rem; height: 36px; display: flex; align-items: center; justify-content: center; gap: 0.35rem;" onclick="addToCart(${product.id})">
            <i class="ri-shopping-cart-2-line"></i> Tambah Keranjang
          </button>
        </div>
      </div>
    </div>
  `).join('');

  initMouseDragScroll();
}

// --- Services Renderer ---
function renderServices() {
  const container = document.getElementById('servicesSliderContainer');
  if (!container) return;

  container.innerHTML = servicesData.map(service => `
    <div class="service-card-scroll" onclick="openServiceDetail(${service.id})">
      <img src="${service.image}" alt="${service.title}">
      <div class="service-content">
        <span class="service-badge">${service.badge}</span>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.shortDesc}</p>
        <span class="service-detail-btn">
          Lihat Detail Servis <i class="ri-arrow-right-line"></i>
        </span>
      </div>
    </div>
  `).join('');

  initMouseDragScroll();
}

// --- Service Detail Modal ---
function openServiceDetail(serviceId) {
  const service = servicesData.find(s => s.id === serviceId);
  if (!service) return;

  const modalOverlay = document.getElementById('quickViewModal');
  const modalContainer = document.getElementById('modalContentContainer');

  const detailsList = service.details.map(item => `
    <li style="padding: 0.4rem 0; border-bottom: 1px dashed #e2e8f0; display: flex; align-items: flex-start; gap: 0.5rem;">
      <i class="ri-checkbox-circle-fill" style="color: var(--clr-primary); margin-top: 0.2rem;"></i>
      <span>${item}</span>
    </li>
  `).join('');

  modalContainer.innerHTML = `
    <div class="modal-body-grid">
      <div class="modal-img-box">
        <img src="${service.image}" alt="${service.title}">
      </div>

      <div class="modal-info">
        <span class="badge badge-primary" style="margin-bottom: 0.5rem;">${service.badge}</span>
        <h3>${service.title}</h3>
        
        <div class="price-block" style="margin: 1rem 0;">
          <span style="font-size: 0.85rem; color: #64748b;">Biaya Jasa Servis:</span>
          <span class="current-price" style="font-size: 1.5rem; color: var(--clr-primary);">${service.price}</span>
        </div>

        <p style="color: var(--clr-text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
          <i class="ri-time-line"></i> Estimasi Pengerjaan: <strong>${service.estimatedTime}</strong>
        </p>

        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">Rincian Pengerjaan Servis:</h4>
        <ul style="list-style: none; margin-bottom: 1.5rem;">
          ${detailsList}
        </ul>

        <button class="btn btn-whatsapp" style="width: 100%;" onclick="bookServiceWhatsApp('${service.title}')">
          <i class="ri-whatsapp-line"></i> Booking Servis via WA 0816-1918-515
        </button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
}

function bookServiceWhatsApp(serviceTitle) {
  const text = `Halo *Putra Sunda Jaya*, saya ingin memesan layanan servis: *${serviceTitle}*.\n\nMohon info tanggal & jam antrean bengkel yang tersedia. Terima kasih!`;
  window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

// --- Quick View Product Modal ---
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById('quickViewModal');
  const modalContainer = document.getElementById('modalContentContainer');

  const specsList = Object.entries(product.specs).map(([key, val]) => `
    <li><strong>${key}:</strong> <span>${val}</span></li>
  `).join('');

  modalContainer.innerHTML = `
    <div class="modal-body-grid">
      <div class="modal-img-box">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="modal-info">
        <span class="badge badge-primary" style="margin-bottom: 0.5rem;">${product.type}</span>
        <h3>${product.name}</h3>
        
        <div class="product-rating" style="margin-bottom: 1rem;">
          <i class="ri-star-fill"></i> <strong>${product.rating}</strong>
        </div>

        <div class="price-block" style="margin-bottom: 1rem;">
          ${product.originalPrice ? `<span class="original-price">${formatRupiah(product.originalPrice)}</span>` : ''}
          <span class="current-price" style="font-size: 1.5rem; color: var(--clr-primary);">${formatRupiah(product.price)}</span>
        </div>

        <p style="color: var(--clr-text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">${product.description}</p>

        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">Spesifikasi Utama:</h4>
        <ul class="modal-specs-list">
          ${specsList}
        </ul>

        <div class="modal-action-buttons">
          <button class="btn btn-primary" style="flex: 1;" onclick="addToCart(${product.id}); closeQuickView();">
            <i class="ri-shopping-cart-2-line"></i> Tambah Keranjang
          </button>
          <button class="btn btn-whatsapp" style="flex: 1;" onclick="buyDirectWhatsApp(${product.id})">
            <i class="ri-whatsapp-line"></i> Beli Langsung
          </button>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
}

function closeQuickView() {
  const modalOverlay = document.getElementById('quickViewModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
  }
}

// --- Cart Operations ---
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartBadge();
  showToast(`"${product.name}" ditambahkan ke keranjang!`);
}

function updateQuantity(productId, change) {
  const index = cart.findIndex(item => item.id === productId);
  if (index > -1) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
  }
  saveCart();
  renderCartDrawer();
  updateCartBadge();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCartDrawer();
  updateCartBadge();
}

function saveCart() {
  localStorage.setItem('psj_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadgeCount');
  if (!badge) return;
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalCount;
  badge.style.display = totalCount > 0 ? 'flex' : 'none';
}

function renderCartDrawer() {
  const bodyContainer = document.getElementById('cartDrawerBody');
  const totalContainer = document.getElementById('cartTotalAmount');
  if (!bodyContainer || !totalContainer) return;

  if (cart.length === 0) {
    bodyContainer.innerHTML = `
      <div class="empty-cart" style="text-align: center; padding: 3rem 1rem; color: #64748b;">
        <i class="ri-shopping-bag-line" style="font-size: 3.5rem; color: #cbd5e1; margin-bottom: 1rem; display: block;"></i>
        <h4>Keranjang Masih Kosong</h4>
        <p>Silakan pilih sepeda atau sparepart impian Anda di katalog kami.</p>
      </div>
    `;
    totalContainer.textContent = formatRupiah(0);
    return;
  }

  let grandTotal = 0;

  bodyContainer.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-price">${formatRupiah(item.price)}</span>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span style="font-weight: 700; font-size: 0.85rem;">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            <button onclick="removeFromCart(${item.id})" style="margin-left: auto; background: none; color: #ef4444; font-size: 1.1rem;" title="Hapus">
              <i class="ri-delete-bin-line"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  totalContainer.textContent = formatRupiah(grandTotal);
}

function toggleCartDrawer(show = true) {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (show) {
    renderCartDrawer();
    drawer.classList.add('active');
    overlay.classList.add('active');
  } else {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  }
}

// --- Mobile Navigation Drawer ---
function toggleMobileDrawer(show = true) {
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  if (drawer && overlay) {
    if (show) {
      drawer.classList.add('active');
      overlay.classList.add('active');
    } else {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }
  }
}

// --- WhatsApp Checkout Integration ---
function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast("Keranjang Anda masih kosong!");
    return;
  }

  let text = "Halo *Putra Sunda Jaya*, saya ingin memesan barang berikut:\n\n";

  let grandTotal = 0;
  cart.forEach((item, idx) => {
    const subtotal = item.price * item.quantity;
    grandTotal += subtotal;
    text += `${idx + 1}. *${item.name}*\n   - Qty: ${item.quantity}x @ ${formatRupiah(item.price)}\n   - Subtotal: ${formatRupiah(subtotal)}\n\n`;
  });

  text += `*Total Pembayaran:* ${formatRupiah(grandTotal)}\n\n`;
  text += "Mohon bantuannya untuk info stok & rincian ongkos kirim. Terima kasih!";

  window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

function buyDirectWhatsApp(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let text = `Halo *Putra Sunda Jaya*, saya berminat membeli:\n\n*${product.name}*\nHarga: ${formatRupiah(product.price)}\n\nMohon info stok dan cara pembayarannya. Terima kasih!`;
  window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

// --- Toast Notification ---
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="ri-checkbox-circle-fill toast-icon"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      renderCatalog(e.target.dataset.category);
    });
  });

  const desktopSearch = document.getElementById('searchInput');
  const mobileSearch = document.getElementById('mobileSearchInput');

  const handleSearch = (e) => {
    const activeTab = document.querySelector('.filter-tab.active');
    const category = activeTab ? activeTab.dataset.category : 'semua';
    renderCatalog(category, e.target.value);
  };

  if (desktopSearch) desktopSearch.addEventListener('input', handleSearch);
  if (mobileSearch) mobileSearch.addEventListener('input', handleSearch);

  const mobileBtn = document.getElementById('mobileMenuToggle');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => toggleMobileDrawer(true));
  }
}
