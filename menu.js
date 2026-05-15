const items = [
    {
        name: "потжнокросівки",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRF3bcn8mmGwintvYTt6TfDl0xd549TVdkZ9GVERBjt4S7ItdE2I8UtjnXNHwA1Jly940sPIU7XA-bHiwIsGcBVLwyf5en28piQQt1mcHThMBAddzyQkiysVjoV5Os2tR5y4Rfnc8ZZZIE&usqp=CAc",
        price: "67 долларів"
    },
    {
        name: "просто кросівки",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRF3bcn8mmGwintvYTt6TfDl0xd549TVdkZ9GVERBjt4S7ItdE2I8UtjnXNHwA1Jly940sPIU7XA-bHiwIsGcBVLwyf5en28piQQt1mcHThMBAddzyQkiysVjoV5Os2tR5y4Rfnc8ZZZIE&usqp=CAc",
        price: "90 долларів"
    },
];

const shop = document.getElementById("shop");

items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="card-body">
            <h2>${item.name}</h2>
            <div class="price">${item.price}</div>
            <button class="buy-btn">Купити</button>
        </div>
    `;

    shop.appendChild(card);
});