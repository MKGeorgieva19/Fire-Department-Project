const toggleButton = document.getElementsByClassName('button')[0]
const navbarLinks = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})