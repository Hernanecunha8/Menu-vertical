let abrirmenu = document.querySelector(".abrir-menu")
let fecharmenu = document.querySelector(".fechar-menu")
let conteudo = document.querySelector(".conteudo")
abrirmenu.addEventListener("click", () => {
    let menu = document.getElementById("menu")
    menu.style.width = "200px"
    conteudo.style.marginLeft = "202px"
})
fecharmenu.addEventListener("click", () => {
    menu.style.width = "0px"

    conteudo.style.marginLeft = "0px"
})