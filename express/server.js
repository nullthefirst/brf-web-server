const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to my simple HTTP server in Node.js',
    data: {
      route: '/',
      routeName: 'home',
    },
  });
});

app.get('/about', (req, res) => {
  res.status(200).json({
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
  });
});

const PORT = process.env.PORT || 5020;

app.use((req, res) => {
  res.status(404).send("Route not defined. Please vist the home ('/') or about ('/about') page.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
