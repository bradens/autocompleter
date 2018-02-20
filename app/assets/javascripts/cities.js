function handleKeydown (evt) {
  fetch(`/cities?query=${this.value}`)
    .then(res => res.json())
    .then(json => {
      listHtml = json.map(city => `<li>${city}</li>`).join('')
      document.getElementById('content').innerHTML = listHtml
    })
}

window.addEventListener('load', function () {
  document.getElementById('autocompleter').addEventListener('keydown', handleKeydown)
})
