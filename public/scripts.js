const mainButton = document.querySelector('#main-button')
const output = []

const pushObjectsIntoMasterArray = (data) => {
  if (typeof data !== 'undefined') {
    data.forEach((obj) => {
      output.push(obj)
    });
  }
}

const filterOutNullEmails = (data) => {
  return data.filter((obj) => {
    return obj.email !== null
  })
}

const appendPeopleToDOM = (people) => {
  return people
}

const findFiveMostRecentPeople = (data) => {
  const filteredData = filterOutNullEmails(data)
  const dataWithRawDates = filteredData.map((obj) => {
    return Object.assign(obj, { rawDate: new Date(obj.signup_date).getTime() })
  });
  const fiveNewestPeople = dataWithRawDates.sort((a, b) => {
    return b.rawDate - a.rawDate
  }).slice(0, 5)
  appendPeopleToDOM(fiveNewestPeople)
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
