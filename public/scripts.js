const mainButton = document.querySelector('#main-button')

const getPeople = () => {
  const data = []
  const makeAPICall = (i) => {
    axios.get(`/getpeople/${i}`) // eslint-disable-line
      .then((response) => {
        console.log(response)
      })
  }
  // let counter = 1
  for (let i = 1; i < 4; i++) {
    makeAPICall(i)
  }
  return data
}

mainButton.addEventListener('click', () => {
  getPeople()
});
