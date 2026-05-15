// ===============================
// SportShop JavaScript
// ===============================

// Знаходимо всі кнопки "Купити"
const buyButtons = document.querySelectorAll(".buy-btn");
const items = [
    {
        name: "потжнокросівки",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRF3bcn8mmGwintvYTt6TfDl0xd549TVdkZ9GVERBjt4S7ItdE2I8UtjnXNHwA1Jly940sPIU7XA-bHiwIsGcBVLwyf5en28piQQt1mcHThMBAddzyQkiysVjoV5Os2tR5y4Rfnc8ZZZIE&usqp=CAc",
        price: "67 долларів"
    }
]
// Лічильник товарів у кошику
let cartCount = 0;

// Перебираємо всі кнопки
buyButtons.forEach((button) => {

    // Додаємо подію кліку
    button.addEventListener("click", () => {

        // Знаходимо карточку товару
        const card = button.parentElement;

        // Назва товару
        const productName =
            card.querySelector("h3").innerText;

        // Ціна товару
        const productPrice =
            card.querySelector("p").innerText;

        // Збільшуємо кількість товарів
        cartCount++;

        // Повідомлення
        alert(
            "🛒 Товар додано в кошик!\n\n" +
            "Товар: " + productName + "\n" +
            "Ціна: " + productPrice + "\n\n" +
            "Товарів у кошику: " + cartCount
        );

        // Зміна кнопки після натискання
        button.innerText = "✓ Додано";
        button.style.backgroundColor = "green";

    });

});