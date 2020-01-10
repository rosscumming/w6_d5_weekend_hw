document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector('#new-form')
form.addEventListener('submit', handleFormSubmit)

const deleteButton = document.querySelector('.delete-btn')
deleteButton.addEventListener('click', handleDeleteButtonOnClick)

});


const handleFormSubmit = (event) => {
  event.preventDefault()

  const newCountryItem = document.createElement('li')
  newCountryItem.textContent = `Country: ${event.target.country.value}`

  const newContinentItem = document.createElement('li')
  newContinentItem.textContent = `Contitent: ${event.target.continent.value}`

  const newDateOfTravelItem = document.createElement('li')
  newDateOfTravelItem.textContent = `Date of travel: ${event.target.dateOfTravel.value}`

  const list = document.querySelector('#trip-list')
  list.appendChild(newCountryItem)
  list.appendChild(newContinentItem)
  list.appendChild(newDateOfTravelItem)

  event.target.reset()
}

const handleDeleteButtonOnClick = () => {
  const clearList = document.querySelector('#trip-list')
  clearList.innerHTML = "";
}
