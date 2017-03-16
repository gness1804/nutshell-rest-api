const mainButton = document.querySelector('#main-button')

const getPeople = () => {
  const data = []
  const makeAPICall = (i) => {
      axios.get(`/getpeople/:i`).then((response) => {console.log(response)})
  }
  let counter = 1
  for (var i = 0; i < 3; i++) {
    makeAPICall(i)
  }
  return data
}

mainButton.addEventListener('click', () => {
  getPeople()
});
