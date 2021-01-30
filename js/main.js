const tabs = [...document.querySelectorAll('.tab')]
const tabby = document.querySelector('.tabby')
const tabContents = [...tabby.querySelectorAll('.tab-content')]
const tabsContainer = tabby.querySelector('.tabs')

const handleTabs = e => {
  const tab = e.target
  const target = tab.dataset.theme
  const tabContent = tabby.querySelector('#' + target)
  tabs.forEach(item => item.classList.remove('is-selected'))
  tab.classList.add('is-selected')
  tabContents.forEach(content => content.classList.remove('is-selected'))
  tabContent.classList.add('is-selected')
}

tabsContainer.addEventListener('click', handleTabs)

