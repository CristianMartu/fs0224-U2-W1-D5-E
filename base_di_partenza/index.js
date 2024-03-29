window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    document.getElementById('btn').classList.add('btn-colored')
    document.querySelector('menu').classList.add('colored')
  } else {
    document.getElementById('btn').classList.remove('btn-colored')
    document.querySelector('menu').classList.remove('colored')
  }
})

const pos = document.getElementById('svg')
pos.innerHTML = svg

const allM = document.querySelectorAll('svg > g > g > g')

const animationM = () => {
  allM.forEach((M) => {
    setTimeout(() => {
      M.style.opacity = Math.round(Math.random())
    }, Math.round(Math.random() * 10000))
  })
}

document.addEventListener('DOMContentLoaded', () => {
  animationM()
  setInterval(animationM, 10000)
})
