import Heading from '../heading/heading';
import RomanImg from '../roman-img/roman-img';

class RomanPage {
  render() {
    const heading = new Heading();
    const romanImg = new RomanImg();
    heading.render('Roman love');
    romanImg.render();
  }
}

export default RomanPage;
