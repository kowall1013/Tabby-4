const tabs = Array.from(document.querySelectorAll('.tab'))
const tabby = document.querySelector('.tabby')
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    const target = tab.dataset.theme
    const tabContent = tabby.querySelector('#' + target)
    tabs.forEach(item => item.classList.remove('is-selected'))
    tab.classList.add('is-selected')
    tabContents.forEach(content => content.classList.remove('is-selected'))
    tabContent.classList.add('is-selected')

  } )
})
