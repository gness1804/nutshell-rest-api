const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const axios = require('axios');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);

app.locals.title = 'People Search'

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/index.html'));
});

const hitAPI = () => {
  return axios.get('http://join.nutshell.com/people/1/')
}

app.get('/getpeople/:i', (request, response) => {
  hitAPI().then((data) => {
    response.send(data.data)
  })
});

app.listen(app.get('port'), () => {
    console.log('Server running on port 3000.');
});
