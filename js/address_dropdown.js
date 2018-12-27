
//Displaying Countries onload

const countrySelect = document.getElementById('country');
const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');
const pincode = document.getElementById("pincode");

function addOptions() {
    var jsonArray = countries;
    let countryOptionsHTML = `<option value="">Select Country</option>`;
    countryOptionsHTML += jsonArray.map(country => `<option value="${country.name}--${country.id}" >${country.name}</option>`).join("");
    countrySelect.innerHTML = countryOptionsHTML;
}

countrySelect.addEventListener("change", function () {
    const [countryName, countryId] = countrySelect.value.split("--");
    console.log(countryName, countryId);
    citySelect.innerHTML = `<option value="">Select City</option>`;
    pincode.value = "";
    let stateOptionsHTML = `<option value="">Select State</option>`;
    stateOptionsHTML += states.filter(state => state.country_id === countryId).map(state => `<option value="${state.name}--${state.id}" >${state.name}</option>`).join("");
    stateSelect.innerHTML = stateOptionsHTML;
});

stateSelect.addEventListener("change", function () {
    const [stateName, stateId] = stateSelect.value.split("--");
    console.log(stateName, stateId);
    pincode.value = "";
    let cityOptionsHTML = `<option value="">Select City</option>`;
    cityOptionsHTML += cities.filter(city => city.state_id === stateId).map(city => `<option value="${city.name}--${city.id}" >${city.name}</option>`).join("");
    citySelect.innerHTML = cityOptionsHTML;
})

document.addEventListener("DOMContentLoaded",()=>{
    addOptions();
})