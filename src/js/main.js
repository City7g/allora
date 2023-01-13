import development from './module/development.js'

development()

const banner = document.querySelector('.banner')
const bannerClose = document.querySelector('.banner__close')

bannerClose.addEventListener('click', () => {
  document.body.style.transition = '0.4s all ease'
  document.body.style.marginTop = `-${banner.offsetHeight}px`

  setTimeout(() => {
    banner.style.display = 'none'
    document.body.style = ''
  }, 400);
})