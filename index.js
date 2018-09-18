let value = 500
numberSpan = document.getElementById('number')
const numberDec = setInterval(() => {
  if (value === 0) {
    clearInterval(numberDec)
    setTimeout(() => {
      document.getElementsByTagName('body')[0].innerHTML = "Well, I don't give a f**k! :)"
    }, 1000)
  }
  numberSpan.textContent = value--
}, 1)
