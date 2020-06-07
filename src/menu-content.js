const menu = [
  '<h2>Menu</h2>',
  '<h3>Appetizers</h3>',
  '<ol>',
    '<li>Lorem</li>',
    '<li>Ipsum</li>',
    '<li>Lorem</li>',
  '</ol>',
  '<h3>First Courses</h3>',
  '<ol>',
    '<li>Lorem</li>',
    '<li>Ipsum</li>',
    '<li>Lorem</li>',
    '<li>Ipsum</li>',
    '<li>Lorem</li>',
    '<li>Ipsum</li>',
  '</ol>',
  '<h3>Main Courses</h3>',
  '<ol>',
    '<li>Lorem</li>',
    '<li>Ipsum</li>',
    '<li>Lorem</li>',
    '<li>Ipsum</li>',
    '<li>Lorem</li>',
  '</ol>',
  '<h3>Desserts</h3>',
  '<ol>',
    '<li>Lorem</li>',
    '<li>Ipsum</li>',
    '<li>Lorem</li>',
    '<li>Ipsum</li>',
  '</ol>'
].join('');

export default function () {
  const tab_content = document.createElement('div');
  tab_content.setAttribute('id', 'tab-content');
  tab_content.classList.add('menu');

  tab_content.innerHTML = menu;

  document.querySelector('#content').appendChild(tab_content);
}