window.addEventListener("DOMContentLoaded", async() => {
    const productsSection = document.getElementById("restaurant-products-section")
    const phones = await (await fetch("/data/dishes.json")).json()
    for(const el of phones){
        const figure = document.createElement("figure")
        const image = document.createElement("img")
        image.setAttribute("src", el.url)
        figure.appendChild(image)
        productsSection.appendChild(figure)
    }

})