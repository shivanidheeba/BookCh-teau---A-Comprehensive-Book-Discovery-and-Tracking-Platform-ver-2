const plus = document.querySelectorAll(".fa-square-plus")
const minus = document.querySelectorAll(".fa-square-minus")
const count = document.querySelectorAll(".count")
const clear = document.querySelectorAll(".fa-trash")

let quan = [0,0,0,0]

plus.forEach((plus,index) =>
{
    plus.addEventListener("click", ()=>
    {
        quan[index]++;
        count[index].textContent = quan[index];
    })
})

minus.forEach((minus,index) =>
{
    minus.addEventListener("click", ()=>
    {
        if(quan[index] > 0)
        {
            quan[index]--;
            count[index].textContent = quan[index];
        }
    })
})

clear.forEach((clear,index) =>
{
    clear.addEventListener("click", ()=>
    {
        quan[index] = 0;
        count[index].textContent = quan[index];
    })
})

const amount = document.querySelectorAll(".amount")
let offer = document.querySelector(".offer")

function total()
{
    let tot = 0

    amount.forEach((price,index)=>
        {
        let text = price.textContent       
        let number = text.replace("₹","")  
        let value = Number(number)         

        tot = tot +  value * quan[index]
    })

    if (tot<600)
    {
    offer.textContent = "Total Amount: ₹" + tot
    }
    else
    {
    tot = tot - (tot*0.05)
    offer.textContent = "Hooray! You have unlocked 5% discount. Total Amount: ₹" + tot
    }

}
