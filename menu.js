const items = [
    {
        name: "потжнокросівки",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRF3bcn8mmGwintvYTt6TfDl0xd549TVdkZ9GVERBjt4S7ItdE2I8UtjnXNHwA1Jly940sPIU7XA-bHiwIsGcBVLwyf5en28piQQt1mcHThMBAddzyQkiysVjoV5Os2tR5y4Rfnc8ZZZIE&usqp=CAc",
        price: "67$",
        category: "кросівки"
    },
    {
        name: "дуже круті кросівки",
        img: "https://ae-pic-a1.aliexpress-media.com/kf/H6e1a8df997054831812008f0f97050ebh.jpg_220x220q75.jpg_.avif",
        price: "90$",
        category: "кросівки"
    },
    {
        name: "ГАРНІ КРОСІВОЧКИ ДЛЯ МІСТА",
        img: "data:image/webp;base64,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",
        price: "50$",
        category: "кросівки"
    },
    {
        name: "ЧОЛОВІЧІ КРОСІВКИ",
        img: "data:image/webp;base64,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",
        price: "9999$",
        category: "кросівки"
    },
    {
        name: "abibas оріх",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbRfSiLyQ8u73JSVMKTVDTlcIjUf04VLfkA&s",
        price: "90$",
        category: "кросівки"
    },
    {
        name: "дуже гарні тапочки",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgctx0gj9IuGlIL0s9r4brXC63nuUpczpyw&s",
        price: "90$",
        category: "тапочки"
    },
    {
        name: "гантелі 10кг",
        img: "https://png.pngtree.com/png-vector/20240519/ourmid/pngtree-top-dumbbell-workouts-for-total-body-fitness-png-image_12497583.png",
        price: "120$",
        category: "спорт"
    },
    {
        name: "професійна штанга",
        img: "https://png.klev.club/uploads/posts/2024-03/png-klev-club-p-shtanga-png-2.png",
        price: "340$",
        category: "спорт"
    },
    {
        name: "спортивна футболка nike",
        img: "https://gfx.r-gol.com/media/res/products/703/127703/465x605/koszulka-nike-team-club-19-tee-ss-aj1504-100_1.png",
        price: "45$",
        category: "одяг"
    },
    {
        name: "фітнес килимок",
        img: "https://cdn.27.ua/sc--media--prod/default/7e/38/d2/7e38d23b-175a-401c-9490-248f26c0de75.jpg",
        price: "28$",
        category: "спорт"
    },
    {
        name: "пляшка для води gym",
        img: "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/s/p/sport_bottle_orange_1000_ml_-_gymbeam.jpg",
        price: "18$",
        category: "спорт"
    },
    {
        name: "худі для спорту",
        img: "https://www.fatline.com.ua/images/products/backs/const/hudi_polegsheni_siri_pered.png",
        price: "55$",
        category: "одяг"
    }
];

function parsePrice(str) {
    return parseInt(str.replace(/[^0-9]/g, ""), 10) || 0;
}

let activeCategory = "all";
let sortOrder = "default";

// Показ товару

function renderCards() {
    const shop = document.getElementById("shop");
    shop.innerHTML = "";

    let list = [...items];

    if (activeCategory !== "all") {
        list = list.filter(i => i.category === activeCategory);
    }

    if (sortOrder === "asc")  list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sortOrder === "desc") list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));

    list.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="card-body">
                <h2>${item.name}</h2>
                <div class="price">${item.price}</div>
                <button class="buy-btn" data-name="${item.name}" data-price="${item.price}">Купити</button>
            </div>
        `;
        shop.appendChild(card);
    });

    shop.querySelectorAll(".buy-btn").forEach(btn => {
        btn.addEventListener("click", () => openDialog(btn.dataset.name, btn.dataset.price));
    });
}

// Фільтр

function buildFilterBar() {
    const categories = ["all", ...new Set(items.map(i => i.category))];
    const labels = { all: "Всі", кросівки: "Кросівки", тапочки: "Тапочки", спорт: "Спорт", одяг: "Одяг" };

    const bar = document.getElementById("filter-bar");

    // кнопки категорій
    const catWrap = document.createElement("div");
    catWrap.className = "filter-cats";
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn" + (cat === "all" ? " active" : "");
        btn.textContent = labels[cat] || cat;
        btn.dataset.cat = cat;
        btn.addEventListener("click", () => {
            activeCategory = cat;
            bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCards();
        });
        catWrap.appendChild(btn);
    });

    // сортування
    const sortWrap = document.createElement("div");
    sortWrap.className = "filter-sort";
    const select = document.createElement("select");
    select.innerHTML = `
        <option value="default">Сортування</option>
        <option value="asc">Ціна: дешевші</option>
        <option value="desc">Ціна: дорожчі</option>
    `;
    select.addEventListener("change", () => {
        sortOrder = select.value;
        renderCards();
    });
    sortWrap.appendChild(select);

    bar.appendChild(catWrap);
    bar.appendChild(sortWrap);
}


function openDialog(name, price) {
    document.getElementById("dialog-item-name").textContent = name;
    document.getElementById("dialog-item-price").textContent = price;
    document.getElementById("order-name").value = "";
    document.getElementById("order-phone").value = "";
    document.getElementById("order-dialog").classList.add("open");
}

function closeDialog() {
    document.getElementById("order-dialog").classList.remove("open");
}

function submitOrder() {
    const name  = document.getElementById("order-name").value.trim();
    const phone = document.getElementById("order-phone").value.trim();

    if (!name || !phone) {
        ["order-name", "order-phone"].forEach(id => {
            const el = document.getElementById(id);
            if (!el.value.trim()) {
                el.classList.add("shake");
                el.addEventListener("animationend", () => el.classList.remove("shake"), { once: true });
            }
        });
        return;
    }

    closeDialog();
    showSuccess();
}

function showSuccess() {
    const toast = document.getElementById("success-toast");
    toast.classList.add("visible");
    setTimeout(() => toast.classList.remove("visible"), 3000);
}


document.addEventListener("click", e => {
    const dialog = document.getElementById("order-dialog");
    if (e.target === dialog) closeDialog();
});

buildFilterBar();
renderCards();