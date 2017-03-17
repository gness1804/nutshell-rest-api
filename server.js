const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);

app.locals.title = 'People Search'

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/index.html'));
});

const hitAPI = (number) => {
  return axios.get(`http://join.nutshell.com/people/${number}/`)
}

app.get('/getpeople/:i', (request, response) => {
  hitAPI(request.params.i).then((data) => {
    response.send(data.data)
  })
});

app.listen(app.get('port'), () => {
    console.log('Server running on port 3000.'); // eslint-disable-line
});
