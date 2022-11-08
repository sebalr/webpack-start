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
