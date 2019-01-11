
//Displaying Countries onload

const countrySelect = document.getElementById('country');
const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');
const pincode = document.getElementById("pincode");

function addOptions() {
    var jsonArray = countries;
    let countryOptionsHTML = `<option value="">Select Country</option>`;
    countryOptionsHTML += jsonArray.map(country => `<option data-id="${country.id}" value="${country.name}" >${country.name}</option>`).join("");
    countrySelect.innerHTML = countryOptionsHTML;
}

countrySelect.addEventListener("change",getStates);

function getStates(){
    // const [countryName, countryId] = countrySelect.value.split("--");
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex];
    const countryName = selectedCountry.value;
    const countryId = selectedCountry.dataset.id;
    console.log(countryName, countryId);
    citySelect.innerHTML = `<option value="">Select City</option>`;
    pincode.value = "";
    let stateOptionsHTML = `<option value="">Select State</option>`;
    stateOptionsHTML += states.filter(state => state.country_id === countryId).map(state => `<option data-id="${state.id}" value="${state.name}" >${state.name}</option>`).join("");
    stateSelect.innerHTML = stateOptionsHTML;
}

stateSelect.addEventListener("change", getCities);

function getCities(){
    // const [stateName, stateId] = stateSelect.value.split("--");
    const selectedState = stateSelect.options[stateSelect.selectedIndex];
    const stateName = selectedState.value;
    const stateId = selectedState.dataset.id;
    console.log(stateName, stateId);
    pincode.value = "";
    let cityOptionsHTML = `<option value="">Select City</option>`;
    cityOptionsHTML += cities.filter(city => city.state_id === stateId).map(city => `<option value="${city.name}" >${city.name}</option>`).join("");
    citySelect.innerHTML = cityOptionsHTML;
}

document.addEventListener("DOMContentLoaded",()=>{
    addOptions();
})