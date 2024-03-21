window.addEventListener("DOMContentLoaded", async() => {
    const productsSection = document.getElementById("art-products-section")
    const artworks = await (await fetch("/data/artworks.json")).json()
    for(const el of artworks){
        const article = document.createElement("article")
        article.classList.add(".art-article")
        const figure = document.createElement("figure")
        const image = document.createElement("img")
        image.setAttribute("src", el.url)
        figure.appendChild(image)
        article.appendChild(figure)
        productsSection.appendChild(article)
    }

})