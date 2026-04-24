<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<title>Sport Store</title>

<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: black;
        color: white;
    }

    .menu {
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 100vh;
        background: #000;
        border-right: 2px solid white;
    }

    .menu h1 {
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid white;
    }

    .menu-item {
        padding: 15px 20px;
        cursor: pointer;
        border-bottom: 1px solid #333;
        transition: 0.3s;
    }

    .menu-item:hover {
        background: white;
        color: black;
    }

    .submenu {
        display: none;
        background: #111;
    }

    .submenu div {
        padding: 10px 30px;
        font-size: 14px;
    }

    .submenu div:hover {
        background: white;
        color: black;
    }
</style>
</head>

<body>

<div class="menu" id="menu"></div>

<script>
const menuData = [
    {
        title: "ГОЛОВНА",
        items: ["Новинки", "Акції", "Хіти продажів"]
    },
    {
        title: "ОДЯГ",
        items: ["Футболки", "Худі", "Штани", "Куртки"]
    },
    {
        title: "ВЗУТТЯ",
        items: ["Бігові", "Тренувальні", "Повсякденні"]
    },
    {
        title: "АКСЕСУАРИ",
        items: ["Рюкзаки", "Кепки", "Пляшки"]
    },
    {
        title: "СПОРТ",
        items: ["Фітнес", "Біг", "Футбол", "Баскетбол"]
    }
];

const menu = document.getElementById("menu");

// створення меню
menuData.forEach(section => {
    const item = document.createElement("div");
    item.classList.add("menu-item");
    item.textContent = section.title;

    const submenu = document.createElement("div");
    submenu.classList.add("submenu");

    section.items.forEach(sub => {
        const subItem = document.createElement("div");
        subItem.textContent = sub;
        submenu.appendChild(subItem);
    });

    item.addEventListener("click", () => {
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });

    menu.appendChild(item);
    menu.appendChild(submenu);
});
</script>

</body>
</html>