document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#new-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('.delete-btn');
  deleteButton.addEventListener('click', handleDeleteButtonOnClick);

});


const handleFormSubmit = (event) => {
  event.preventDefault();

  const infoList = document.querySelector('#trip-list')
  const newList = document.createElement('li')
  newList.id = 'itemContainer';

  const newCountryItem = document.createElement('p');
  newCountryItem.className = 'countryItem itemStyle';
  newCountryItem.textContent = event.target.country.value;

  const newContinentItem = document.createElement('p');
  newContinentItem.className = 'continentItem itemStyle';
  newContinentItem.textContent = event.target.continent.value;

  const newDateOfTravelItem = document.createElement('p');
  newDateOfTravelItem.className = 'dataOfTravelItem itemStyle';
  newDateOfTravelItem.textContent = event.target.dateOfTravel.value;

  const newPaymentStatusItem = document.createElement('p');
  newPaymentStatusItem.className = 'paymentStatusItem itemStyle';
  newPaymentStatusItem.textContent = event.target.status.value;


  newList.appendChild(newCountryItem);
  newList.appendChild(newContinentItem);
  newList.appendChild(newDateOfTravelItem);
  newList.appendChild(newPaymentStatusItem);
  infoList.appendChild(newList);

  event.target.reset();
};

const handleDeleteButtonOnClick = () => {
  const clearList = document.querySelector('#trip-list');
  clearList.innerHTML = "";
};