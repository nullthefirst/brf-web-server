const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Welcome to my simple HTTP server in Node.js',
        data: {
          route: '/',
          routeName: 'home',
        },
      })
    );
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: {
          name: 'Usheninte Dangana',
          profession: 'Software Engineer',
          interests: 'Innovation - Strategy - Software',
          bio: 'On a mission to execute strategy projects to support industrialisation in Africa.',
        },
        data: {
          route: '/about',
          routeName: 'about',
        },
      })
    );
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("Route not defined. Please vist the home ('/') or about ('/about') page.");
  }
});

const PORT = process.env.PORT || 5020;

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
