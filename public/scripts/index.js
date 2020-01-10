const accountDetails = document.querySelector(".user-name");

let UserName = sessionStorage.getItem("name");

let UserRole = sessionStorage.getItem("role");
console.log(UserRole, "role");

const html = `
         <strong>${UserRole}. ${UserName}</strong>
      `;



accountDetails.innerHTML = html;