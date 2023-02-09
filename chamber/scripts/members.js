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
        <h2>${company.name}</h2>
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

const membersContainer = document.querySelector("#members");

document.querySelector("#grid-view").addEventListener("click", () => {
  membersContainer.classList.remove("list-view");
  membersContainer.classList.add("grid-view");
});

document.querySelector("#list-view").addEventListener("click", () => {
  membersContainer.classList.remove("grid-view");
  membersContainer.classList.add("list-view");
});
