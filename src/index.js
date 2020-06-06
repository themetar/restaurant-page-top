import initialContent from "./initial-content";

initialContent();

/* Tabs */

const tabs_div = document.createElement('div');
tabs_div.setAttribute('id', 'tabs');
for (let tab_name of ['menu', 'contact']) {
  let radio = document.createElement('input');
  radio.setAttribute('type', 'radio');
  radio.setAttribute('id', tab_name);
  radio.setAttribute('value', tab_name);
  radio.setAttribute('name', 'tabs');
  radio.addEventListener('change', tabHandler);

  let label = document.createElement('label');
  label.textContent = tab_name;
  label.setAttribute('for', tab_name);

  tabs_div.appendChild(radio);
  tabs_div.appendChild(label);  
}
document.querySelector('#content').appendChild(tabs_div);

function tabHandler(event) { console.log(this.value); }

tabs_div.children[0].setAttribute('checked', 'true');
