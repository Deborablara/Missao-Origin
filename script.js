/* Abre e fecha o menu quando clicar no ícone */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Esconder menu quando clicar em algum item da lista de menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pág quando der scroll */

const header = document.querySelector('#header')
const navheight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navheight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
