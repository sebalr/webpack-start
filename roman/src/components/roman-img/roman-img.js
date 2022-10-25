import './roman-img.scss';
import Roman from './roman.jfif';

class RomanImg {
  render() {
    const img = document.createElement('img');
    const body = document.querySelector('body');
    img.src = Roman;
    img.alt = 'Roman img';
    body.appendChild(img);
  }
}

export default RomanImg;
