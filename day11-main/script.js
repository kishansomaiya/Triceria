const insert=document.getElementById('insert')
window.addEventListener('keydown', (event) => {
  insert.innerHTML =`
  <button type="button" class="key">
    ${event.key == ' ' ? 'Space' : event.key}
    <small>event.key</small>
  </button>
  <button type="button" class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </button>
  <button type="button" class="key">
    ${event.code}
    <small>event.code</small>
  </button>
  `
} )
