const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/users/signin', (req, res) => {
  res.render('signin.pug', {
    title: 'Touiteur - Accueil'
  });
});

app.get('/touites', (req, res) => {
  res.render('index.pug', {
    title: 'Touiteur - Accueil'
  });
});

app.get('/apropos', (req, res) => {
  res.render('about.pug', {
    title: 'Touiteur - A propos'
  });
});

app.listen(1234, () => {
  console.log("Utilisation du port 1234");
});