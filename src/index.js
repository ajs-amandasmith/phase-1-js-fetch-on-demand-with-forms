const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // event.target.children[1].value; -- One way to get the value we need from the event object
    const input = document.querySelector('input#searchByID'); /* another way to get the value from the event object */

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');

      title.innerText = data.title;
      summary.innerText = data.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);