function colorChanger() {
  let color = '#edeef0'
  chrome.storage.sync.get('running', (data) => {
    console.log('hello', data.running)
    if (data.running === true) {
      color = 'black'
    }
    const espnBack = [
      document.getElementById('main-container'),
      document.getElementById('pane-main'),
      ...document.querySelectorAll('.main-content'),
      document.getElementsByClassName('article')[0],
    ]
    espnBack.forEach((el) => {
      if (el) {
        el.style.background = color
      }
    })
  })
}

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.running) {
    colorChanger()
  }
})
