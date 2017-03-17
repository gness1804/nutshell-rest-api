const mainButton = document.querySelector('#main-button')
const output = []

const pushObjectsIntoMasterArray = (data) => {
  if (typeof data !== 'undefined') {
    data.forEach((obj) => {
      output.push(obj)
    });
  }
}

const findFiveMostRecentPeople = (data) => {
  return data
}

const getPeople = () => {
  const makeAPICall = (i) => {
    axios.get(`/getpeople/${i}`) // eslint-disable-line
      .then((response) => {
        if (response.data.length) {
          return response.data
        }
      })
      .then((data) => { pushObjectsIntoMasterArray(data) })
      .then(() => { findFiveMostRecentPeople(output) })
  }
  for (let i = 1; i < 50; i++) {
    makeAPICall(i)
  }
}

mainButton.addEventListener('click', () => {
  getPeople()
});
