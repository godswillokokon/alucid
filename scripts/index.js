const accountDetails = document.querySelector(".user-name");

let UserNamee = sessionStorage.getItem("name");

let UserRolee = sessionStorage.getItem("role");

console.log(UserRolee, "role");

if (UserRolee == 'doctor' || UserRolee == 'Dr') {
  const html = `
         <strong>Dr. ${UserNamee}</strong>
      `;

  accountDetails.innerHTML = html;
} else {
  const html = `
         <strong>Pharm. ${UserNamee}</strong>
      `;

  accountDetails.innerHTML = html;
}

