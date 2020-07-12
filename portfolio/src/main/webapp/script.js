function getMessage() {
  fetch('/data').then(response => response.json()).then((comments) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    const statsListElement = document.getElementById('comment-container');
    statsListElement.innerHTML = '';
    for (var i=0;i<comments.length;i++){
        statsListElement.appendChild(
            createListElement('comment: ' + comments[i]));
    }
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}