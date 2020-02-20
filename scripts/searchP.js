


let searchResultsP = document.querySelector(".searchP");


searchResultsP.addEventListener("submit", e => {
  e.preventDefault();
  const pat = document.getElementById("pat").value;
  console.log("pat", pat)
  let tyy = sessionStorage.setItem(
    "pat",
    pat
  );


  location.href = `./patient-search.html?${pat}`;

});


