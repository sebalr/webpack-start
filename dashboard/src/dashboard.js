const url = window.location.pathname;

console.log(url, url === '/hello');
if (url === '/hello') {
  import('HelloWorldApp/HelloWorldPage').then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === '/roman') {
  import('RomanApp/RomanPage').then((RomanPageModule) => {
    const RomanPage = RomanPageModule.default;
    const romanPage = new RomanPage();
    romanPage.render();
  });
}
