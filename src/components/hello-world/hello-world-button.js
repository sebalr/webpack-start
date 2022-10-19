import './hello-world-button.scss';

class HelloWorldButton {
  buttonCssClass = 'hello-world-text';
  render() {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.innerHTML = 'Hello world';
    button.classList.add('hello-world-button');
    button.onclick = () => {
      const p = document.createElement('p');
      p.innerHTML = 'Hello world';
      p.classList.add(this.buttonCssClass);
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}

export default HelloWorldButton;
