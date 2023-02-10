const memberList = document.getElementById("memberList");

fetch("data/members.json")
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
        <h4>${company.name}</h4>
        <p>Address: ${company.address}</p>
        <p>Phone Number: ${company.phonenumber}</p>
        <p>Website URL: <a href="${company.websiteurl}">${company.websiteurl}</a></p>
        <p><img src="${company.logourl}" alt=${company.name}></p>
        <p>Membership Level: ${company.membershiplevel}</p>
      `;
      memberList.appendChild(li);
    }
  })
  .catch(error => console.error(error));


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
