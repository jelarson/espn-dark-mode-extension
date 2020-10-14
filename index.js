function dark() {
  chrome.storage.sync.set({
    running: true,
  })
}

function light() {
  chrome.storage.sync.set({
    running: false,
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const darkButton = document.getElementById('darkMode')
  darkButton.addEventListener('click', dark)

  const lightButton = document.getElementById('lightMode')
  lightButton.addEventListener('click', light)
})
