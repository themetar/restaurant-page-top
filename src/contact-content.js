const contact = "<p>Dine with us at Some Street 234 in Some City, Some State</p>";

function contactContent () {
  const tab_content = document.createElement('div');
  tab_content.setAttribute('id', 'tab-content');

  tab_content.innerHTML = contact;

  document.querySelector('#content').appendChild(tab_content);
}

export {contactContent};