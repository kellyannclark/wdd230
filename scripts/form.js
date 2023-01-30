let rating = document.querySelector("#rating");
let range = document.querySelector("input[type='range']");

range.addEventListener("input", function() {
  rating.innerHTML = range.value;
});

const username = document.querySelector('input[name="UserName"]');
username.pattern = "(?=.*[^a-zA-Z0-9]).{5,12}";
username.title = "Username must contain at least one non-alphanumeric character and have a length between 5 and 12 characters.";

document.querySelector("form").addEventListener("submit", function(event) {
    const formData = new FormData(event.target);
    const table = document.createElement("table");
    for (const [key, value] of formData) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.innerHTML = key;
      cell2.innerHTML = value;
      
    }
    document.querySelector("section").appendChild(table);
    
  });
  