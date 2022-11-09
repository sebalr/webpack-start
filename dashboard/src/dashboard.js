import NavigationBar from './components/navigation-bar/navigation-bar';

const navigationItems = [
  {
    url: '/hello',
    title: 'Hello world'
  },
  {
    url: '/roman',
    title: 'Roman'
  }
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

import('HelloWorldApp/HelloWorldPage').then((HelloWorldPageModule) => {
  const HelloWorldPage = HelloWorldPageModule.default;
  const helloWorldPage = new HelloWorldPage();
  helloWorldPage.render();
});
import('RomanApp/RomanPage').then((RomanPageModule) => {
  const RomanPage = RomanPageModule.default;
  const romanPage = new RomanPage();
  romanPage.render();
});
