const accordion = document.getElementsByClassName('container-accordion')

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// Captura o elemento do iframe
const meuIframe = document.getElementById('meuIframe')

// Adiciona um ouvinte de evento para pausar o vídeo quando carregado
meuIframe.addEventListener('load', function () {
  meuIframe.contentWindow.postMessage(
    '{"event":"command","func":"pauseVideo","args":""}',
    '*',
  )
})
