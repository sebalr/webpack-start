import './heading.scss';
import _ from 'lodash';

class Heading {
  render(pageName) {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = 'New webpak title in ' + _.upperFirst(pageName);
    body.appendChild(h1);
  }
}

export default Heading;
