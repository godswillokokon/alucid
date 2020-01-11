const accountDetails = document.querySelector(".user-name");

let UserName = sessionStorage.getItem("name");

let UserRole = sessionStorage.getItem("role");
console.log(UserRole, "role");

if (UserRole == 'doctor' || UserRole == 'Dr') {
  const html = `
         <strong>Dr. ${UserName}</strong>
      `;

  accountDetails.innerHTML = html;
} else {
  const html = `
         <strong>Pharm. ${UserName}</strong>
      `;

  accountDetails.innerHTML = html;
}

