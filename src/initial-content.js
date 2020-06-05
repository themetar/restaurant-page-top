function initialContent() {
  const container = document.querySelector('#content');

  const header = document.createElement('header');
  const h1 = header.appendChild(document.createElement('h1'));
  h1.textContent = "La Belle Fourchette";
  const p = header.appendChild(document.createElement('p'));
  p.textContent = "You're always welcome to La Belle Fourchete";

  container.appendChild(header);
}

export default initialContent;