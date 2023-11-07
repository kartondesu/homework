const node_for_click_eng = document.getElementById('for_click_eng')

function find_edit_eng() {
    document.getElementsByTagName('div')[0].innerText = 'Samara`s  place of the Samara`s district'
    document.getElementsByTagName('div')[4].innerText = 'Lykinukh'
    document.getElementsByTagName('div')[5].innerText = 'Ekaterina'
    document.getElementsByTagName('div')[6].innerText = 'Alekseevna'
    document.getElementsByTagName('div')[7].innerText = 'fem'
    document.getElementsByTagName('div')[9].innerText = 'Russia'
}
node_for_click_eng.addEventListener('click', find_edit_eng)

const node_for_click_first_page = document.getElementById('for_click_rus')
function find_edit_rus() {

    document.getElementsByTagName('div')[0].innerText = 'ГУ МВД РОССИИ  по Самарской области'
    document.getElementsByTagName('div')[4].innerText = 'Лукиных'
    document.getElementsByTagName('div')[5].innerText = 'Екатерина'
    document.getElementsByTagName('div')[6].innerText = 'Алексеевна'
    document.getElementsByTagName('div')[7].innerText = 'жен.'
    document.getElementsByTagName('div')[9].innerText = 'Россия'
}
node_for_click_first_page.addEventListener('click', find_edit_rus)