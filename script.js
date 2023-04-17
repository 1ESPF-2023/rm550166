//recuperando o botao com o getElementById
const button = document.getElementById("btn-1");

//recuperar um item especifico usando 
//funcao querySelector(parametro)

// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

//recuperar uma lista de elementos com a funçao querrySelectorAll

const seletores = document.querySelectorAll("li")
seletores.forEach((item)=>{
    
    if (item.textContent == "item-15"){
    let meuItem = item;
    console.log(`itens selecionados : ${item.textContent}`);
    meuItem.textContent = "Ta dominado!"
    }
})

//settimeOut
//setInterval
//random
//math.Cell
//math.random
//math.floor
