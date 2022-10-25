import HelloWorldButton from './components/hello-world/hello-world-button';
import Heading from './components/heading/heading';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render('hw');
helloWorldButton.render();
console.log(process.env.NODE_ENV);
