let ul = document.querySelector(".days")

for(let i = 1; i<= 32; i++){
    let li = document.createElement('li')
    li.textContent = i
    ul.appendChild(li)

    if(i === 13){
        li.classList.add('active')

    }
}