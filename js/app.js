(function () {
  "use strict";

  /**
   * @typedef {{
   *   id: string;
   *   title: string;
   *   desc: string;
   *   price: number;
   *   category: string;
   *   tag: string;
   *   colors: Record<string, { image: string; gallery: string[] }>;
   *   defaultColor: string;
   * }} Product
   */

  /** @type {Product[]} */
  const PRODUCTS = [
    {
      id: "ab-floral-cuff",
      title: "Floral Cuff Abaya",
      desc: "Floral embroidered cuff design available in Green, Brown, and Rust Tan shades.",
      price: 4499,
      category: "embroidered",
      tag: "Signature",
      colors: {
        Green: {
          image: "images/floral-green-01.png",
          gallery: [
            "images/floral-green-01.png",
            "images/floral-green-02.png",
            "images/floral-green-03.png",
            "images/floral-green-04.png",
          ],
        },
        Brown: {
          image: "images/floral-brown-01.png",
          gallery: [
            "images/floral-brown-01.png",
            "images/floral-brown-02.png",
            "images/floral-brown-03.png",
          ],
        },
        "Rust Tan": {
          image: "images/floral-rust-02.png",
          gallery: [
            "images/floral-rust-01.png",
            "images/floral-rust-02.png",
            "images/floral-rust-03.png",
            "images/floral-rust-04.png",
          ],
        },
      },
      defaultColor: "Green",
    },
    {
      id: "ab-001",
      title: "Coffee Brown Signature Abaya",
      desc: "Flowing brown drape with elegant sleeve detailing for refined everyday wear.",
      price: 5499,
      category: "classic",
      tag: "Featured",
      colors: {
        Brown: { image: "images/abaya-01.png", gallery: ["images/abaya-01.png"] },
      },
      defaultColor: "Brown",
    },
    {
      id: "ab-002",
      title: "Dual Tone Front Panel Abaya",
      desc: "Modern open-front style with contrast panel that adds soft layered elegance.",
      price: 6299,
      category: "classic",
      tag: "Trending",
      colors: {
        Brown: { image: "images/abaya-02.png", gallery: ["images/abaya-02.png"] },
      },
      defaultColor: "Brown",
    },
    {
      id: "ab-003",
      title: "Classic Black Daily Abaya",
      desc: "Timeless closed black abaya with graceful fall and comfortable all-day fit.",
      price: 4999,
      category: "casual",
      tag: "Bestseller",
      colors: {
        Black: { image: "images/abaya-03.png", gallery: ["images/abaya-03.png"] },
      },
      defaultColor: "Black",
    },
    {
      id: "ab-004",
      title: "Moon Embroidered Brown Abaya",
      desc: "Soft textured fabric with crescent sleeve embroidery for subtle statement looks.",
      price: 6899,
      category: "embroidered",
      tag: "New",
      colors: {
        Brown: { image: "images/abaya-04.png", gallery: ["images/abaya-04.png"] },
      },
      defaultColor: "Brown",
    },
    {
      id: "ab-005",
      title: "Emerald Modest Flow Abaya",
      desc: "Deep green tone with a clean silhouette, ideal for events and evening outings.",
      price: 5999,
      category: "coloured",
      tag: "Limited",
      colors: {
        Green: { image: "images/abaya-05.png", gallery: ["images/abaya-05.png"] },
      },
      defaultColor: "Green",
    },
    {
      id: "ab-006",
      title: "Olive Floral Cuff Open Abaya",
      desc: "Open abaya with delicate floral cuffs and premium finish for festive styling.",
      price: 7599,
      category: "embroidered",
      tag: "Premium",
      colors: {
        Olive: { image: "images/abaya-06.png", gallery: ["images/abaya-06.png"] },
      },
      defaultColor: "Olive",
    },
    {
      id: "ab-007",
      title: "Brown Lace Sleeve Formal Abaya",
      desc: "Elegant formal cut with lace floral sleeve accents and polished tailoring.",
      price: 8199,
      category: "embroidered",
      tag: "Occasion",
      colors: {
        Brown: { image: "images/abaya-07.png", gallery: ["images/abaya-07.png"] },
      },
      defaultColor: "Brown",
    },
    {
      id: "ab-008",
      title: "Blush & Plum Contrast Abaya",
      desc: "Soft blush body with rich plum inner contrast for graceful special-day wear.",
      price: 7099,
      category: "coloured",
      tag: "",
      colors: {
        Blush: { image: "images/abaya-08.png", gallery: ["images/abaya-08.png"] },
      },
      defaultColor: "Blush",
    },
    {
      id: "ab-009",
      title: "Black Floral Cuff Statement Abaya",
      desc: "Classic black piece elevated by colorful floral embroidery on wide cuffs.",
      price: 7799,
      category: "embroidered",
      tag: "Eid",
      colors: {
        Black: { image: "images/abaya-09.png", gallery: ["images/abaya-09.png"] },
      },
      defaultColor: "Black",
    },
  ];

  const SIZE_INFO = {
    sizes: "S, M, L",
    chest: '21", 22.5", 23.5"',
    length: '53", 55", 57"',
    sleeves: '23", 23", 23"',
    note: "All measurements are in inches.",
  };
  const SIZE_OPTIONS = ["S", "M", "L"];
  const COLOR_OPTIONS = ["Green", "Brown", "Rust Tan", "Black", "Olive", "Blush"];
  const COLOR_SWATCH = {
    Green: "#3e5f3a",
    Brown: "#5a3f33",
    "Rust Tan": "#a85f36",
    Black: "#1f2024",
    Olive: "#4b5a33",
    Blush: "#b9828f",
  };

  /** Country code + number, no + prefix */
  const WA_NUMBER = "923126827562";
  const WA_BASE = "https://wa.me/" + WA_NUMBER;

  const grid = document.getElementById("product-grid");
  const cartToggle = document.getElementById("cart-toggle");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartClose = document.getElementById("cart-close");
  const cartItemsEl = document.getElementById("cart-items");
  const cartCountEl = document.getElementById("cart-count");
  const cartTotalEl = document.getElementById("cart-total");
  const checkoutWa = document.getElementById("checkout-wa");
  const yearEl = document.getElementById("year");
  const form = document.getElementById("contact-form");
  const formHint = document.getElementById("form-hint");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const viewModal = document.getElementById("quick-view-modal");
  const viewOverlay = document.getElementById("quick-view-overlay");
  const viewClose = document.getElementById("quick-view-close");
  const viewMain = document.getElementById("quick-view-main-image");
  const viewThumbs = document.getElementById("quick-view-thumbs");
  const viewTitle = document.getElementById("quick-view-title");
  const viewDesc = document.getElementById("quick-view-desc");
  const viewPrice = document.getElementById("quick-view-price");
  const viewColor = document.getElementById("quick-view-color");
  const viewSize = document.getElementById("quick-view-size");
  const viewAdd = document.getElementById("quick-view-add");
  const viewMeasure = document.getElementById("quick-view-measure");

  const STORAGE_KEY = "dur_e_sitar_cart_v1";

  /** @type {{ key: string; id: string; color: string; size: string; qty: number }[]} */
  let cart = loadCart();
  let activeViewId = "";
  let activeViewImage = "";

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .map((line) => {
          const id = String(line.id || "").trim();
          if (!id || !getProduct(id)) return null;
          const size = normalizeSize(line.size);
          const color = normalizeColor(line.color, getProduct(id).defaultColor, getColorOptions(getProduct(id)));
          const qty = Number(line.qty);
          return {
            key: makeLineKey(id, color, size),
            id,
            color,
            size,
            qty: Number.isFinite(qty) && qty > 0 ? Math.floor(qty) : 1,
          };
        })
        .filter(Boolean);
    } catch {
      return [];
    }
  }

  function saveCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }

  function formatPrice(n) {
    return "Rs. " + n.toLocaleString("en-PK");
  }

  function getProduct(id) {
    return PRODUCTS.find((p) => p.id === id);
  }

  function makeLineKey(id, color, size) {
    return `${id}__${color}__${size}`;
  }

  function normalizeSize(size) {
    return SIZE_OPTIONS.includes(String(size)) ? String(size) : "M";
  }

  function normalizeColor(color, fallback, options) {
    const palette = options && options.length ? options : COLOR_OPTIONS;
    return palette.includes(String(color)) ? String(color) : fallback || palette[0] || "Green";
  }

  function getColorOptions(product) {
    if (!product) return [];
    return Object.keys(product.colors || {});
  }

  function productColorData(product, color) {
    if (!product || !product.colors) return { image: "", gallery: [] };
    return product.colors[color] || product.colors[product.defaultColor] || Object.values(product.colors)[0] || { image: "", gallery: [] };
  }

  function cartLines() {
    return cart
      .map((line) => {
        const p = getProduct(line.id);
        return p ? { product: p, qty: line.qty, color: line.color, size: line.size, key: line.key } : null;
      })
      .filter(Boolean);
  }

  function cartTotal() {
    return cartLines().reduce((sum, l) => sum + l.product.price * l.qty, 0);
  }

  function setCartCount() {
    const n = cart.reduce((s, l) => s + l.qty, 0);
    cartCountEl.textContent = String(n);
    cartCountEl.hidden = n === 0;
  }

  function renderProducts(filter) {
    if (!grid) return;
    grid.innerHTML = "";
    PRODUCTS.forEach((p) => {
      if (filter !== "all" && p.category !== filter) return;
      const card = document.createElement("article");
      const colorOptions = getColorOptions(p);
      const selectedColor = normalizeColor(p.defaultColor, p.defaultColor, colorOptions);
      const colorData = productColorData(p, selectedColor);
      card.className = "product-card";
      card.dataset.category = p.category;
      card.dataset.productId = p.id;
      card.innerHTML = `
        <div class="product-media">
          ${p.tag ? `<span class="product-badge">${escapeHtml(p.tag)}</span>` : ""}
          <img src="${escapeAttr(colorData.image)}" alt="${escapeAttr(p.title)}" loading="lazy" width="700" height="933" data-card-main="${escapeAttr(p.id)}" />
        </div>
        <div class="product-body">
          <span class="product-cat">${categoryLabel(p.category)}</span>
          <h3 class="product-title">${escapeHtml(p.title)}</h3>
          <p class="product-desc">${escapeHtml(p.desc)}</p>
          <div class="product-meta">
            <p><strong>Color:</strong> <span data-card-color-label="${escapeAttr(p.id)}">${escapeHtml(selectedColor)}</span></p>
            <p><strong>Sizes:</strong> ${escapeHtml(SIZE_INFO.sizes)}</p>
            <p><strong>Chest:</strong> ${escapeHtml(SIZE_INFO.chest)}</p>
            <p><strong>Length:</strong> ${escapeHtml(SIZE_INFO.length)}</p>
            <p><strong>Sleeves:</strong> ${escapeHtml(SIZE_INFO.sleeves)}</p>
            <p class="measure-note">${escapeHtml(SIZE_INFO.note)}</p>
          </div>
          <div class="product-controls">
            <label class="product-field">
              <span>Color</span>
              <div class="swatch-group" role="radiogroup" aria-label="Select color for ${escapeAttr(p.title)}" data-option-color="${escapeAttr(p.id)}">
                ${colorOptions
                  .map(
                    (c) =>
                      `<button type="button" class="color-swatch ${c === selectedColor ? "is-active" : ""}" data-swatch="${escapeAttr(c)}" data-product-swatch="${escapeAttr(
                        p.id
                      )}" style="--swatch:${escapeAttr(COLOR_SWATCH[c] || "#666666")}" aria-pressed="${c === selectedColor ? "true" : "false"}" title="${escapeAttr(c)}"><span class="sr-only">${escapeHtml(
                        c
                      )}</span></button>`
                  )
                  .join("")}
              </div>
            </label>
            <label class="product-field">
              <span>Size</span>
              <select data-option-size="${escapeAttr(p.id)}">
                ${SIZE_OPTIONS.map((s) => `<option value="${s}" ${s === "M" ? "selected" : ""}>${s}</option>`).join("")}
              </select>
            </label>
          </div>
          <p class="selected-color-chip">Selected: <strong data-card-selected-chip="${escapeAttr(p.id)}">${escapeHtml(selectedColor)}</strong></p>
          <div class="product-foot">
            <span class="price">${formatPrice(p.price)}</span>
            <div class="product-actions">
              <button type="button" class="view-btn" data-view="${escapeAttr(p.id)}">Quick view</button>
              <button type="button" class="add-btn" data-add="${escapeAttr(p.id)}">Add to bag</button>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function categoryLabel(cat) {
    if (cat === "classic") return "Classic";
    if (cat === "embroidered") return "Embroidered";
    if (cat === "casual") return "Casual";
    if (cat === "coloured") return "Coloured";
    return cat;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, "&#39;");
  }

  function renderCart() {
    const lines = cartLines();
    if (!lines.length) {
      cartItemsEl.innerHTML =
        '<p class="cart-empty">Your bag is empty.<br />Add something beautiful from the shop.</p>';
      cartTotalEl.textContent = formatPrice(0);
      checkoutWa.setAttribute(
        "href",
        WA_BASE +
          "?text=" +
          encodeURIComponent(
            "Hi, I would like more information about your abayas and delivery."
          )
      );
      return;
    }
    cartItemsEl.innerHTML = "";
    lines.forEach(({ product: p, qty, color, size, key }) => {
      const row = document.createElement("div");
      row.className = "cart-line";
      row.innerHTML = `
        <img src="${escapeAttr(productColorData(p, color).image)}" alt="" width="64" height="80" loading="lazy" />
        <div class="cart-line-info">
          <p class="cart-line-title">${escapeHtml(p.title)}</p>
          <p class="cart-line-meta"><span class="cart-line-unit">${formatPrice(p.price)} each</span> · <strong class="cart-line-subtotal">${formatPrice(p.price * qty)}</strong></p>
          <p class="cart-line-meta">Color: ${escapeHtml(color)} · Size: ${escapeHtml(size)}</p>
          <div class="cart-line-actions">
            <div class="cart-qty" role="group" aria-label="Quantity for ${escapeAttr(p.title)}">
              <button type="button" class="cart-qty-btn" data-qty-dec="${escapeAttr(key)}" aria-label="Decrease quantity">−</button>
              <span class="cart-qty-val" aria-live="polite">${qty}</span>
              <button type="button" class="cart-qty-btn" data-qty-inc="${escapeAttr(key)}" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="cart-line-remove" data-remove="${escapeAttr(key)}">Remove</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });
    cartTotalEl.textContent = formatPrice(cartTotal());
    const msg = buildWaOrderMessage(lines);
    checkoutWa.setAttribute("href", WA_BASE + "?text=" + encodeURIComponent(msg));
  }

  function buildWaOrderMessage(lines) {
    const parts = ["Hi, I would like to place an order:", ""];
    lines.forEach(({ product: p, qty, color, size }) => {
      parts.push(`• ${p.title} | Color: ${color} | Size: ${size} (×${qty}) — ${formatPrice(p.price * qty)}`);
    });
    parts.push("", `Total: ${formatPrice(cartTotal())}`);
    parts.push("", "Please confirm availability and delivery options. Thank you!");
    return parts.join("\n");
  }

  function getCardSelection(id) {
    const colorEl = document.querySelector(`[data-option-color="${id}"] .color-swatch.is-active`);
    const sizeEl = document.querySelector(`[data-option-size="${id}"]`);
    const p = getProduct(id);
    return {
      color: normalizeColor(colorEl ? colorEl.getAttribute("data-swatch") : "", p ? p.defaultColor : "Green", getColorOptions(p)),
      size: normalizeSize(sizeEl ? sizeEl.value : "M"),
    };
  }

  function addToCart(id, options) {
    const p = getProduct(id);
    if (!p) return;
    const color = normalizeColor(options && options.color ? options.color : "", p.defaultColor, getColorOptions(p));
    const size = normalizeSize(options && options.size ? options.size : "M");
    const key = makeLineKey(id, color, size);
    const existing = cart.find((l) => l.key === key);
    if (existing) existing.qty += 1;
    else cart.push({ key, id, color, size, qty: 1 });
    saveCart();
    setCartCount();
    renderCart();
    openCart();
  }

  function removeFromCart(key) {
    cart = cart.filter((l) => l.key !== key);
    saveCart();
    setCartCount();
    renderCart();
  }

  function changeCartQty(key, delta) {
    const line = cart.find((l) => l.key === key);
    if (!line) return;
    line.qty += delta;
    if (line.qty < 1) {
      cart = cart.filter((l) => l.key !== key);
    }
    saveCart();
    setCartCount();
    renderCart();
  }

  function openCart() {
    cartDrawer.classList.add("is-open");
    cartDrawer.setAttribute("aria-hidden", "false");
    cartClose.focus();
  }

  function closeCart() {
    cartDrawer.classList.remove("is-open");
    cartDrawer.setAttribute("aria-hidden", "true");
  }

  function syncCardColor(productId, color) {
    const p = getProduct(productId);
    if (!p) return;
    const chosen = normalizeColor(color, p.defaultColor, getColorOptions(p));
    const colorData = productColorData(p, chosen);
    const main = document.querySelector(`[data-card-main="${productId}"]`);
    const label = document.querySelector(`[data-card-color-label="${productId}"]`);
    const chip = document.querySelector(`[data-card-selected-chip="${productId}"]`);
    const swatches = document.querySelectorAll(`[data-product-swatch="${productId}"]`);
    if (main) {
      main.src = colorData.image;
      main.alt = `${p.title} - ${chosen}`;
    }
    if (label) label.textContent = chosen;
    if (chip) chip.textContent = chosen;
    swatches.forEach((sw) => {
      const active = sw.getAttribute("data-swatch") === chosen;
      sw.classList.toggle("is-active", active);
      sw.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function openQuickView(productId) {
    const p = getProduct(productId);
    if (!p || !viewModal) return;
    activeViewId = p.id;
    const colorOptions = getColorOptions(p);
    const selectedColor = normalizeColor(getCardSelection(productId).color, p.defaultColor, colorOptions);
    const colorData = productColorData(p, selectedColor);
    activeViewImage = colorData.image;
    viewTitle.textContent = p.title;
    viewDesc.textContent = p.desc;
    viewPrice.textContent = formatPrice(p.price);
    viewMain.src = colorData.image;
    viewMain.alt = p.title;
    viewColor.innerHTML = colorOptions.map((c) => `<option value="${escapeAttr(c)}" ${c === selectedColor ? "selected" : ""}>${escapeHtml(c)}</option>`).join("");
    viewSize.innerHTML = SIZE_OPTIONS.map((s) => `<option value="${s}" ${s === "M" ? "selected" : ""}>${s}</option>`).join("");
    viewMeasure.textContent = `Sizes: ${SIZE_INFO.sizes} | Chest: ${SIZE_INFO.chest} | Length: ${SIZE_INFO.length} | Sleeves: ${SIZE_INFO.sleeves}`;
    viewThumbs.innerHTML = colorData.gallery
      .map(
        (img, i) =>
          `<button type="button" class="quick-thumb ${i === 0 ? "is-active" : ""}" data-view-img="${escapeAttr(img)}"><img src="${escapeAttr(img)}" alt="${escapeAttr(p.title)} ${i + 1}" /></button>`
      )
      .join("");
    viewModal.classList.add("is-open");
    viewModal.setAttribute("aria-hidden", "false");
  }

  function closeQuickView() {
    if (!viewModal) return;
    viewModal.classList.remove("is-open");
    viewModal.setAttribute("aria-hidden", "true");
  }

  function applyFilter(cat) {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-filter") === cat);
    });
    document.querySelectorAll(".product-card").forEach((card) => {
      const c = card.dataset.category;
      const show = cat === "all" || c === cat;
      card.classList.toggle("is-hidden", !show);
    });
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.getAttribute("data-filter") || "all"));
  });

  if (grid) {
    grid.addEventListener("click", (e) => {
      const t = /** @type {HTMLElement} */ (e.target);
      const viewId = t.closest("[data-view]")?.getAttribute("data-view");
      if (viewId) {
        openQuickView(viewId);
        return;
      }
      const id = t.closest("[data-add]")?.getAttribute("data-add");
      if (id) {
        addToCart(id, getCardSelection(id));
      }
    });
    grid.addEventListener("click", (e) => {
      const t = /** @type {HTMLElement} */ (e.target);
      const swatch = t.closest("[data-product-swatch]");
      if (swatch) {
        const productId = swatch.getAttribute("data-product-swatch");
        const color = swatch.getAttribute("data-swatch");
        if (productId && color) syncCardColor(productId, color);
      }
    });
  }

  cartItemsEl.addEventListener("click", (e) => {
    const t = /** @type {HTMLElement} */ (e.target);
    const inc = t.closest("[data-qty-inc]")?.getAttribute("data-qty-inc");
    if (inc) {
      changeCartQty(inc, 1);
      return;
    }
    const dec = t.closest("[data-qty-dec]")?.getAttribute("data-qty-dec");
    if (dec) {
      changeCartQty(dec, -1);
      return;
    }
    const id = t.closest("[data-remove]")?.getAttribute("data-remove");
    if (id) removeFromCart(id);
  });

  if (viewThumbs) {
    viewThumbs.addEventListener("click", (e) => {
      const t = /** @type {HTMLElement} */ (e.target);
      const img = t.closest("[data-view-img]")?.getAttribute("data-view-img");
      if (!img) return;
      activeViewImage = img;
      viewMain.src = img;
      viewThumbs.querySelectorAll(".quick-thumb").forEach((btn) => btn.classList.remove("is-active"));
      t.closest(".quick-thumb")?.classList.add("is-active");
    });
  }

  if (viewAdd) {
    viewAdd.addEventListener("click", () => {
      if (!activeViewId) return;
      addToCart(activeViewId, { color: viewColor.value, size: viewSize.value });
      closeQuickView();
    });
  }

  if (viewColor) {
    viewColor.addEventListener("change", () => {
      const p = getProduct(activeViewId);
      if (!p) return;
      const chosen = normalizeColor(viewColor.value, p.defaultColor, getColorOptions(p));
      const colorData = productColorData(p, chosen);
      viewMain.src = colorData.image;
      viewThumbs.innerHTML = colorData.gallery
        .map(
          (img, i) =>
            `<button type="button" class="quick-thumb ${i === 0 ? "is-active" : ""}" data-view-img="${escapeAttr(img)}"><img src="${escapeAttr(img)}" alt="${escapeAttr(p.title)} ${i + 1}" /></button>`
        )
        .join("");
      const cardColor = document.querySelector(`[data-option-color="${activeViewId}"]`);
      if (cardColor) {
        syncCardColor(activeViewId, chosen);
      }
    });
  }

  if (viewClose) viewClose.addEventListener("click", closeQuickView);
  if (viewOverlay) viewOverlay.addEventListener("click", closeQuickView);

  cartToggle.addEventListener("click", () => {
    renderCart();
    openCart();
  });
  cartOverlay.addEventListener("click", closeCart);
  cartClose.addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCart();
    if (e.key === "Escape") closeQuickView();
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (form && formHint) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      const message = String(fd.get("message") || "").trim();
      if (!name || !phone || !message) {
        formHint.textContent = "Please fill in all fields.";
        return;
      }
      const text = ["Hi,", `Name: ${name}`, `Phone: ${phone}`, "", message].join("\n");
      window.open(WA_BASE + "?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
      formHint.textContent = "WhatsApp should open — if not, allow pop-ups for this site.";
      form.reset();
    });
  }

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  renderProducts("all");
  setCartCount();
  renderCart();
})();
