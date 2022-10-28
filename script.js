const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displaycountries(data));
}

const displaycountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const counDiv = document.createElement('div');
        counDiv.classList.add('country')
        counDiv.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadDetailes('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(counDiv)
    })
}

const loadDetailes = country => {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(res => res.json())
        .then(data => showDetails(data[0]));
}

const showDetails = data => {
    section = document.getElementById('details');
    console.log(data);
    section.innerHTML = `
    <div>
    <h3>Country: ${data.name}</h3>
    <h4>Capital: ${data.capital}</h4>
    <h4>Currencies: ${data.currencies[0].name}, symbol: ${data.currencies[0].symbol}</h4>
    </div>
    <img width="130px" src="${data.flag}">
    `
}