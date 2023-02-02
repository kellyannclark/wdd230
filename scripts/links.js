const baseURL = "https://github.com/keljt2003/keljt2003.github.io/";

fetch("links.json")
  .then(response => response.json())
  .then(data => {
    const linkList = document.getElementById("linkList");
    const links = data;
    

    for (let week in links) {
      links[week].forEach(link => {
      for (let itemNum in link) {
        for (let item in link[itemNum]) {
          const weekLi = document.createElement("li");
          const a = document.createElement("a");
          a.href = baseURL + link[itemNum][item];
          a.innerText = link[itemNum][item];
          weekLi.appendChild(a);
          linkList.appendChild(weekLi);
          
      }}});
      
    }
  });
  
