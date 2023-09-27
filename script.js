
const node_for_click = document.getElementById("for_click")

function find_edit(){
    const item1  = document.getElementsByTagName('div')[4]
    console.log(item1.innerText)
    item1.innerText = 'Lukinykh'

    const item2  = document.getElementsByTagName('div')[5]
    console.log(item2.innerText)
    item2.innerText = 'Ekaterina'

    const item3  = document.getElementsByTagName('div')[6]
    console.log(item3.innerText)
    item3.innerText = 'Alekseevna'

    const item4  = document.getElementsByTagName('div')[8]
    console.log(item4.innerText)
    item4.innerText = 'XXVII.VIII.MMIV'
}

node_for_click.addEventListener("click",find_edit)