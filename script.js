const modalOverlay = document.querySelector('.modal-overlay')
const cursos = document.querySelectorAll('.card')

for(let card of cursos) {
  card.addEventListener("click", function(){
    const linkId = card.getAttribute("id")
    modalOverlay.classList.add('active')    
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${linkId}`
  })
}


document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".expandir-modal").addEventListener("click", function(){
  modalOverlay.classList.toggle("activeGG")
  // modalOverlay.querySelector("iframe").src = ""
})
