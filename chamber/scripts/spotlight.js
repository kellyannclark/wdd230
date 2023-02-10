const spotLighted = document.getElementById("spotLighted");

fetch("data/spotlight.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    let companies = data.companies;
    for (let company of companies) {
      let li = document.createElement("li");
      li.innerHTML = `
        <h3>${company.name}</h3>
        <p>${company.phonenumber}</p>
        <p>${company.address}</p>
        <p><img src="${company.logourl}" alt=${company.name}></p>
      `;
      spotLighted.appendChild(li);
    }
  })
  