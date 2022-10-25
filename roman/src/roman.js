import Heading from './components/heading/heading';
import RomanImg from './components/roman-img/roman-img';

const heading = new Heading();
const romanImg = new RomanImg();
heading.render('rm');
romanImg.render();
import('HiApp/HiButton').then((HiButton) => {
  const HelloWorldButton = HiButton.default;
  const helloWorldButton = new HelloWorldButton();
  helloWorldButton.render();
});
