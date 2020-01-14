


let searchResults = document.querySelector(".search");


searchResults.addEventListener("submit", e => {
  e.preventDefault();
  const target = document.getElementById("target").value;
  console.log("target", target)
  let sessionTarget = sessionStorage.setItem(
    "target",
    target
  );


  location.href = `./patient-profile-pham.html?${target}`;

});


