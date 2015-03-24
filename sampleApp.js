// define routes
page('/', function(req) {
  console.log('default route loaded');
});
page('/link1', function(req) {
  console.log('link 1 loaded');
});
page('/link2', function(req) {
  console.log('link 2 loaded');
});
page('/link3', function(req) {
  console.log('link 3 loaded');
});

// activate router
page();
page('/'); // load default route