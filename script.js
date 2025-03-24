let index = 0
const slides = document.querySelector(".slides")

function nextSlide() {
  index = (index + 1) % 4 // 4 é o número de imagens
  slides.style.transform = `translateX(${-index * 100}%)`
}

setInterval(nextSlide, 2000) // Troca a cada 2 segundos
