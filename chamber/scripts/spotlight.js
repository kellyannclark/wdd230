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
      <p><img src="${company.logourl}" alt=${company.name}></p>
        <h4>${company.name}</h4>
        <p>${company.phonenumber}</p>
        <p>${company.address}</p>
        
      `;
      spotLighted.appendChild(li);
    }
  })
  