const menu = document.querySelector(".fa-bars")
const menuOpt = document.querySelector("nav ul")
    menu.addEventListener("click",()=>
    {
        menuOpt.classList.toggle("viewmenu")
    })

/*just archiving*/
const add = document.querySelectorAll(".add")
add.forEach((btn) => 
    {
    btn.addEventListener("click", () => 
        {

        if(btn.classList.contains("add"))
            {
            btn.textContent = "Archived"
            btn.classList.remove("add")
            btn.classList.add("archived")
        }
        else
            {
            btn.textContent = "Add"
            btn.classList.remove("archived")
            btn.classList.add("add")
        }

    })
})

/*completed the task*/
const forms = document.querySelectorAll(".archive-form")

forms.forEach((form)=>{

const radios = form.querySelectorAll("input[type='radio']")
const btn = form.querySelector(".add")

radios.forEach((radio)=>
    {
radio.addEventListener("click", ()=>
    {
if(radio.value === "completed" && radio.checked)
{
btn.textContent = "Archived"
btn.classList.add("completearchive")
}
else
{
btn.textContent = "Add"
btn.classList.remove("completearchive")
}
})
})
})

/*remove class and reset*/
const form = document.querySelector("form")

form.addEventListener("reset", () => {

    const buttons = document.querySelectorAll("button")

    buttons.forEach((btn) => {

        btn.classList.remove("completearchive")
        btn.classList.add("add")
        btn.textContent = "Add"

    })

})