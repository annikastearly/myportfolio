for (let section of document.querySelectorAll('.grid > *')) {
  section.addEventListener(
    'click',
    function (event) {
      let section = event.target
      section.classList.toggle('magic');
    }
  )
}