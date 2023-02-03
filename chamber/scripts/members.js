const memberList = document.getElementById("memberList");

fetch("data/members.json")
  .then(response => response.json())
  .then(data => {
    let companies = data.companies;
    for (let company of companies) {
      let li = document.createElement("li");

      let h2 = document.createElement("h2");
      h2.textContent = company.name;
      li.appendChild(h2);

      let address = document.createElement("p");
      address.textContent = `Address: ${company.address}`;
      li.appendChild(address);

      let phoneNumber = document.createElement("p");
      phoneNumber.textContent = `Phone Number: ${company.phonenumber}`;
      li.appendChild(phoneNumber);

      let website = document.createElement("p");
      let websiteLink = document.createElement("a");
      websiteLink.href = company.websiteurl;
      websiteLink.textContent = company.websiteurl;
      website.appendChild(websiteLink);
      li.appendChild(website);

      let img = document.createElement("img");
      img.src = company.logourl;
      img.alt = company.name;
      img.width = 150;
      img.height = 150;
      li.appendChild(img);

      let membershipLevel = document.createElement("p");
      membershipLevel.textContent = `Membership Level: ${company.membershiplevel}`;
      li.appendChild(membershipLevel);

      memberList.appendChild(li);
    }
  });

