/*function rated()
{
    let r = document.getElementById("heart")
    if (r)
    {
        r.textContent = "❤️"
    }
}*/

const r = document.querySelectorAll(".fa-heart-circle-plus")
r.forEach((h) =>{
    h.addEventListener("click", ()=>{
        h.textContent = "❤️"
        h.style.fontSize = "30px"
        h.classList.remove("fa-heart-circle-plus")
    })
})

const menu = document.querySelector(".fa-bars")
const menuOpt = document.querySelector("nav ul")
    menu.addEventListener("click",()=>
    {
        menuOpt.classList.toggle("viewmenu")
    })

    