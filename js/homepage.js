/*reading listening marker*/
const r = document.querySelectorAll(".box")
r.forEach((btnclick) => {
    btnclick.addEventListener("click",() =>
    {
        btnclick.textContent = "🌟";
        btnclick.style.display = "flex";
        btnclick.style.justifyContent = "center";
        btnclick.style.alignItems = "center";
        btnclick.style.fontSize = "25px";
    })
})

/*toggle*/
    const menu = document.querySelector(".fa-bars")
    const menuOpt = document.querySelector("nav ul")
    menu.addEventListener("click",()=>
    {
        menuOpt.classList.toggle("viewmenu")
    })