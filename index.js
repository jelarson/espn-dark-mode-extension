function download() {
  const filename = 'jobMatches'
  chrome.storage.sync.get('jobInfo', (data) => {
    const dataArr = [...data.jobInfo.list]
    const file = new Blob([...dataArr], { type: 'text/plain' })
    const a = document.createElement('a')
    const url = URL.createObjectURL(file)
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    setTimeout(function () {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }, 0)
    console.log('I am downloading now!')
  })
}

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
